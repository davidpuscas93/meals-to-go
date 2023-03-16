import camelize from "camelize";

import { locations } from "./mock/location.mock";

export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const result = locations[searchTerm];
    if (!result) {
      reject("Not found");
    }
    resolve(result);
  });
};

export const locationTransform = ({ results = [] }) => {
  const formattedResponse = camelize(results);
  const { geometry = {} } = formattedResponse[0];
  const { lat, lng } = geometry.location;

  return { lat, lng };
};
