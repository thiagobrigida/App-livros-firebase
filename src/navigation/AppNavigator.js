import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { NavigationContainer } from '@react-navigation/native';

import TelaLogin from '../screens/TelaLogin';
import TelaListaLivro from '../screens/TelaListaLivroLivro';


const Stack = createStackNavigator();

export default function Navigator() {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return null; 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {usuario ? (
          <Stack.Screen name="Home">
            {(props) => <TelaListaLivro {...props} usuario={usuario} />}
          </Stack.Screen>
        ) : (

          <>
            <Stack.Screen name="Login" component={TelaLogin} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}