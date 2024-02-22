import { Text, ScrollView, StyleSheet, View } from "react-native";

const Trending = () => {
  data = [
    "Popular Today",
    "Marvel",
    "Fans Choice",
    "Star War",
    "Most Watched",
    "Romantic",
    "Actions",
  ];
  return (
    <View>
      <ScrollView horizontal contentContainerStyle={styles.container}>
        {data.map((item, index) => (
          <Text key={index} style={styles.item}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  item: {
    color: "#a2a4a5",
    marginLeft: 50,
    borderWidth: 1,
    borderColor: "#35373b",
    height: 30,
    paddingTop: 3,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
  },
  release: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20
  }
});
