import React, {useState} from 'react';
import { Keyboard, ScrollView, StyleSheet, Text, View } from 'react-native';
import TaskInputField from './components/TaskInputField';
import TodoList from './components/TodoList';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task == null) return;
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  }

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((value, index) => index != deleteIndex));
  }

  return (
    <View style={styles.container}>
        <Text style={styles.heading}>TODO LIST</Text>
      <ScrollView style={styles.scrollView}>
        {
        tasks.map((task, index) => {
          return (
            <View key={index} style={styles.taskContainer}>
              <TodoList index={index + 1} task={task} deleteTask={() => deleteTask(index)}/>
            </View>
          );
        })
      }
      </ScrollView>
      <TaskInputField addTask={addTask}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2f04',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  }
});