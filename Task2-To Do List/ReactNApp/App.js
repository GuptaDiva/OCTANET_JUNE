import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';//Text and view are two very important components taht we use for rendering. we cant use div or h2 tags.

export default function App() {
  const [enteredBookName,setEnteredGoalText]= useState('');
  const [Booklist,setBookList]= useState([]);
  function inputTextHandler(enteredText){
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
   setBookList(currentBooklist=>[...currentBooklist, enteredBookName])
  }
  return (
    <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.inputText} 
      placeholder='Enter The Book you name.'
      onChangeText={inputTextHandler}/>
      <Button title='Add book'
      onPress={addGoalHandler}/>
    </View>
    <View style={styles.goalcontainer}>
    {Booklist.map((goal,index) => <Text style= {styles.Books} key={index}>{goal}</Text>)}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:50,
    paddingHorizontal:16

  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:24,
    borderBottomWidth: 1,
    borderBottomColor:'grey'
  },
  goalcontainer:{
  flex:10  
  },
  inputText:{
    borderWidth:1,
    borderColor: 'grey',
    width: '70%',
    marginRight: 8,
    padding:7
  },
  Books:{
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  }

});
