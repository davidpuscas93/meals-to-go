import React, { Fragment } from "react";
import { SvgXml } from "react-native-svg";

import star from "../../../../assets/icons/star";
import open from "../../../../assets/icons/open";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Icon,
  RatingView,
  OpenView,
  ClosedView,
} from "./restaurant-info-card.styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId = "some random id",
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Section>
          <Text variant="label">{name}</Text>
          <Spacer position="top" size="medium" />
          <RatingView>
            {ratingArray.map((_, index) => (
              <Spacer key={`${index}-${placeId}`} position="right" size="small">
                <SvgXml xml={star} width={20} height={20} />
              </Spacer>
            ))}
          </RatingView>
          <Spacer variant="bottom.medium" />
          <Text variant="caption">{address}</Text>
        </Section>
        <Section>
          <OpenView>
            {isOpenNow && <SvgXml xml={open} width={60} height={60} />}
            {isClosedTemporarily && (
              <Fragment>
                <Spacer position="top" size="medium" />
                <ClosedView>
                  <Text variant="error">CLOSED TEMPORARILY</Text>
                  <Spacer position="left" size="medium" />
                  <Icon source={{ uri: icon }} />
                </ClosedView>
              </Fragment>
            )}
          </OpenView>
        </Section>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
