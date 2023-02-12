import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export const WorkoutSetCard = ({ name, sets }) => {
  const [completedSets, setCompletedSets] = useState([]);
  const [inputSets, setInputSets] = useState(sets);

  const onCheckSet = (index) => {
    const updatedSets = [...inputSets];
    updatedSets[index].completed = !updatedSets[index].completed;
    setInputSets(updatedSets);
  };

  const onChangeReps = (index, reps) => {
    const updatedSets = [...inputSets];
    updatedSets[index].reps = reps;
    setInputSets(updatedSets);
  };

  const onChangeWeight = (index, weight) => {
    const updatedSets = [...inputSets];
    updatedSets[index].weight = weight;
    setInputSets(updatedSets);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.exerciseName}>{name}</Text>
      <FlatList
        data={inputSets}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.setContainer}>
            <View style={styles.repsWeightContainer}>
              <TextInput
                style={styles.input}
                value={item.reps.toString()}
                onChangeText={(text) => onChangeReps(index, text)}
              />
              <Text>reps x</Text>
              <TextInput
                style={styles.input}
                value={item.weight.toString()}
                onChangeText={(text) => onChangeWeight(index, text)}
              />
              <Text>lbs</Text>
            </View>
            <TouchableOpacity
              style={[
                styles.checkButton,
                item.completed ? styles.completedButton : {},
              ]}
              onPress={() => onCheckSet(index)}
            >
              <Text style={styles.checkButtonText}>
                {item.completed ? "Uncheck" : "Check"}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  setContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  repsWeightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 5,
  },
  checkButton: {
    backgroundColor: "gray",
    padding: 10,
    borderRadius: 5,
  },
  checkButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
