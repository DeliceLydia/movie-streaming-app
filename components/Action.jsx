import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Pressable,
  StatusBar,
} from "react-native";
import AntiDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

const Action = (navigation) => {
  return (
    <ImageBackground
      source={{
        uri: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16726368_p_v8_aa.jpg",
      }}
      style={styles.backgroundImage}
    >
      <StatusBar
        color="#fff"
        backgroundColor="#9f998c"
        barStyle="light-content"
      />
      <Pressable onPress={() => navigation.navigate("Dashboard")}>
      <AntiDesign
        name="arrowleft"
        size={30}
        color="#e9c33f"
        style={{ marginLeft: 20}}
      />
      </Pressable>
     
      <View style={{ marginTop: 100, marginLeft: 20 }}>
        <Text style={{ fontSize: 24, color: "#fff", fontWeight: "bold" }}>
          The Silence
        </Text>
        <Text style={{color: '#7a7a7b'}}>1h29m</Text>
        <View>
          <Text style={{color: '#7a7a7b'}}>Adventure, Romantic, Thriller</Text>
          <View style={{flexDirection: 'row', gap: 50}}>
          <Pressable style={{flexDirection: 'row', backgroundColor: '#fed12f', width: '26%', marginTop: 20, paddingTop: 6, paddingBottom: 6, justifyContent: 'center'}}>
            <Feather name="play" size={20} />
            <Text>Play</Text>
          </Pressable>
          <Pressable style={{flexDirection: 'row', marginTop: 20, paddingTop: 6, paddingBottom: 6, justifyContent: 'center', borderWidth: 1, width: '26%'}}>
            <AntiDesign name="plus" size={20} style={{ color: '#af922f' }} />
            <Text style={{ color: '#888888' }}>My List</Text>
          </Pressable>
          </View>
          <Text style={{color: '#606264', marginTop: 20, marginBottom: 20}}>When the world is under attack by a swarm of creatures called vesps, Ally, a teenager who is aurally impaired, and her family take refuge in a house in a remote place.</Text>
          <Text style={{color: '#47494a'}}>Cast: Kieman shipker, Stanley Tucci, Miranda Otto</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Action;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    opacity: 0.7,
  },
});
