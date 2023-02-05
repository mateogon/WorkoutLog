import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { View, Image } from "react-native";
export const RestaurantCard = styled(Card)`
  background_color: ${(props) => props.theme.colors.ui.quaternary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};

  background_color: ${(props) => props.theme.colors.ui.quaternary};
`;
export const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  padding-top: 0;
`;

export const Rating = styled(View)`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;
export const IconContainer = styled(View)`
  flex-direction: row;
  padding-vertical: ${(props) => props.theme.space[2]};
  padding-right: ${(props) => props.theme.space[1]};
`;
export const OpenStatus = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Image)`
  width: 15px;
  height: 15px;
`;
