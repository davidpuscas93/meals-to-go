import { View, Image } from "react-native";
import { Card } from "react-native-paper";

import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Section = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const Icon = styled(Image)`
  align-self: center;
  width: 20px;
  height: 20px;
`;

const RatingView = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const OpenView = styled(View)`
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const ClosedView = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Icon,
  RatingView,
  OpenView,
  ClosedView,
};
