import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export const TelaHistoricoAtividades = () => {

const doacoes = [
  { id: '1', data: '05/04/2025', quantidade: 2, local: 'Ponto A' },
  { id: '2', data: '22/03/2025', quantidade: 3.5, local: 'Ponto B' },
];

const voluntariado = [
  { id: '1', atividade: 'Mutirão de coleta', data: '12/03/2025' },
  { id: '2', atividade: 'Palestra em escola', data: '28/02/2025' },
];

const metas = {
  mensal: { meta: 5, doado: 3.5 },
  anual: { meta: 60, doado: 10 },
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Atividades</Text>

      {/* Doações */}
      <Text style={styles.sectionTitle}>📦 Doações</Text>
      {doacoes.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.itemText}>
            {item.quantidade}L doados em {item.data} - {item.local}
          </Text>
        </View>
      ))}

      {/* Voluntariado */}
      <Text style={styles.sectionTitle}>🤝 Voluntariado</Text>
      {voluntariado.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.itemText}>
            {item.atividade} - {item.data}
          </Text>
        </View>
      ))}

      {/* Metas */}
      <Text style={styles.sectionTitle}>🎯 Acompanhamento de Metas</Text>
      <View style={styles.metaBox}>
        <Text style={styles.metaText}>
          Meta mensal: {metas.mensal.doado}L / {metas.mensal.meta}L
        </Text>
        <Text style={styles.metaText}>
          Meta anual: {metas.anual.doado}L / {metas.anual.meta}L
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
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000080',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: '#444',
  },
  metaBox: {
    marginTop: 10,
    backgroundColor: '#e0f7fa',
    padding: 12,
    borderRadius: 8,
  },
  metaText: {
    fontSize: 16,
    color: '#006064',
    marginBottom: 5,
  },
});

export default TelaHistoricoAtividades;