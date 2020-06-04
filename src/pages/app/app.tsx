import React, { useEffect, useState } from "react";
import ContentWrapper from "../../components/content-wraper/content-wrapper";
import Header from "../../components/header/header";
import LeftNavigation from "../../components/navigation/left-navigation";
import sampleContentData from "../../data/sample-content";
import ActionHelper from "../../shared/helpers/action";
import IContentData from "../../shared/interfaces/content-data";
import "./app.scss";
import ContentType from "../../shared/enums/content-type";

const App = () => {
  const defaultData: IContentData = sampleContentData.contents[0];
  const [selectedContentData, setSelectedContentData] = useState(defaultData);
  const [selectedContentDataIndex, setSelectedContentDataIndex] = useState(0);
  const [selectedNavigationItem, setSelectedNavigationItem] = useState(0);
  const [selectedContentType, setSelectedContentType] = useState(
    ContentType.FEATURE
  );

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

  const setFocusOnContentWrapper = () => {
    switch (selectedContentType) {
      case ContentType.FEATURE:
        setFocusOnFeature();
        break;
      case ContentType.TRAIL:
        setFocusOnTrail();
        break;
    }
  };

  const setFocusOnTrail = () => {
    ActionHelper.setFocus(`trail-content-card-${selectedContentDataIndex}`);
  };

  const setFocusOnNavigation = () =>
    ActionHelper.setFocus(`left-navigation-menu-btn-${selectedNavigationItem}`);

  // TODO: refatorar com APIContext urgentemente.
  return (
    <div className="App">
      <Header />
      <LeftNavigation
        selectedItem={selectedNavigationItem}
        setSelectedItem={setSelectedNavigationItem}
        setFocusOnContentWrapper={setFocusOnContentWrapper}
      ></LeftNavigation>
      <ContentWrapper
        contentList={sampleContentData}
        setFocusOnTrail={setFocusOnTrail}
        setFocusOnFeature={setFocusOnFeature}
        setFocusOnNavigation={setFocusOnNavigation}
        selectedContentData={selectedContentData}
        setSelectedContentData={setSelectedContentData}
        selectedContentDataIndex={selectedContentDataIndex}
        setSelectedContentDataIndex={setSelectedContentDataIndex}
        setSelectedContentType={setSelectedContentType}
      ></ContentWrapper>
    </div>
  );
};

export default App;
