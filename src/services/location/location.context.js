import React, { useState, createContext, useEffect, useMemo } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword = "Antwerp") => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    if (searchKeyword.length === 0) {
      return;
    }
    console.log(searchKeyword);
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((results) => {
        setIsLoading(false);
        setLocation(results);
        console.log(results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };
  useEffect(() => {
    onSearch(keyword);
  }, []);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
