import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../src/assets/img/logo1.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>Nome do Usuário</Text>
        <Text style={styles.email}>usuario@email.com</Text>
      </View>

      <View style={styles.menuContainer}>
        <Link href="/historico" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Histórico de Doações</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/sustentabilidade" asChild>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>Sustentabilidade</Text>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, styles.logoutButton]}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000080',
  },
  email: {
    fontSize: 16,
    color: '#666',
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#ff4444',
    borderRadius: 8,
    borderBottomWidth: 0,
  },
  logoutText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});