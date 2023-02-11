import React, { useContext } from "react";
import { Button, List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import styled from "styled-components/native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { TouchableOpacity } from "react-native";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
const FavouritesItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const FavouritesArea = styled(SafeArea)`
  flex: 1;
`;
const NoFavouritesArea = styled(SafeArea)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  const { onLogout, user } = useContext(AuthenticationContext);
  return favourites.length ? (
    <FavouritesArea>
      <AvatarContainer>
        <Avatar.Icon size={140} icon="heart" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">Favourite Restaurants</Text>
        </Spacer>
        <Spacer position="top" size="large"></Spacer>
      </AvatarContainer>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </FavouritesArea>
  ) : (
    <NoFavouritesArea>
      <AvatarContainer>
        <Avatar.Icon size={140} icon="heart" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">No Favourite Restaurants</Text>
        </Spacer>
      </AvatarContainer>
    </NoFavouritesArea>
  );
};
