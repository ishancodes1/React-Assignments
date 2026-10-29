import React, { useContext } from "react";
import UserContext from "../context/UserContext29Oct";

const Task29October = () => {
  const {
    lightMode,
    toggleMode,
    userName,
    language,
    toggleLanguage,
    isLoggedIn,
    toggleLogin,
    cartCount,
    setCartCount,
  } = useContext(UserContext);
  return (
    <>
      <div
        style={
          lightMode
            ? { backgroundColor: "white", color: "black", fontFamily: "Arial" }
            : { backgroundColor: "black", color: "white", fontFamily: "Arial" }
        }
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "blue",
            padding: 10,
          }}
        >
          <em>{userName}</em>
          <ul style={{ display: "flex", gap: 20, listStyle: "none" }}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Catalogue</li>
            <li>Cart Items: {cartCount}</li>
          </ul>
        </nav>
        <h1>Hi this is a good thing</h1>
        <h1>Hello everyone!</h1>
        <h1>Happy Diwali In Advance, To Everyone!</h1>

        {/* Question 1 */}
        <hr />
        <h1>~Question 1~</h1>
        <button onClick={toggleMode}>Dark/Light Mode</button>
        <hr />


        {/* Question 2 */}
        <h1>~Question 2~</h1>
        <h1>Hi {userName}!</h1>
        <hr />


        {/* Question 3 */}
        <h1>~Question 3~</h1>
        <h1>
          {language == "English"
            ? "Hello Everyone, Hope You Guys Are Doing GOOD!"
            : "सभी को नमस्कार! आशा है आप सब ठीक होंगे!"}
        </h1>
        <button onClick={toggleLanguage}>Switch Language</button>
        <hr />


        {/* Question 4 */}
        <h1>~Question 4~</h1>
        {isLoggedIn ? (
          <>
            <h1>Welcome {userName}, to this Website!</h1>
            <button onClick={toggleLogin}>Log Out</button>
          </>
        ) : (
          <>
            <h1>Please Login Sir!</h1>
            <button onClick={toggleLogin}>Login</button>
          </>
        )}
        <hr />


        {/* Question 5 */}
        <h1>~Question 5~</h1>
        <h1>Cart Items: {cartCount}</h1>
        <button onClick={() => setCartCount(cartCount + 1)}>Add To Cart</button>
        <hr />
      </div>

      
    </>
  );
};

export default Task29October;
