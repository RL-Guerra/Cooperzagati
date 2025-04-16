import { router } from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Button,
  ScrollView,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export const TelaApresentacao = () => {
  const renderBackgroundGrid = () => {
    const rows = 6;
    const cols = 4;
    const pattern = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        pattern.push(
          <Image
            key={`${row}-${col}`}
            source={require('../../assets/img/logo2.png')}
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

  const buttons: Array<
    | ({ title: string; route: '/(stacks)/cadastro' | '/(stacks)/login' | '/(stacks)/historico' | '/(stacks)/doacao_total' | '/(stacks)/quero_doar' | '/(stacks)/voluntario' | '/(stacks)/localizacao'; action?: never })
    | ({ title: string; action: () => void; route?: never })
  > = [
    { title: 'Cadastro', route: '/(stacks)/cadastro' },
    { title: 'Login', route: '/(stacks)/login' },
    { title: 'Histórico', route: '/(stacks)/historico' },
    { title: 'Doação Total', route: '/(stacks)/doacao_total' },
    { title: 'Quero Doar', route: '/(stacks)/quero_doar' },
    { title: 'Seja Voluntário', route: '/(stacks)/voluntario' },
    { title: 'Localização', route: '/(stacks)/localizacao' },
    { title: 'Sustentabilidade', action: () => router.back() },
  ];

  return (
    <View style={styles.background}>
      {renderBackgroundGrid()}

      <ScrollView contentContainerStyle={styles.overlay}>
        {/* Botões organizados em linha */}
        <View style={styles.buttonContainer}>
          {buttons.map((btn, index) => (
            <View key={index} style={styles.buttonWrapper}>
              <Button
                title={btn.title}
                onPress={() =>
                  btn.route
                    ? router.navigate(btn.route)
                    : btn.action && btn.action()
                }
              />
            </View>
          ))}
        </View>

        {/* Conteúdo da tela */}
        <Text style={styles.title}>Cooperzagati</Text>
        <Text style={styles.title}>Bem-vindo ao Cooperzagati</Text>
        <Image
          source={require('../../assets/img/logo1.png')}
          style={styles.image}
        />
        <Text style={styles.description}>
          Conscientize sua comunidade sobre o descarte correto do óleo de
          cozinha. Junte-se a nós nesta iniciativa!
        </Text>
      </ScrollView>
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
    opacity: 0.09,
  },
  overlay: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonWrapper: {
    margin: 6,
    minWidth: 140,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000080',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
    borderRadius: 999,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});

export default TelaApresentacao;
