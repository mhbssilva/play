import React from "react";
import IContentData from "../../shared/interfaces/content-data";
import IContentListData from "../../shared/interfaces/content-list-data";
import ContentTrail from "../content-trail/content-trail";
import ContentWrapperBanner from "./content-wrapper-banner";
import "./content-wrapper.scss";

interface IProps {
  contentList: IContentListData;
  setFocusOnTrail: Function;
  setFocusOnFeature: Function;
  setFocusOnNavigation: Function;
  selectedContentData: IContentData;
  setSelectedContentData: Function;
  selectedContentDataIndex: number;
  setSelectedContentDataIndex: Function;
  setSelectedContentType: Function;
}

const ContentWrapper = (props: IProps) => {
  const {
    contentList,
    setFocusOnTrail,
    setFocusOnFeature,
    setFocusOnNavigation,
    selectedContentData,
    setSelectedContentData,
    selectedContentDataIndex,
    setSelectedContentDataIndex,
    setSelectedContentType,
  } = props;

  return (
    <section className="content-wrapper">
      <ContentWrapperBanner
        contentData={selectedContentData}
        contentDataIndex={selectedContentDataIndex}
        setFocusOnTrail={setFocusOnTrail}
        setFocusOnNavigation={setFocusOnNavigation}
        setSelectedContentType={setSelectedContentType}
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
                setSelectedContentType={setSelectedContentType}
              />
            ) : null
          )
        : null}
    </section>
  );
};

export default ContentWrapper;
