import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Bank from "./screens/Bank";
import Education from "./screens/Education";
import Expenses from "./screens/Expenses";
import Community from "./screens/Community";
import { NavigationContainer } from "@react-navigation/native";

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarLabel: "Home", headerShown: false }}
        />
        <Tab.Screen
          name="Bank"
          component={Bank}
          options={{
            tabBarLabel: "Bank",
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Education"
          component={Education}
          options={{ tabBarLabel: "Education", headerShown: false }}
        />
        <Tab.Screen
          name="Expenses"
          component={Expenses}
          options={{ tabBarLabel: "Expenses", headerShown: false }}
        />
        <Tab.Screen
          name="Community"
          component={Community}
          options={{ tabBarLabel: "Community", headerShown: false }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});