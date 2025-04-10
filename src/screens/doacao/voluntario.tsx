import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export const TelaSejaVoluntario = () => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [disponibilidade, setDisponibilidade] = useState('');
  const [formEnviado, setFormEnviado] = useState(false);

  const handleCadastro = () => {
    if (!nome || !telefone || !disponibilidade) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    setFormEnviado(true);
  };

  return (
    <View style={styles.container}>
      {!formEnviado ? (
        <>
          <Text style={styles.title}>Seja um Voluntário</Text>

          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.input}
            placeholder="Telefone / WhatsApp"
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad"
          />

          <TextInput
            style={styles.input}
            placeholder="Disponibilidade (dias, turnos, horários)"
            value={disponibilidade}
            onChangeText={setDisponibilidade}
            multiline
          />

          <TouchableOpacity style={styles.button} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.confirmationBox}>
          <Text style={styles.confirmText}>✅ Cadastro realizado com sucesso!</Text>
          <Text style={styles.thanks}>
            Obrigado por se voluntariar! 🧡{'\n'}
            Em breve entraremos em contato com mais informações.{'\n'}
            Sua ajuda é muito importante para a Cooperzagati!
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000080',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#000080',
    borderRadius: 100,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  confirmationBox: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e6f5ea',
    borderRadius: 10,
  },
  confirmText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 10,
    textAlign: 'center',
  },
  thanks: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
  },
});

export default TelaSejaVoluntario;