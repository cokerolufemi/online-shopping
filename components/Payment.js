import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
// import { MaterialIcons, Feather, Entypo, MaterialCommunityIcons, SimpleLineIcons, EvilIcons } from "@expo/vector-icons";


const Payment = () => {
  return (
    <View style={styles.container}>
      <View style={styles.SuccessfulContainer}>
        <Text style={styles.SuccessfulText}>PAYMENT SUCCESSFUL</Text>
      </View>
      <View>
        <Text style={styles.mainText}>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industy's 
            standard dummy text ever since the 1500s, when an unknown printer too
        </Text>
      </View>
      <View>
        <Image style={styles.Image} source={require("../assets/successful-shopping.jpg")} />
      </View>
      <View style={styles.buttonContainer1}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.buttonContainerNext}>
        <View ><Text style={styles.privious}>Previous</Text></View>

        <TouchableOpacity style={styles.buttonNext1}>
          <Text style={styles.buttonnextText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNext}>
          <Text style={styles.buttonnextText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonNext3}>
          <Text style={styles.buttonnextText}>3</Text>
        </TouchableOpacity>


      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: 20,
    marginTop: 50,
    backgroundColor: "#fffaf0",
    marginHorizontal: 18,
  },
  Image: {
    width: 300,
    height: 300,
    marginHorizontal: 10,
    marginVertical: 20,
    alignSelf: "center",
    borderRadius: 15,

  },
  SuccessfulContainer: {
    marginTop: 50,
    marginVertical: 5,
    marginBottom: 5,
    marginHorizontal: 20,
  },
  LoginHeader: {
    fontSize: 20,
    color: "#5082d9",
    fontWeight: "bold",
    height: 70,
  },
  buttonContainer1: {
    width: 190,
    height: 60,
    backgroundColor: "#6a5acd",
    justifyContent: "center",
    alignSelf: "center",
    //alignItems: "center",
    borderRadius: 30,
    marginVertical: 20,
    //marginHorizontal:20
  },
  buttonContainer: {
    width: 190,
    height: 60,
    backgroundColor: "#6a5acd",
    justifyContent: "center",
    // alignItems: "center",
    alignSelf: "center",
    borderRadius: 30,
    marginVertical: 5,
    marginHorizontal: 5
  },
  buttonText: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    alignSelf: "center"
  },
  SuccessfulText: {
    fontSize: 26,
    fontWeight: "bold",

  },
  mainText: {
    fontSize: 16,
    fontWeight: "normal",
    marginHorizontal: 20,

  },
  mainTextContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  buttonContainerNext: {
    flexDirection: "row",
    justifyContent: "center",
    //  flex:1,
    alignItems: "center",
    // marginTop:40,
    marginVertical: 40,
    marginHorizontal: 5

  },
  buttonNext: {
    width: 20,
    height: 14,
    backgroundColor: "#a9a9a9",
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 5
  },
  buttonNext1: {
    width: 20,
    height: 14,
    backgroundColor: "#a9a9a9",
    borderRadius: 20,
    marginVertical: 5,
    marginLeft: 70
  },
  buttonNext3: {
    width: 25,
    height: 14,
    backgroundColor: "#6a5acd",
    borderRadius: 20,
    marginVertical: 5,
    marginRight: 140
  },
  buttonnextText: {
    fontSize: 8,
    marginVertical: 5,
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  },
  privious: {
    marginLeft: 15,
    fontSize: 18,
    textAlign: "left"
  },
});

export default Payment;