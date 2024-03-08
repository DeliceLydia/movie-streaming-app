import React, { useState, useContext } from "react";
import axios from "axios";
import Entypo from "react-native-vector-icons/Entypo";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import { TextInput } from "react-native-paper";
import SearchCard from "./SearchCard";
import { ChangeIntoDarkMode } from "../context/themeContext";

const Search = ({navigation}) => {
  const [searcher, setSearcher] = useState([]);
  const [searchdata, setSearchdata] = useState("");
  const {dark,changeIntoDark} = useContext(ChangeIntoDarkMode);

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
    <View style={[styles.container, {backgroundColor:dark?'#202123':'white'}]}>
      <View
      style={{
        flexDirection: "row",
        justifyContent: 'space-between'
      }}
      >
      <Text style={styles.title}>Search</Text>
      <View
        style={{
          flexDirection: "row",
          paddingLeft: 20,
          paddingTop: 20,
          marginBottom: 10,
        }}
        >
          <Text style={{color: "#848686", marginTop: 12, fontSize: 16}}>Change Mode</Text>
          <Entypo
              name="switch"
              type="font-awesome"
              color= "#848686"
              paddingLeft= {25}
              size={40}
              onPress={()=>{changeIntoDark()}}
            />
        </View>
      </View>
      <TextInput
      theme={{
        colors: {
          primary: "#FCD130",
        },
      }}
        style={styles.input}
        mode="flat"
        label="Type title, categories, years, etc."
        color="#595b5f"
        underlineColor="#2c2e31"
        textColor="#868889"
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
            <View
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <SearchCard
                image={item.poster_path}
                title_movie={item.original_title}
                overview={item.overview}
                onPress={()=>{navigation.navigate('Action', item)}}
              />
            </View>
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    height: "100%"
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
