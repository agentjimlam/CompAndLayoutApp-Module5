import { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button, Alert, ScrollView } from "react-native"
import RadioGroup from "react-native-radio-buttons-group";

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [likeCoffee, setLikeCoffee] = useState(null);

  const radioButtons = [
    { 
        id: 'yes', 
        label: 'Yes', 
        value: 'yes' 
    },
    { 
        id: 'no', 
        label: 'No', 
        value: 'no' 
    }
  ];

  const handleSubmit = () => {
    const coffeeText = likeCoffee === 'yes' ? 'I like coffee.' : "I don't like coffee.";
    Alert.alert('Summary', `My name is ${name}, I am ${age} years old. ${coffeeText}`);
  }

  return (
    <View
      style={styles.container}
    >
      <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
        <Text style={styles.label}>Your Name: </Text>
        <TextInput 
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        ></TextInput>
      </View>
      <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}>
        <Text style={styles.label}>Your Age: </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your age"
          keyboardType="numeric"
          value={age}
          onChangeText={(input) => {
            if (/^[0-9]*$/.test(input)) {
              setAge(input);
            }d
          }}
        ></TextInput>
      </View>

      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <Text style={styles.label}>Like Coffee?</Text>
        <View style={styles.radioContainer}>
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setLikeCoffee}
            selectedId={likeCoffee}
            layout="row"
          ></RadioGroup>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 14,
  },
  input: {
    borderWidth: 3,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
    width: '70%'
  },
  radioContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 30,
    alignSelf: 'center',
    width: '100%',
  }
});
