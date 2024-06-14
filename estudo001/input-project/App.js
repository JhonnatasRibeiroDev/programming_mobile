import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  return (
    <View style={styles.container}>
      <Text>Digite um texto:</Text>
      <TextInput onChangeText={novoTexto => setTexto(novoTexto)} placeholder='Digite aqui' />
      <StatusBar style="auto" />
      <Text>
        {texto
          .split(' ')
          .map(palavra => palavra +"("+ (palavra.length > 0 ? "👨🏼‍🦽".repeat(palavra.length): "vazio") +")")
          .join('')
        }</Text>
      <Text>Quantidade de Caracteres: {texto.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
