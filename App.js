import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import React, {useState} from 'react';
// Scroll view and flatlist is same thing
//Flatlist is slef closing tag
// using flat list jason id should be string but default thoes are numbers
// use keyExtractor props to convert it inside Flatlist tag
// flatlist has coloums props to separate coloums

export default function App() {

  const [todos, setTodos] = useState(
  [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    }]
  )

  return (
    <View style={styles.container}>
    {/* <ScrollView> 
      {todos.map(todo => {
        return(
          <View key={todo.id} style={styles.todoStyle}>
            <Text> {todo.title}</Text>
          </View>
        )  
      })
      }
    </ScrollView>   */}

    <FlatList
      keyExtractor={(item) => item.id.toString()}
      data = {todos}
      renderItem = {({item}) => (
        <Text style={styles.todoStyle}> {item.title} </Text>
      )}
    
    />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  todoStyle: {
    margin: 20,
    backgroundColor: 'deeppink',
    color: 'white',
    fontSize: 20,
    padding: 10
  }
});
