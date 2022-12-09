import React from "react";

export const StoreContext = React.createContext(null);

// useContext for navbar
function StoreProvider({ children }) {
  const [loggedIn, setLoggedIn] = React.useState(
    localStorage.getItem("token") ? true : false
  );
  const [userData, setUserData] = React.useState({})
  const [trainingData, setTrainingData] = React.useState([])

  const store = {
    loggedIn: [loggedIn, setLoggedIn],
    userData: [userData, setUserData],
    trainingData: [trainingData, setTrainingData],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export default StoreProvider;
