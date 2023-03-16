import React, { Fragment } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import Ionicons from "@expo/vector-icons/Ionicons";

import { ThemeProvider } from "styled-components/native";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

import { theme } from "./src/infrastructure/theme";

import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import MapScreen from "./src/features/map/screens/map.screen";
import SettingsScreen from "./src/features/settings/screens/settings.screen";

const Tab = createBottomTabNavigator();

const TAB_ICON_FOCUSED = {
  Restaurants: "restaurant",
  Map: "map",
  Settings: "settings",
};

const TAB_ICON_UNFOCUSED = {
  Restaurants: "restaurant-outline",
  Map: "map-outline",
  Settings: "settings-outline",
};

const renderScreenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ focused, color, size }) => {
      const icon = focused
        ? TAB_ICON_FOCUSED[route.name]
        : TAB_ICON_UNFOCUSED[route.name];
      return <Ionicons name={icon} size={size} color={color} />;
    },
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: theme.colors.ui.secondary,
    headerShown: false,
  };
};

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
    <Fragment>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={renderScreenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </Fragment>
  );
}
