import React, { useState } from "react";
import "./content-trail.scss";
import IContentData from "../../shared/interfaces/content-data";
import IContentItemData from "../../shared/interfaces/content-item-data";
import ContentCard from "./content-card";

interface IProps {
  contentData: IContentData;
  selectedContentData: IContentData;
  setSelectedContentData: Function;
  selectedContentDataIndex: number;
  setSelectedContentDataIndex: Function;
}

function ContentTrail(props: IProps) {
  const [focusedItemIndex, setFocusedItemIndex] = useState(0);
  const {
    contentData,
    selectedContentData,
    setSelectedContentData,
    selectedContentDataIndex,
    setSelectedContentDataIndex,
  } = props;

  return (
    <section
      className={`content-trail-wrapper ${
        contentData === selectedContentData ? "selected" : ""
      }`}
    >
      <h3>{contentData.trailName}</h3>
      <div className="content-trail-items-wrapper">
        {contentData.data.map(
          (contentItemData: IContentItemData, index: number) => {
            return (
              <ContentCard
                isFocused={index === focusedItemIndex}
                onFocus={() => {
                  setSelectedContentData(contentData);
                  setSelectedContentDataIndex(index);
                  setFocusedItemIndex(index);
                }}
                contentItemData={contentItemData}
                selectedContentData={selectedContentData}
                selectedContentDataIndex={selectedContentDataIndex}
              />
            );
          }
        )}
      </div>
    </section>
  );
}

export default ContentTrail;
