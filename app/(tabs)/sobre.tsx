import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TelaApresentacao = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Cooperzagati</Text>
      <Text style={styles.description}>
        Conscientize sua comunidade sobre o descarte correto do óleo de cozinha. Junte-se a nós nesta iniciativa!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});

export default TelaApresentacao;
