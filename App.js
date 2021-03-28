import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Alert, Image } from 'react-native';

export default function App() {
  const [quote, setQuote] = useState({})
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
  async function fetchQuote (){
    const res = await fetch("https://api.tronalddump.io/random/quote");
    res
      .json()
      .then(res => setQuote(res.value))
      .catch(err => setErrors(err));
  }
    fetchQuote();
  });

  const quoteAlert = () => {
    Alert.alert(JSON.stringify(quote))
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/don.jpg')} style={styles.image} />
      <Text style={styles.header}>Lay it on us Donny {'\n'} </Text>
      <TouchableHighlight style={styles.button} onPress={quoteAlert}>
        <Text style={styles.buttonText}> Press here to make your brain hurt with stupidity </Text>
      </TouchableHighlight>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    marginBottom: 50,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "American Typewriter"
  },
  button: {
    backgroundColor: '#E29F2D',
    padding: 10, 
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 80
  },
  buttonText: {
    fontFamily: "American Typewriter"
  },
  image: {
    marginBottom: 10,
    height: "50%",
    width: "60%"
  }

});
