import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text
} from "react-native";

const MyList = () => {
  return(
    <View style={styles.container}>
      <StatusBar color= '#fff' backgroundColor='#202123' barStyle="light-content"/>
      <Image source={require("../assets/muvi.png")} style={styles.image} />
      <View style={{flexDirection: 'row', marginLeft: 60, gap: 40, marginTop: 20, fontSize: 16}}>
        <Text style={{color: "#f4d045", fontSize: 16}}>MyList</Text><Text style={{color: '#a09fa2', fontSize: 15}}>Downloaded</Text>
      </View>
      <ScrollView style={{backgroundColor: '#26282c', marginTop: 10}}>
      <View style={styles.imageContainer}>
          <View style={styles.imagesContainer}>
            <Image
              source={require("../assets/itae.jpeg")}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={{marginLeft: -2, color: "#f6f8f9", fontSize: 18, fontWeight: "bold"}}>Itawewon class{"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15, marginTop: -20}}>2020 {"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15}}>Drama, Asian, Comedy {"\n"}</Text>
            <Text style={{color: "#787a7b"}}>Series</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imagesContainer}>
            <Image
              source={require("../assets/itae.jpeg")}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={{marginLeft: -2, color: "#f6f8f9", fontSize: 18, fontWeight: "bold"}}>Itawewon class{"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15, marginTop: -20}}>2020 {"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15}}>Drama, Asian, Comedy {"\n"}</Text>
            <Text style={{color: "#787a7b"}}>Series</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imagesContainer}>
            <Image
              source={require("../assets/itae.jpeg")}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={{marginLeft: -2, color: "#f6f8f9", fontSize: 18, fontWeight: "bold"}}>Itawewon class{"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15, marginTop: -20}}>2020 {"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15}}>Drama, Asian, Comedy {"\n"}</Text>
            <Text style={{color: "#787a7b"}}>Series</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imagesContainer}>
            <Image
              source={require("../assets/itae.jpeg")}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={{marginLeft: -2, color: "#f6f8f9", fontSize: 18, fontWeight: "bold"}}>Itawewon class{"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15, marginTop: -20}}>2020 {"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15}}>Drama, Asian, Comedy {"\n"}</Text>
            <Text style={{color: "#787a7b"}}>Series</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.imagesContainer}>
            <Image
              source={require("../assets/itae.jpeg")}
              style={styles.image}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={{marginLeft: -2, color: "#f6f8f9", fontSize: 18, fontWeight: "bold"}}>Itawewon class{"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15, marginTop: -20}}>2020 {"\n"}</Text>
            <Text style={{color: "#787a7b", marginBottom: -15}}>Drama, Asian, Comedy {"\n"}</Text>
            <Text style={{color: "#787a7b"}}>Series</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default MyList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#202123',
    height: '100%'
  },
  image: {
    width: 200,
    resizeMode: "contain",
    marginTop: 4,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20
  },
  infoContainer:  {
    marginTop: 40,
    marginLeft: 10
  }
})
