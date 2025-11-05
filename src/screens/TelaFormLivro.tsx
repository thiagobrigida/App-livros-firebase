import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { db, auth } from '../firebaseConfig'; 
import { collection, addDoc } from "firebase/firestore"; 

const TelaFormLivro = ({ navigation }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const handleSalvarLivro = async () => {
    if (titulo.trim() === '' || autor.trim() === '') {
      Alert.alert("Erro", "Título e Autor são campos obrigatórios.");
      return;
    }
    const user = auth.currentUser;
    if (!user) {
      Alert.alert("Erro", "Você precisa estar logado para adicionar um livro.");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "livros"), {
        titulo: titulo,
        autor: autor,
        userId: user.uid 
      });

      console.log("Livro salvo com ID: ", docRef.id);
      Alert.alert("Sucesso", "Livro salvo com sucesso!");

      setTitulo('');
      setAutor('');
      navigation.goBack();

    } catch (error) {
      console.error("Erro ao salvar o livro: ", error);
      Alert.alert("Erro", "Não foi possível salvar o livro.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título do Livro:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: O Guia do Mochileiro das Galáxias"
        value={titulo}
        onChangeText={setTitulo}
      />
      
      <Text style={styles.label}>Autor do Livro:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Douglas Adams"
        value={autor}
        onChangeText={setAutor}
      />
      
      <Button title="Salvar Livro" onPress={handleSalvarLivro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    fontSize: 16,
  },
});

export default TelaFormLivro;