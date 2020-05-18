import React, { useState } from "react";
import ContentWrapper from "../../components/content-wraper/content-wrapper";
import Header from "../../components/header/header";
import LeftNavigation from "../../components/navigation/left-navigation";
import LeftNavigationItemType from "../../shared/types/left-navigation-item";
import "./app.scss";

const App = () => {
  const [contentImage, setContentImage] = useState("");
  const [selectedNavigationItem, setSelectedNavigationItem] = useState(
    "inicio" as LeftNavigationItemType
  );

  return (
    <div className="App">
      <Header />
      <LeftNavigation
        selectedItem={selectedNavigationItem}
        onSelectItem={setSelectedNavigationItem}
      ></LeftNavigation>
      <ContentWrapper
        contentImage={contentImage}
        setContentImage={setContentImage}
      ></ContentWrapper>
    </div>
  );
};

export default App;
