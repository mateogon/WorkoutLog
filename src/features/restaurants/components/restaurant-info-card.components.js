import React from "react";
import styled from "styled-components/native";
import { Text, View, StyleSheet } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background_color: white;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 14px;
  background_color: white;
`;
const Title = styled(Text)`
  padding: 16px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>

      <Card.Content></Card.Content>
    </RestaurantCard>
  );
};
