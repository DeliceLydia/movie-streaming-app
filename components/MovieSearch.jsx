import React, { useState } from "react";
import axios from "axios";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
} from "react-native";
import { TextInput } from "react-native-paper";
import SearchCard from "./SearchCard";

export default function MovieSearch() {
  const [searcher, setSearcher] = useState([]);
  const [searchdata, setSearchdata] = useState("");

  React.useEffect(() => {
    if (searchdata.length > 0) {
      SearchMovie();
    } else {
      setSearcher([]);
    }
  }, [searchdata]);

  const SearchMovie = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=e41aed8aabc87b6721f10e0ffae4db4f&language=en-US&query=${searchdata}&page=1&include_adult=false`
      );
      setSearcher(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <TextInput
        style={styles.input}
        mode="flat"
        label="Type title, categories, years, etc."
        color="#595b5f"
        underlineColor="#2c2e31"
        value={searchdata}
        onChangeText={(e) => setSearchdata(e)}
        right={
          <TextInput.Icon
            icon="magnify"
            color="#bea047"
            backgroundColor="#2c2e31"
          />
        }
      />
      <FlatList
        data={searcher}
        renderItem={({ item }) => (
          <>
            <TouchableHighlight
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <SearchCard
                image={item.poster_path}
                title_movie={item.original_title}
                overview={item.overview}
              />
            </TouchableHighlight>
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

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
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 10,
    marginRight: 10,
  },
  popular: {
    marginBottom: -20,
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  infoContainer: {
    marginTop: 40,
    marginLeft: 10,
  },
});
