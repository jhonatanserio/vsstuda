import React, { Component } from "react";
import { View, Text, StyleSheet,flatlist,TextInput } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Tela de Pesquisa</Text>
        <TextInput
          style={styles.textinput}
          onChangeText={text => this.setstate({ searchText: text})}
           placeholder={"escrever aqui"}
           placeholderTextColor={"FFF"}
        />


        <View>
          <FlatList
           data={allTransictions}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  },
  textinput: {
    height:20,
    width:"25%",
    borderColor:"FFF",
    borderWidth:4
  }
  
  
});
