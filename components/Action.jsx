import React, { useEffect, useState } from "react";
import YouTube from "react-native-youtube-iframe";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  StatusBar,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import AntiDesign from "react-native-vector-icons/AntDesign";
import ActionCard from "./ActionCard";

const Action = ({ navigation, route }) => {
  const paramsData = route.params;
  const [movie, setMovie] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDFhZWQ4YWFiYzg3YjY3MjFmMTBlMGZmYWU0ZGI0ZiIsInN1YiI6IjY1ZDg2YzI4OTM2OWEyMDE4NjYzNzk0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wtza5o9-lAFYuvvEVssbX0gILMJgilfmyiXx6f8UVF0",
    },
  };
  const FetchDetails = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovie(response.results);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    FetchDetails();
  }, []);

  return (
    <View style={styles.backgroundImage}>
      <StatusBar
        color="#fff"
        backgroundColor="#25272a"
        barStyle="light-content"
      />
       <Image source={{ uri: `https://image.tmdb.org/t/p/w500${paramsData.poster_path}`}} style={styles.cardImage} />

      <ScrollView style={{ marginTop: 20, marginLeft: 20 }}>
        <Text style={{ fontSize: 24, color: "#fff", fontWeight: "bold" }}>
          {paramsData.title}
        </Text>
        <Text style={{ color: "#7a7a7b", marginBottom: -18 }}></Text>
        <Text>
        <Text style={{ color: "#7a7a7b" }}>{paramsData.release_date}</Text>
        </Text>
 
          <View style={{ flexDirection: "row", gap: 50 }}>
            <Pressable
              style={{
                flexDirection: "row",
                backgroundColor: "#fed12f",
                width: "70%",
                marginTop: 20,
                paddingTop: 10,
                paddingBottom: 10,
                borderRadius: 8,
                justifyContent: "center",
              }}
            >
              <AntiDesign name="playcircleo" size={20} />
              <Text style={{marginLeft: 5}}>Play Movie</Text>
            </Pressable>
          </View>
          <Text style={{ color: "#606264", marginTop: 20, marginBottom: 20 }}>
            {paramsData.overview}
          </Text>
      </ScrollView>
      {isPlaying && (
        <YouTube
          videoId={paramsData.video}
          height={300}
          play={isPlaying}
          onChangeState={(event) => {
            if (event === "ended") {
              setIsPlaying(false);
            }
          }}
        />
      )}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movie}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View
            style={{
              marginTop: 30,
              marginRight: 10,
              justifyContent: "space-between",
            }}
          >
            <ActionCard image={item.poster_path}/>
          </View>
        )}
      />
    </View>
  );
};

export default Action;

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: "#25272a",
    height: "100%"
  },
  cardImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  }
});
