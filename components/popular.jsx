import React, { useState } from "react";
import { View, FlatList, StyleSheet, Pressable } from "react-native";
import Card from "./Card";

const PopularMovies = ({ navigation }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDFhZWQ4YWFiYzg3YjY3MjFmMTBlMGZmYWU0ZGI0ZiIsInN1YiI6IjY1ZDg2YzI4OTM2OWEyMDE4NjYzNzk0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wtza5o9-lAFYuvvEVssbX0gILMJgilfmyiXx6f8UVF0",
    },
  };

  fetch(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => setPosts(response.results))
    .catch((err) => console.error(err));

  const [posts, setPosts] = useState([]);

  return (
    <View>
      <FlatList
        horizontal={true}
        data={posts}
        keyExtractor={(item) => {
          return item.id;
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        renderItem={(post) => {
          const item = post.item;
          return <Card title_movie={item.name} image={item.poster_path} />;
        }}
      />
    </View>
  );
};

export default PopularMovies;

const styles = StyleSheet.create({});
