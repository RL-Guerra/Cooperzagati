import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TelaCadastro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput style={styles.input} placeholder="Nome Completo" />
      <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Endereço" />
      <Button title="Cadastrar" onPress={() => alert('Cadastro realizado!')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default TelaCadastro;