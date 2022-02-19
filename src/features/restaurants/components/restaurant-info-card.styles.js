import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
    backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    backgroundColor: ${(props) => props.theme.colors.bg.primary};
`;

export const Info = styled.View `
    padding: ${(props) => props.theme.space[3]};
`

export const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption};
`

export const RatingRow = styled.View `
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[1]};
`

export const Rating = styled.View `
    flex-direction: row;
`

export const RatingRowEnd = styled.View `
    flex-direction: row;
    justify-content: space-evenly;
`

export const Icon = styled.Image`
    width: 15px; 
    height: 15px;
`