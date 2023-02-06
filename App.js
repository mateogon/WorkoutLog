import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { restaurantsRequest } from "./src/services/restaurants/restaurants.service";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

const TAB_ICONS = {
  Restaurants: [Ionicons, "md-restaurant"],
  Map: [Ionicons, "map"],
  Settings: [Ionicons, "settings"],
};
const TAB_ICONS_COLORS = {
  Active: "tomato",
  Inactive: "gray",
};

const Settings = () => {
  return (
    <SafeArea
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Settings</Text>
    </SafeArea>
  );
};
const Map = () => {
  return (
    <SafeArea
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Map</Text>
    </SafeArea>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator
                initialRouteName="Restaurants"
                screenOptions={({ route }) => ({
                  headerShown: false,
                  tabBarIcon: ({ focused, size }) => {
                    const [IconComponent, iconName] = TAB_ICONS[route.name];
                    const Color = focused
                      ? TAB_ICONS_COLORS["Active"]
                      : TAB_ICONS_COLORS["Inactive"];
                    return (
                      <IconComponent
                        name={iconName}
                        size={size}
                        color={Color}
                      />
                    );
                  },
                  tabBarActiveTintColor: TAB_ICONS_COLORS["Active"],
                  tabBarInactiveTintColor: TAB_ICONS_COLORS["Inactive"],
                })}
              >
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={Map} />
                <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
