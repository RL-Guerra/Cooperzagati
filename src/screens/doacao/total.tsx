import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export const TelaDoacoesTotais = () => {
  // Exemplo de dado estático — futuramente buscar esse valor da API ou banco de dados
  const totalDoado = 1245;

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/logo1.png')}
        style={styles.image}
      />

      <Text style={styles.title}>Doações Totais</Text>

      <Text style={styles.totalLitros}>
        {totalDoado} litros de óleo arrecadados!
      </Text>

      <Text style={styles.description}>
        Agradecemos a todos que contribuíram com a Cooperzagati.{"\n"}
        Seu gesto faz a diferença para o meio ambiente e para muitas famílias!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 30,
    borderRadius: 100,
    opacity: 0.8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000080',
    marginBottom: 20,
    textAlign: 'center',
  },
  totalLitros: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006400',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
  },
});

export default TelaDoacoesTotais;