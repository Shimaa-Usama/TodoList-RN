import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
export const TodoList = ({ todos, handleCheckBox, counterDone }) => {
  const [isSelected, setSelected] = useState(false);
  let fun = (item) => {
    setSelected(item.done);
  };
  return (
    <View>
      <Text
        style={{
          marginLeft: 10,
          marginBottom: 10,
          color: '#4C3575',
          fontSize: 12,
        }}
      >
        {counterDone} Tasks Done out of {todos.length} Tasks
      </Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <Text
                style={{
                  color: '#4C3575',
                  fontSize: 16,
                }}
              >
                {item.title}
              </Text>
              <View style={{ marginLeft: 10 }}>
                <Checkbox
                  value={item.done}
                  onValueChange={() => {
                    console.log(isSelected);
                    handleCheckBox(item.id);
                  }}
                />
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => `${item.id}${index}`}
        ListHeaderComponent={() => (
          <Text style={styles.ListHeader}>Your Tasks</Text>
        )}
        ListEmptyComponent={() => (
          <View style={{ margin: 40, marginTop: 100 }}>
            <Text style={styles.empty}>No Tasks Here..</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  strikeThroughTextStyle: {
    textDecorationLine: 'line-through',
  },
  container: {
    backgroundColor: '#EEE',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 50,
    padding: 15,
    borderRadius: 10,
  },
  ListHeader: {
    marginLeft: 10,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#4C3575',
    fontSize: 20,
  },
  empty: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#4C3575',
  },
});
