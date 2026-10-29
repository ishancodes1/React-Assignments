import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [lightMode, setLightMode] = useState(true);
  const userName = "ISHAN";
  const [language, setLanguage] = useState("English");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const toggleMode = () => {
    setLightMode(!lightMode);
  };
  const toggleLanguage = () => {
    language == "English" ? setLanguage("Hindi") : setLanguage("English");
  };
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <UserContext.Provider
      value={{
        toggleMode,
        lightMode,
        userName,
        language,
        toggleLanguage,
        isLoggedIn,
        toggleLogin,
        cartCount,
        setCartCount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
