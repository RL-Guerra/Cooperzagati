import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const TelaApresentacao = () => {
  const renderBackgroundGrid = () => {
    const rows = 6; // ajuste conforme necessário
    const cols = 4;
    const pattern = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        pattern.push(
          <Image
            key={`${row}-${col}`}
            source={require('../../src/img/logo2.png')}
            style={[
              styles.patternImage,
              {
                top: row * 100,
                left: col * 100,
              },
            ]}
          />
        );
      }
    }

    return pattern;
  };

  return (
    <View style={styles.background}>
      {renderBackgroundGrid()}

      <View style={styles.overlay}>
        <Text style={styles.title}>Bem-vindo ao Cooperzagati</Text>
        <Image
          source={require('../../src/img/logo1.png')}
          style={styles.image}
        />
        <Text style={styles.description}>
          Conscientize sua comunidade sobre o descarte correto do óleo de cozinha. Junte-se a nós nesta iniciativa!
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  patternImage: {
    width: 80,
    height: 80,
    position: 'absolute',
    opacity: 0.09, // efeito marca d’água suave
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
    color: '#000080',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 40,
    borderRadius: 999,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});

export default TelaApresentacao;