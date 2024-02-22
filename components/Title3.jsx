import { View, StyleSheet, Text } from "react-native";

const Title3 = () => {
  return (
    <View style={styles.release}>
      <View style={styles.text}>
        <Text style={{ color: "#edeced", fontSize: 18, fontWeight: "bold" }}>Popular on</Text>
        <Text style={{ color: "#e0bc39", fontSize: 18, fontWeight: "bold"}}>Muvi</Text>
      </View>
      <View>
        <Text style={{ color: "#505256", marginTop: 5 }}>View More</Text>
      </View>
    </View>
  );
};

export default Title3;

const styles = StyleSheet.create({
  release: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  text: {
    flexDirection: 'row',
    gap: 8
  }
});
