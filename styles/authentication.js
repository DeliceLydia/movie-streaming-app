import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    backgroundColor: "#26282c",
  },
  image: {
    marginTop: 60,
  },
  textContainer: {
    alignItems: "center",
  },
  text: {
    color: "#868889",
    fontSize: 16,
  },
  input: {
    height: 50,
    borderRadius: 20,
    marginTop: 20,
    width: "65%",
    color: "white",
    borderWidth: 0,
    backgroundColor: "#26282c",
    marginBottom: 12,
  },
  get: {
    width: 380,
    marginTop: 30,
  },
  buttonIcon: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#000",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    width: "65%",
    gap: 10,
    marginTop: 30,
  },
  iconStyle: {
    marginTop: 2,
  },
  google: {
    width: 18,
    height: 18,
    marginTop: 3,
  },
  bg: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    width: "65%",
    marginTop: 30,
    gap: 10,
  },
  link: {
    flexDirection: "row",
    marginTop: 120,
    gap: 10,
  },
  error: {
    color: 'red'
  }
});

export default styles;
