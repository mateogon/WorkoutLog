import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { FadeInView } from "../../../components/animations/fade.animation";
import { WorkoutSetCard } from "../components/workout-set-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { WorkoutSetList } from "../components/workout-set-list.styles";

const Loading = styled.ActivityIndicator`
  flex: 1;
`;

const workoutSet = {
  name: "Bench Press",
  sets: [
    { reps: 8, weight: 135 },
    { reps: 8, weight: 145 },
    { reps: 8, weight: 155 },
  ],
};

const workoutData = [
  {
    name: "Bench Press",
    sets: [
      { id: 1, reps: 8, weight: 135 },
      { id: 2, reps: 8, weight: 145 },
      { id: 3, reps: 8, weight: 155 },
    ],
  },
  {
    name: "Squats",
    sets: [
      { id: 4, reps: 10, weight: 225 },
      { id: 5, reps: 10, weight: 235 },
      { id: 6, reps: 10, weight: 245 },
    ],
  },
  {
    name: "Deadlifts",
    sets: [
      { id: 7, reps: 6, weight: 315 },
      { id: 8, reps: 6, weight: 325 },
      { id: 9, reps: 6, weight: 335 },
    ],
  },
];

export const WorkoutScreen = ({ navigation }) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return isLoading ? (
    <SafeArea>
      <Loading animating={true} color="tomato" size={100} />
    </SafeArea>
  ) : (
    <SafeArea>
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}

      <WorkoutSetList
        data={workoutData}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <FadeInView>
                <WorkoutSetCard name={item.name} sets={item.sets} />
              </FadeInView>
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeArea>
  );
};
