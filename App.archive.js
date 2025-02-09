import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import monkeyPng from "./assets/monkey.png";
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState("5");
  return (
    <ScrollView>
      <Text style={{ fontSize: 50, fontWeight: 500, color: "red" }}>
        Hello Smile
      </Text>
      {/* Method 2: loading image from URI */}
      <Image
        style={styles.image}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2wcpqmDDUjViB6TEfWO-hxzaf5cwENejaQ&usqp=CAU",
        }}
      ></Image>

      {/* Method 1: loading image from local directory */}
      <Image fadeDuration={5000} source={monkeyPng}></Image>
      <Text style={{ fontSize: 50, fontWeight: 500, color: "green" }}>
        {text}
      </Text>
      <TextInput 
      style={styles.input}
      value={text}
      // Method 1:
      // onChangeText={setText}
      
      // Method 2: setText
      // Why? to do sanitization of our input
      // Stanley: do invalid text input check on both frontend and backend
      // Edric: user experience, eg. cannot use special characters, do validation on frontend will make the app faster
      onChangeText={(text) => {
        console.log("Start");
        setText(text); // string;
        setText(() => {}); // function
      }}
      ></TextInput>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 500,
    width: 500,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


// <View> = <div>
// <Text> = <p> 

// Why? to do sanitization of our input
