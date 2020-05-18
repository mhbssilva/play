import React, { useState } from "react";
import ContentWrapper from "../../components/content-wraper/content-wrapper";
import Header from "../../components/header/header";
import LeftNavigation from "../../components/navigation/left-navigation";
import LeftNavigationItemType from "../../shared/types/left-navigation-item";
import "./app.scss";
import IContentData from "../../shared/interfaces/content-data";
import sampleContentData from "../../data/sample-content";

const App = () => {
  const [selectedContentData, setSelectedContentData] = useState(
    sampleContentData.contents[0] as IContentData
  );
  const [selectedContentDataIndex, setSelectedContentDataIndex] = useState(0);
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
        contentList={sampleContentData}
        selectedContentData={selectedContentData}
        setSelectedContentData={setSelectedContentData}
        selectedContentDataIndex={selectedContentDataIndex}
        setSelectedContentDataIndex={setSelectedContentDataIndex}
      ></ContentWrapper>
    </div>
  );
};

export default App;
