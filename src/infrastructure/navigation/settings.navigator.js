import React, { useEffect } from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
const SettingStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerShown: true,
        headermode: "screen",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ header: () => null }}
      />
      <SettingStack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{ header: () => null }}
      />
    </SettingStack.Navigator>
  );
};
