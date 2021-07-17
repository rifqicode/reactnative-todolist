import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView, Platform, TouchableOpacity, TextInput, Keyboard } from 'react-native';

import Task from './components/Task';

export default function App() {

  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
    console.log(taskItems);
  }

  const handleRemoveTask = (index) => {
    let copyItems = [...taskItems];

    copyItems.splice(index, 1);
    setTaskItems(copyItems);
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>

        {/* header */}
        <View style={styles.textWrapper}>
          <Text style={styles.textHeader}>Today Task's</Text>
        </View>

        {/* item list */}
        <View> 
          {taskItems.map((value, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => handleRemoveTask(index)}>
                <Task key={index} task={value}/>
              </TouchableOpacity>
            )
          })}
        </View>

        {/* write task */}
        <KeyboardAvoidingView 
          behavior={Platform.os = "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}  
        >
          <TextInput style={styles.textInput} placeholder=" Write a Task.. " value={task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.buttonWrapper}>
              <Text> + </Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E8EAED',
  },
  container: {
    flex: 1,
    paddingTop: 5
  },
  textWrapper: {
    paddingTop: 30,
    paddingBottom: 30,
  },
  textHeader: {
    fontSize: 25,
    fontFamily: 'Roboto'
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textInput: {
    width: 300,
    padding: 15,
    paddingHorizontal: 15,
    borderRadius: 50,
    backgroundColor: '#FFF',
    borderColor: '#C0C0C0',
    borderWidth: 2,
  },
  buttonWrapper: {
    backgroundColor: '#FFF',
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
