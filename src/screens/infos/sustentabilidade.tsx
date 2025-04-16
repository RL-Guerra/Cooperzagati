import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export const TelaSustentabilidade = () => {
  return (
    <View style={styles.container}>
      <Button title='Home' onPress={ () => router.navigate('/(tabs)')}/>
      <Text style={styles.title}>Sustentabilidade</Text>

      <Image
        source={require('../../assets/img/sustentabilidade.png')}
        style={styles.image}
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>❌ Impactos do Descarte Incorreto</Text>
        <Text style={styles.text}>
          • 1 litro de óleo contamina até 25 mil litros de água.{"\n"}
          • Entope canos e redes de esgoto.{"\n"}
          • Aumenta riscos à saúde e proliferação de pragas.{"\n"}
          • Prejudica animais aquáticos e solo.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>✅ Por que Descartar Corretamente?</Text>
        <Text style={styles.text}>
          • Preserva o meio ambiente e os recursos hídricos.{"\n"}
          • Permite reciclagem em sabão e biodiesel.{"\n"}
          • Evita danos ao encanamento e infraestrutura urbana.{"\n"}
          • Promove práticas sustentáveis.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🌱 Como a Cooperzagati Atua</Text>
        <Text style={styles.text}>
          A Cooperzagati recolhe o óleo usado de forma segura, evitando impactos ambientais.{"\n"}
          Contribuímos com educação ambiental, geração de renda para famílias cooperadas e economia circular.
        </Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000080',
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 20,
    borderRadius: 15,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000080',
  },
  text: {
    fontSize: 15,
    color: '#333',
    textAlign: 'left',
  },
});

export default TelaSustentabilidade;