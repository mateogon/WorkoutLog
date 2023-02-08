import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text } from "react-native";
import { MapScreen } from "../../features/map/screens/map.screen";
const Tab = createBottomTabNavigator();
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
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Restaurants"
        screenOptions={createScreenOptions}
      >
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
