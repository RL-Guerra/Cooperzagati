import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';



export const TelaApresentacao = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Cooperzagati</Text>
      <Image
        source={require('../../src/img/logo1.png')} // Substitua pela URL da sua imagem
        style={styles.image}
      />
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
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 130,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginTop: 100,
  },
  image: {
    padding: 200,
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: '100%',
    
  },
});

export default TelaApresentacao;