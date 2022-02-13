import React from "react";
import styled from "styled-components/native";
import { Text, Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/star";

const RestaurantCard = styled(Card)`
    backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View `
    padding: ${(props) => props.theme.space[3]};
`

const Title = styled.Text`
    color: ${(props) => props.theme.colors.ui.primary};
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
`;

const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const { 
        name = 'Some restaurant', 
        icon, 
        photos = ["https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg", ], 
        address = '100 Park Place', 
        isOpenNow = true, 
        rating = 4, 
        isClosedTemporarily
    } = restaurant;

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }}/>
            <Info>
                <Title>{name}</Title>
                <SvgXml xml={star} width={20} height={20} />
                <Address>{address}</Address>
            </Info>
        </RestaurantCard> 
    )
}
