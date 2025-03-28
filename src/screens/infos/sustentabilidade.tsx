import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TelaSustentabilidade = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sustentabilidade</Text>
      <Text style={styles.description}>
        O descarte incorreto de óleo afeta o meio ambiente. Recicle e ajude a proteger o planeta com a Cooperzagati!
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

export default TelaSustentabilidade;