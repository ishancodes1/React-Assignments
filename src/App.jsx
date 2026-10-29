import React from "react";
import Task22October from "./pages/Task22October";
import Task26Oct from "./pages/Task26Oct";
import Task29October from "./pages/Task29October";
import { UserProvider } from "./context/UserContext29Oct";

const App = () => {
  return (
    <div>
      {/* <Task22October/> */}
      {/* <Practice23October/> */}
      {/* <Practice24Oct/> */}
      {/* <Task26Oct/> */}
      {/* <AppRoutes/> */}
      <UserProvider>
        <Task29October />
      </UserProvider>
    </div>
  );
};

export default App;
