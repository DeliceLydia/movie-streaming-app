import {View, StyleSheet, Text } from "react-native";

const Title2 = () => {
  return(
    <View style={styles.release}>
        <Text style={{color: "#edeced", fontSize: 18, fontWeight: 'bold'}}>Made for You</Text>
        <Text style={{color: "#505256", marginTop: 5}}>View More</Text>
      </View>
  )
}

export default Title2;

const styles = StyleSheet.create({
  release: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20
  }
})