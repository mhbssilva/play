import React from "react";
import IContentItemData from "../../shared/interfaces/content-item-data";
import PlayIcon from "../icon/play";
import "./content-card.scss";

interface IProps {
  id: string;
  onKeyPress: Function;
  onFocus: Function;
  contentItemData: IContentItemData;
}

function ContentCard(props: IProps) {
  const { contentItemData, onFocus, id, onKeyPress } = props;

  return (
    <figure
      id={id}
      key={id}
      className="content-card"
      tabIndex={0}
      onFocus={() => {
        onFocus();
      }}
      onKeyDown={(e: any) => onKeyPress(e as KeyboardEvent)}
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
