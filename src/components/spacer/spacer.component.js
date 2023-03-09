import React from "react";
import { View } from "react-native";

import styled, { useTheme } from "styled-components/native";

const sizes = {
  small: 1,
  medium: 2,
  large: 3,
};

const positions = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizes[size];
  const property = positions[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled(View)`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();

  return (
    <SpacerView variant={getVariant(position, size, theme)}>
      {children}
    </SpacerView>
  );
};

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
