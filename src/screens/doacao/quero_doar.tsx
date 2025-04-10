import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Picker } from 'react-native';

export const TelaQueroDoar = () => {
  const [quantidade, setQuantidade] = useState('');
  const [pontoSelecionado, setPontoSelecionado] = useState('');
  const [doacaoConfirmada, setDoacaoConfirmada] = useState(false);

  const pontosDeColeta = [
    'Ponto A - Centro',
    'Ponto B - Bairro Verde',
    'Ponto C - Zona Sul',
  ];

  const handleConfirmarDoacao = () => {
    if (!quantidade || !pontoSelecionado) {
      Alert.alert('Erro', 'Preencha todos os campos antes de confirmar.');
      return;
    }

    setDoacaoConfirmada(true);
  };

  const dataAtual = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quero Doar</Text>

      {!doacaoConfirmada ? (
        <>
          <Text style={styles.label}>Quantidade de óleo (em litros):</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={quantidade}
            onChangeText={setQuantidade}
            placeholder="Ex: 2.5"
          />

          <Text style={styles.label}>Selecione um ponto de coleta:</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={pontoSelecionado}
              onValueChange={(itemValue: React.SetStateAction<string>) => setPontoSelecionado(itemValue)}
            >
              <Picker.Item label="Escolha um ponto..." value="" />
              {pontosDeColeta.map((ponto, index) => (
                <Picker.Item key={index} label={ponto} value={ponto} />
              ))}
            </Picker>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleConfirmarDoacao}>
            <Text style={styles.buttonText}>Confirmar Doação</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.confirmationBox}>
          <Text style={styles.confirmText}>✅ Doação Confirmada!</Text>
          <Text style={styles.summary}>
            • Quantidade: {quantidade}L{'\n'}
            • Ponto de Coleta: {pontoSelecionado}{'\n'}
            • Data da Entrega: {dataAtual}
          </Text>
          <Text style={styles.thanks}>
            Muito obrigado por doar! 🌱{'\n'}
            Você está ajudando o meio ambiente e a comunidade.{'\n'}
            Que tal se tornar um voluntário também?
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
  label: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    marginBottom: 20,
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
  },
  summary: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  thanks: {
    fontSize: 16,
    color: '#006400',
    textAlign: 'center',
  },
});

export default TelaQueroDoar;