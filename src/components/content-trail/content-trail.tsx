import React from "react";
import KeyHelper from "../../shared/helpers/key-helper";
import IContentData from "../../shared/interfaces/content-data";
import IContentItemData from "../../shared/interfaces/content-item-data";
import ContentCard from "./content-card";
import "./content-trail.scss";

interface IProps {
  contentData: IContentData;
  selectedContentData: IContentData;
  selectedContentDataIndex: number;
  setFocusOnFeature: Function;
  setFocusOnNavigation: Function;
  setSelectedContentData: Function;
  setSelectedContentDataIndex: Function;
}

function ContentTrail(props: IProps) {
  const {
    contentData,
    selectedContentData,
    setSelectedContentData,
    selectedContentDataIndex,
    setSelectedContentDataIndex,
  } = props;

  const onPressUpKey = () => {
    props.setFocusOnFeature();
  };

  const onPressDownKey = () => {};

  const onPressLeftKey = () => {
    if (selectedContentDataIndex === 0) {
      props.setFocusOnNavigation();
    } else {
      document
        .getElementById(`trail-content-card-${selectedContentDataIndex - 1}`)
        ?.focus();
    }
  };

  const onPressRightKey = () => {
    if (selectedContentDataIndex < contentData.data.length) {
      document
        .getElementById(`trail-content-card-${selectedContentDataIndex + 1}`)
        ?.focus();
    }
  };

  const onKeyPress = (e: KeyboardEvent) => {
    KeyHelper.setKeyCallback(e, {
      upCallback: onPressUpKey,
      downCallback: onPressDownKey,
      leftCallback: onPressLeftKey,
      rightCallback: onPressRightKey,
    });
  };

  const slideToContentCard = (elementId: string) => {
    const componentElement = document.getElementById(elementId)!;
    const width = componentElement.offsetWidth;
    const leftPosition = componentElement.offsetLeft;
    const parentElement = componentElement.parentElement;

    parentElement?.scrollTo({ left: leftPosition - width / 1.8 });
  };

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
                id={`trail-content-card-${index}`}
                onKeyPress={onKeyPress}
                onFocus={() => {
                  setSelectedContentData(contentData);
                  setSelectedContentDataIndex(index);
                  slideToContentCard(`trail-content-card-${index}`);
                }}
                contentItemData={contentItemData}
              />
            );
          }
        )}
      </div>
    </section>
  );
}

export default ContentTrail;
