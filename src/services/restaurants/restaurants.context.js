import React, {
  useState,
  createContext,
  useEffect,
  useContext,
  useRef,
} from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

import { LocationContext } from "../location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const timeout = useRef(null);

  const { location } = useContext(LocationContext);

  useEffect(() => {
    const retrieveRestaurants = () => {
      setIsLoading(true);
      setRestaurants([]);
      timeout.current = setTimeout(() => {
        const { lat, lng } = location;
        restaurantsRequest(`${lat},${lng}`)
          .then(restaurantsTransform)
          .then((results) => {
            setRestaurants(results);
          })
          .catch((err) => {
            setError(err);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }, 1000);
    };

    if (location) {
      retrieveRestaurants();
    }

    return () => {
      clearTimeout(timeout.current);
    };
  }, [location]);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
