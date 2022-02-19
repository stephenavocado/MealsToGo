import React from "react";
import { FlatList} from 'react-native';
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component"

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]}; 
`

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16
    }
})`
    
`

export const RestaurantsScreen = () => {
    return(
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <RestaurantList 
                data={[
                    {name: 1}, 
                    {name: 2},
                    {name: 3}, 
                    {name: 4}
                ]}
                renderItem={() => <RestaurantInfoCard />}
                keyExtractor={(item) => item.name}
                contentContainerStyle={{ padding: 16 }}
            />
        </SafeArea>
    )
}