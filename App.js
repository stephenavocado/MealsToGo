import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';


export default function App() {

  const [oswaldLoaded] = useFonts({ Oswald_400Regular });
  const [latoLoaded] = useFonts({ Lato_400Regular });

  if(!oswaldLoaded || !latoLoaded){
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar style='auto' />
      </ThemeProvider>
    </>
  );
}
