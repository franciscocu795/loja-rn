
import { Image, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600',
        }}
        style={styles.image}
        resizeMode="cover"
      />

      <Text style={styles.title}>Minha Loja</Text>

      <Text style={styles.subtitle}>
        Bem-vindo à nossa loja!
      </Text>

      <Text style={styles.description}>
        Encontra aqui produtos de qualidade para o teu dia a dia.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0FE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  image: {
    width: 280,
    height: 190,
    borderRadius: 16,
    marginBottom: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#173B70',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    color: '#444444',
    textAlign: 'center',
    lineHeight: 24,
  },
});
