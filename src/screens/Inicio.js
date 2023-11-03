import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native';

export default function Inicio({ navigation }) {

  const [descriptionA, setDescriptionA] = useState("TIME A");
  const [descriptionB, setDescriptionB] = useState("TIME B");

  function onTeamAChange(text) {
    setDescriptionA(text);
  }

  function onTeamBChange(text) {
    setDescriptionB(text);
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.welcomeTitle}>MARCARDOS DE PONTOS</Text>
      </View>
      <View style={{ flex: 2, paddingBottom: 10 }}>
        <Text style={styles.text}>
          TIME 1
        </Text>
        <TextInput
          style={styles.input}
          value={descriptionA}
          onChangeText={onTeamAChange}>
        </TextInput>
        <Text style={styles.text}>
          TIME 2
        </Text>          
        <TextInput
          style={styles.input}
          value={descriptionB}
          onChangeText={onTeamBChange}>
        </TextInput>
      </View>
      <View style={{ flex: 3, height: 'auto', alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Placar', {
              descriptionA: descriptionA,
              descriptionB: descriptionB,
            })
          }
        >
          <Text style={styles.buttonText}>INICIAR PARTIDA</Text>
        </TouchableOpacity>
      </View>
      <View style={{ position: 'absolute', bottom: 10, left: 10 }}>
        <Text style={styles.textDevelopedBy}>Desenvolvido por Ramon Dall'Agnol</Text>
        <Text style={styles.textDevelopedBy}>(48) 9 96589736</Text>
        <StatusBar style="auto" />        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#7798C3',
    paddingBottom: 100,
    paddingTop: 100
  },
  input: {
    width: 250,
    height: 59,
    borderRadius: 84,
    backgroundColor: "#FFFFFF",
    padding: 20,
    textAlign: 'center',
    margin: 10
  },
  welcomeTitle: {
    fontSize: 28,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'white',
  },
  button: {
    height: 60,
    width: 250,
    backgroundColor: 'white',
    borderRadius: 84,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#7798C3',
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: '800'
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: '800',
    textAlign: 'center'
  },
  textDevelopedBy: {
    color: 'white',
    textAlign: 'left'
  }
});