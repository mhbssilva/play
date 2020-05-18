import React from "react";
import "./featured-content.scss";
import Button from "../button/button";
import PlayIcon from "../icon/play";
import IContentData from "../../shared/interfaces/content-data";

interface IProps {
  contentData: IContentData;
}

function FeaturedContent(props: IProps) {
  const {
    data: IContentItemData,
    programName,
    programLogoImage,
    type,
  } = props.contentData;

  return (
    <section className="featured-content-wrapper">
      {/* <div className="featured-content">
        <h1>{data}</h1>
        <div className="actions">
          <Button
            icon={<PlayIcon />}
            label="Assista"
            onClick={() => {}}
            onFocus={() => {}}
          />
          <Button label="Veja mais" onClick={() => {}} onFocus={() => {}} />
        </div>
      </div> */}
    </section>
  );
}

export default FeaturedContent;
