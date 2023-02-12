import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurants.navigator";

import { MapScreen } from "../../features/map/screens/map.screen";
import { SettingsNavigator } from "./settings.navigator";
import { WorkoutScreen } from "../../features/workout/screens/workout.screen";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
const Tab = createBottomTabNavigator();
const TAB_ICONS = {
  Restaurants: [Ionicons, "md-restaurant"],
  Map: [Ionicons, "map"],
  Settings: [Ionicons, "settings"],
  Workout: [Ionicons, "barbell-outline"],
};
const TAB_ICONS_COLORS = {
  Active: "tomato",
  Inactive: "gray",
};

const createScreenOptions = ({ route }) => {
  const [IconComponent, iconName] = TAB_ICONS[route.name];
  return {
    headerShown: false,
    tabBarIcon: ({ focused, size }) => {
      const Color = focused
        ? TAB_ICONS_COLORS["Active"]
        : TAB_ICONS_COLORS["Inactive"];
      return <IconComponent name={iconName} size={size} color={Color} />;
    },
    tabBarActiveTintColor: TAB_ICONS_COLORS["Active"],
    tabBarInactiveTintColor: TAB_ICONS_COLORS["Inactive"],
  };
};

export const AppNavigator = () => {
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            initialRouteName="Restaurants"
            screenOptions={createScreenOptions}
          >
            <Tab.Screen name="Workout" component={WorkoutScreen} />
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />

            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
