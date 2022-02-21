import React from "react";
import { Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurant.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator headerMode="none">
       <RestaurantStack.Screen
        name="Restaurant"
        component={RestaurantsScreen} //components in this field automoatically get navigation prop
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => <Text>Hello World</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
