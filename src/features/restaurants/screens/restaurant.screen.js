import React from "react";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { 
  StatusBar, 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Platform 
} from 'react-native';
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

const Container = styled(SafeAreaView)`
    flex: 1;
    marginTop: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
    padding: 16px; 
    backgroundColor: white;
`

const ListContainer = styled.View`
    flex: 1;
    padding: 16px; 
    backgroundColor: blue;
`

export const RestaurantsScreen = () => {
    return(
        <Container>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <ListContainer>
                <RestaurantInfoCard />
            </ListContainer>
        </Container>
    )
}