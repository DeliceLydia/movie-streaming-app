import { View, Image, StyleSheet } from 'react-native';

const Card = ({ image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImage} />
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
    height: 250,
    resizeMode: 'cover',
  },
});