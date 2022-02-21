import React from "react";
import { Text } from "react-native";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurant.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none"
      screenOptions={{...TransitionPresets.ModalPresentationIOS}}
    >
       <RestaurantStack.Screen
        name="Restaurant"
        component={RestaurantsScreen} //components in this field automoatically get navigation prop
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
