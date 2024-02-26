import { View, Image, StyleSheet, Text } from 'react-native';

const Card = ({ title_movie, image }) => {
  return (
    <View style={styles.card}>
      <View>
      <Text style={styles.title}>{title_movie}</Text>
      </View>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}`}} style={styles.cardImage} />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    width: 430,
    marginTop: 20,
    marginLeft: 15
  },
  cardImage: {
    width: '100%',
    height: 460,
    resizeMode: 'cover',
  },
  title: {
    color: '#e0bc39',
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  }
});