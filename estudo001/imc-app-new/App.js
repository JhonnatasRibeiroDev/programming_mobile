import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    if (isNaN(pesoNum) || isNaN(alturaNum) || alturaNum <= 0) {
      Alert.alert("Erro", "Por favor, insira valores válidos para peso e altura.");
      return;
    }
    const imc = pesoNum / (alturaNum * alturaNum);
    let classificacao = '';
    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
    } else if (imc < 24.9) {
      classificacao = 'Peso normal';
    } else if (imc < 29.9) {
      classificacao = 'Sobrepeso';
    } else if (imc < 34.9) {
      classificacao = 'Obesidade grau I';
    } else if (imc < 39.9) {
      classificacao = 'Obesidade grau II';
    } else {
      classificacao = 'Obesidade grau III (mórbida)';
    }
    Alert.alert("Resultado", `IMC: ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>IMC - JhonhDev</Text>
      </View>
      <View style={styles.main}>
        <Text style={styles.mainLabel}>Informe seus dados:</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ex. Jhonnatas" 
            value={nome}
            onChangeText={setNome}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Peso (kg)</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ex. 70" 
            keyboardType="numeric" 
            value={peso}
            onChangeText={setPeso}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Altura (m)</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Ex. 1.75" 
            keyboardType="numeric" 
            value={altura}
            onChangeText={setAltura}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Button title="Calcular" onPress={calcularIMC} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flex: 1,
    backgroundColor: '#4a90e2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  main: {
    flex: 5,
    paddingTop: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  mainLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  footer: {
    flex: 1,
    backgroundColor: '#4a90e2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
