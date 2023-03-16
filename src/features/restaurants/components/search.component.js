import React, { useState, useContext } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";

import styled from "styled-components/native";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const handleSearchChange = (query) => {
    setSearchKeyword(query);
  };

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search by city"
        mode="bar"
        value={searchKeyword}
        onChangeText={handleSearchChange}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
      />
    </SearchContainer>
  );
};

export default Search;
