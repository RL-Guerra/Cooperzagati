import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../src/assets/img/logo1.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Cooperzagati</Text>
        <Text style={styles.subtitle}>Coleta de Óleo Consciente</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>1,245L</Text>
          <Text style={styles.statLabel}>Óleo Coletado</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>50+</Text>
          <Text style={styles.statLabel}>Voluntários</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <Link href="/quero_doar" asChild>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Quero Doar</Text>
          </TouchableOpacity>
        </Link>
        
        <Link href="/voluntario" asChild>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Seja Voluntário</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Sobre Nós</Text>
        <Text style={styles.infoText}>
          A Cooperzagati é uma ONG dedicada à coleta e reciclagem de óleo de cozinha usado,
          promovendo a sustentabilidade e o bem-estar da nossa comunidade em Taboão da Serra.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000080',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    width: '45%',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000080',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  actionsContainer: {
    padding: 20,
    gap: 10,
  },
  actionButton: {
    backgroundColor: '#000080',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  infoSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000080',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
});