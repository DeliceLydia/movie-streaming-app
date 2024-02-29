import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Text
} from "react-native";
import { TextInput } from "react-native-paper";

const Search1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <ScrollView style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          mode="flat"
          label="Type title, categories, years, etc."
          color="#595b5f"
          underlineColor="#2c2e31"
          right={
            <TextInput.Icon
              icon="magnify"
              color="#bea047"
              backgroundColor="#2c2e31"
            />
          }
        />
        <View style={styles.imageContainer}>
          <View style={styles.imagesContainer}>
          <Text style={styles.popular}>Popular Search</Text>
            <Image
              source={require("../assets/images.jpeg")}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={{marginLeft: -2, color: "#f6f8f9", fontSize: 18, fontWeight: "bold"}}>Joker {"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15, marginTop: -20}}>2019 {"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15}}>Action, 18+, Dark, inspiring {"\n"}</Text>
            <Text style={{color: "#787a7b"}}>Comedy</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imagesContainer}>
          <Text style={styles.popular}>Popular Search</Text>
            <Image
              source={require("../assets/images.jpeg")}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={{marginLeft: -2, color: "#f6f8f9", fontSize: 18, fontWeight: "bold"}}>Joker {"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15, marginTop: -20}}>2019 {"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15}}>Action, 18+, Dark, inspiring {"\n"}</Text>
            <Text style={{color: "#787a7b"}}>Comedy</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imagesContainer}>
          <Text style={styles.popular}>Popular Search</Text>
            <Image
              source={require("../assets/images.jpeg")}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={{marginLeft: -2, color: "#f6f8f9", fontSize: 18, fontWeight: "bold"}}>Joker {"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15, marginTop: -20}}>2019 {"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15}}>Action, 18+, Dark, inspiring {"\n"}</Text>
            <Text style={{color: "#787a7b"}}>Comedy</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imagesContainer}>
          <Text style={styles.popular}>Popular Search</Text>
            <Image
              source={require("../assets/images.jpeg")}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={{marginLeft: -2, color: "#f6f8f9", fontSize: 18, fontWeight: "bold"}}>Joker {"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15, marginTop: -20}}>2019 {"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15}}>Action, 18+, Dark, inspiring {"\n"}</Text>
            <Text style={{color: "#787a7b"}}>Comedy</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Search1;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#1f2123",
  },
  title: {
    color: "#f6f8f9",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 50,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#2c2e31",
  },
  inputContainer: {
    backgroundColor: "#26282c",
    paddingTop: 10,
    height: "100%",
  },
  image: {
    width: 180,
    resizeMode: "contain",
    marginTop: 4,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  popular: {
    marginBottom: -20,
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  infoContainer:  {
    marginTop: 40,
    marginLeft: 10
  },
});
