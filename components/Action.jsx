import React, { useEffect, useState } from "react";
import YouTubePlayer from "react-native-youtube-iframe";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  StatusBar,
  ScrollView,
} from "react-native";
import MadeForYou from "./Made";
import AntiDesign from "react-native-vector-icons/AntDesign";

const Action = ({ route }) => {
  const [isPlaying, setIsPlaying] = useState("");
  const [paramsData, setParamsData] = useState(route.params);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDFhZWQ4YWFiYzg3YjY3MjFmMTBlMGZmYWU0ZGI0ZiIsInN1YiI6IjY1ZDg2YzI4OTM2OWEyMDE4NjYzNzk0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wtza5o9-lAFYuvvEVssbX0gILMJgilfmyiXx6f8UVF0",
    },
  };

  useEffect(() => {
    handlePlay();
  }, [route.params]);

  const handlePlay = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${paramsData.id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.results && response.results.length > 0) {
          setIsPlaying(response.results[0].key);
        } else {
          console.error("No video key found in the API response");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <View style={styles.backgroundImage}>
      <StatusBar
        color="#fff"
        backgroundColor="#25272a"
        barStyle="light-content"
      />
      <YouTubePlayer height={400} videoId={isPlaying} />

      <ScrollView style={{ marginTop: -40, marginLeft: 20 }}>
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
              <Text style={{ marginLeft: 5 }}>Play Movie</Text>
            </Pressable>
          </View>
          <Text style={{ color: "#606264", marginTop: 20, marginBottom: 20 }}>
            {paramsData.overview}
          </Text>
        </ScrollView>
      <MadeForYou />
    </View>
  );
};

export default Action;

const styles = StyleSheet.create({
  backgroundImage: {
    backgroundColor: "#25272a",
    height: "100%",
  },
  cardImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
});