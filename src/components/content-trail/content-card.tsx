import React from "react";
import "./content-card.scss";
import IContentData from "../../shared/interfaces/content-data";
import IContentItemData from "../../shared/interfaces/content-item-data";
import PlayIcon from "../icon/play";

interface IProps {
  isFocused: boolean;
  onFocus: Function;
  contentItemData: IContentItemData;
  selectedContentData: IContentData;
  selectedContentDataIndex: number;
}

function ContentCard(props: IProps) {
  const { contentItemData, isFocused, onFocus } = props;
  return (
    <figure
      className={`content-card ${isFocused ? "focused" : null}`}
      tabIndex={0}
      onFocus={() => {
        onFocus();
      }}
    >
      <img src={contentItemData.thumbImage} alt={contentItemData.title} />
      <PlayIcon />
      <figcaption>
        <h5>{contentItemData.categoryName}</h5>
        <h4>{contentItemData.title}</h4>
      </figcaption>
    </figure>
  );
}

export default ContentCard;
