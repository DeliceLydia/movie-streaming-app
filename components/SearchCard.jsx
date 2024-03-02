import { View, Image, StyleSheet, Text, Pressable } from "react-native";

const SearchCard = ({ title_movie, image, overview, navigation, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.title}>{title_movie}</Text>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${image}` }}
          style={styles.cardImage}
        />
        <Text style={{ color: "#696a6b", marginTop: 15, textAlign: "center" }}>
          {overview}
        </Text>
      </View>
    </Pressable>
  );
};

export default SearchCard;

const styles = StyleSheet.create({
  card: {
    width: 430,
    marginTop: 20,
    marginLeft: 15,
  },
  cardImage: {
    width: "100%",
    height: 460,
    resizeMode: "cover",
  },
  title: {
    color: "#e0bc39",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
});
