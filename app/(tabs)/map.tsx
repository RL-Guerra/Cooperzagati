import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const collectionPoints = [
  {
    id: 1,
    title: 'Sede Cooperzagati',
    description: 'Ponto principal de coleta',
    coordinate: {
      latitude: -23.6190,
      longitude: -46.7784,
    },
  },
  {
    id: 2,
    title: 'Ponto de Coleta - Centro',
    description: 'Coleta de segunda a sexta',
    coordinate: {
      latitude: -23.6226,
      longitude: -46.7752,
    },
  },
  {
    id: 3,
    title: 'Ponto de Coleta - Jardim Helena',
    description: 'Coleta aos sábados',
    coordinate: {
      latitude: -23.6157,
      longitude: -46.7830,
    },
  },
];

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pontos de Coleta</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.6190,
          longitude: -46.7784,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {collectionPoints.map((point) => (
          <Marker
            key={point.id}
            coordinate={point.coordinate}
            title={point.title}
            description={point.description}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
    color: '#000080',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.75,
  },
});