import React, {useState, useEffect, useMemo, createContext } from "react";

import { restaurantRequest, restaurantsTransform } from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    return (
        <RestaurantsContext.Provider
            value={{
                restaurants: [1, 2, 3, 4, 5],
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    )
};