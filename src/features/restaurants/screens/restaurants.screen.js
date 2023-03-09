import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";

import styled from "styled-components/native";

import { Spacer } from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/safe-area/safe-area.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          mode="bar"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </SearchContainer>
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
