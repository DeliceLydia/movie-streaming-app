import { View, Image, StyleSheet, Text } from 'react-native';

const ActionCard = ({ image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: `https://image.tmdb.org/t/p/w500${image}`}} style={styles.cardImage} />
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  card: {
    width: 300,
    marginTop: 20,
    marginLeft: 15
  },
  cardImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  }
});