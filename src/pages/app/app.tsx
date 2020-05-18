import React, { useState } from "react";
import "./app.scss";
import LeftNavigation from "../../components/navigation/left-navigation";
import AppWrapper from "../../components/app-wraper/app-wrapper";
import LeftNavigationItemType from "../../shared/types/left-navigation-item";

const App = () => {
  const [selectedNavigationItem, setSelectedNavigationItem] = useState(
    "inicio" as LeftNavigationItemType
  );

  return (
    <div className="App">
      <LeftNavigation
        selectedItem={selectedNavigationItem}
        onSelectItem={setSelectedNavigationItem}
      ></LeftNavigation>
      <AppWrapper></AppWrapper>
    </div>
  );
};

export default App;
