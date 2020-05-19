import React, { useEffect, useState } from "react";
import ContentWrapper from "../../components/content-wraper/content-wrapper";
import Header from "../../components/header/header";
import LeftNavigation from "../../components/navigation/left-navigation";
import sampleContentData from "../../data/sample-content";
import ActionHelper from "../../shared/helpers/action";
import IContentData from "../../shared/interfaces/content-data";
import "./app.scss";

const App = () => {
  const defaultData: IContentData = sampleContentData.contents[0];
  const [selectedContentData, setSelectedContentData] = useState(defaultData);
  const [selectedContentDataIndex, setSelectedContentDataIndex] = useState(0);
  const [selectedNavigationItem, setSelectedNavigationItem] = useState(0);

  useEffect(() => {
    ActionHelper.setFocus("left-navigation-menu-btn-1");
  }, []);

  const setFocusOnFeature = () => {
    const featureContent = sampleContentData.contents
      .filter((content: IContentData) => content.type === "feature")
      .shift();
    setSelectedContentData(featureContent!);
    setTimeout(() => ActionHelper.setFocus("btn-play-action"), 1);
  };

  const setFocusOnNavigation = () =>
    ActionHelper.setFocus(`left-navigation-menu-btn-${selectedNavigationItem}`);

  return (
    <div className="App">
      <Header />
      <LeftNavigation
        setFocusOnFeature={setFocusOnFeature}
        selectedItem={selectedNavigationItem}
        setSelectedItem={setSelectedNavigationItem}
      ></LeftNavigation>
      <ContentWrapper
        contentList={sampleContentData}
        setFocusOnFeature={setFocusOnFeature}
        setFocusOnNavigation={setFocusOnNavigation}
        selectedContentData={selectedContentData}
        setSelectedContentData={setSelectedContentData}
        selectedContentDataIndex={selectedContentDataIndex}
        setSelectedContentDataIndex={setSelectedContentDataIndex}
      ></ContentWrapper>
    </div>
  );
};

export default App;
