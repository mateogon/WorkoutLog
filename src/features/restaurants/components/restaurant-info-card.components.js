import React from "react";
import styled from "styled-components/native";
import { Text, View, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
const RestaurantCard = styled(Card)`
  background_color: ${(props) => props.theme.colors.ui.quaternary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background_color: ${(props) => props.theme.colors.ui.quaternary};
`;
const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const Rating = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
const Icons = styled(View)`
  flex-direction: row;
  padding-vertical: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[1]};
`;
const OpenStatus = styled(View)`
  flex-direction: row;
`;
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name} </Title>
        <Icons>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <OpenStatus>
            {isClosedTemporarily ? (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            ) : null}
            <View style={{ paddingLeft: 8 }} />
            {isOpenNow ? <SvgXml xml={open} width={20} height={20} /> : null}
            <View style={{ paddingLeft: 10 }} />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </OpenStatus>
        </Icons>
        <Address>{address} </Address>
      </Info>
      <Card.Content></Card.Content>
    </RestaurantCard>
  );
};
