import { Text, ScrollView, StyleSheet, View } from "react-native";

const Types = () => {
  return (
    <View>
      <ScrollView style={styles.scrollContent} horizontal>
        <Text style={styles.features}>Features</Text>
        <Text style={styles.item}>Series</Text>
        <Text style={styles.item}>Films</Text>
        <Text style={styles.item}>Origin</Text>
        <Text style={styles.item}>Thriller</Text>
        <Text style={styles.item}>Detective</Text>
        <Text style={styles.item}>Romantic</Text>
      </ScrollView>
    </View>
  );
};

export default Types;

const styles = StyleSheet.create({
  scrollContent: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 5
  },
  features: {
    marginRight: 20,
    marginTop: 8,
    color: "#eac866",
    textDecorationLine: 'underline',
    paddingBottom: 20,
    fontSize: 18,
    fontWeight: "600",
  },
  item: {
    marginRight: 20,
    paddingLeft: 30,
    paddingTop: 8,
    color: "#a1a3a5",
    fontSize: 18,
    fontWeight: "600"
  },
});