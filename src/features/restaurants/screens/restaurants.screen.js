import React, { Fragment, useContext } from "react";
import { View, FlatList, Text } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import styled from "styled-components/native";

import { theme } from "../../../infrastructure/theme";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/safe-area/safe-area.component";

import RestaurantInfoCard from "../components/restaurant-info-card.component";
import Search from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const ActivitityIndicatorContainer = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  padding: ${(props) => props.theme.space[1]} ${(props) => props.theme.space[3]};
`;

const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantsScreen = () => {
  const { restaurants = [], isLoading } = useContext(RestaurantsContext);
  const { keyword } = useContext(LocationContext);

  return (
    <SafeArea>
      <Search />
      {isLoading ? (
        <ActivitityIndicatorContainer>
          <ActivityIndicator
            animating={true}
            color={theme.colors.ui.primary}
            size="large"
          />
        </ActivitityIndicatorContainer>
      ) : (
        <Fragment>
          <TitleContainer>
            <Title>{keyword}</Title>
          </TitleContainer>
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => (
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            )}
            keyExtractor={(item) => item.name}
          />
        </Fragment>
      )}
    </SafeArea>
  );
};

export default RestaurantsScreen;
