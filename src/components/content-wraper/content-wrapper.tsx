import React from "react";
import "./content-wrapper.scss";
import ContentWrapperBanner from "./content-wrapper-banner";
import IContentData from "../../shared/interfaces/content-data";
import IContentListData from "../../shared/interfaces/content-list-data";
import ContentTrail from "../content-trail/content-trail";

interface IProps {
  contentList: IContentListData;
  setFocusOnFeature: Function;
  setFocusOnNavigation: Function;
  selectedContentData: IContentData;
  setSelectedContentData: Function;
  selectedContentDataIndex: number;
  setSelectedContentDataIndex: Function;
}

const ContentWrapper = (props: IProps) => {
  const {
    contentList,
    setFocusOnFeature,
    setFocusOnNavigation,
    selectedContentData,
    setSelectedContentData,
    selectedContentDataIndex,
    setSelectedContentDataIndex,
  } = props;

  return (
    <section className="content-wrapper">
      <ContentWrapperBanner
        contentData={selectedContentData}
        contentDataIndex={selectedContentDataIndex}
        setFocusOnNavigation={setFocusOnNavigation}
      />
      {contentList.contents.length > 0
        ? contentList.contents.map((contentData: IContentData, index: number) =>
            contentData.type === "trail" ? (
              <ContentTrail
                key={`content-trail-${index}`}
                contentData={contentData}
                setFocusOnFeature={setFocusOnFeature}
                setFocusOnNavigation={setFocusOnNavigation}
                selectedContentData={selectedContentData}
                setSelectedContentData={setSelectedContentData}
                setSelectedContentDataIndex={setSelectedContentDataIndex}
                selectedContentDataIndex={selectedContentDataIndex}
              />
            ) : null
          )
        : null}
    </section>
  );
};

export default ContentWrapper;
