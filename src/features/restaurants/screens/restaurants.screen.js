import React from "react";
import { Text, View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info-card.components";
import styled from "styled-components/native";

const SearchContainer = styled(View)`
  padding-horizontal: ${(props) => props.theme.space[2]};
`;
const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;
const StyledSearchbar = styled(Searchbar)`
  background-color: ${(props) => props.theme.colors.ui.quaternary};
  margin-horizontal: ${(props) => props.theme.space[2]};
`;
export const RestaurantScreen = () => (
  <SafeArea>
    <SearchContainer>
      <StyledSearchbar elevation={3} />
    </SearchContainer>
    <FlatList
      data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
      renderItem={({}) => <RestaurantInfoCard />}
      keyExtractor={(item) => item.name}
      contentContainerStyle={{ padding: 16 }}
    />
  </SafeArea>
);
