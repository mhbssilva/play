import React, { useState } from "react";
import IContentData from "../../shared/interfaces/content-data";
import Button from "../button/button";
import PlayIcon from "../icon/play";
import "./content-wrapper-banner.scss";

interface IProps {
  contentData: IContentData;
  contentDataIndex: number;
}

const ContentWrapperBanner = (props: IProps) => {
  const { contentData, contentDataIndex } = props;
  const [focusedItem, setFocusedItem] = useState(
    null as "play" | "more" | null
  );

  const getContentIndex = () => {
    return contentData.type === "feature" ? 0 : contentDataIndex;
  };

  const getBackgroundImage = () => {
    return contentData.data[getContentIndex()].backgroundImage;
  };

  const getProgramName = () => {
    return contentData.programName ?? null;
  };

  const getProgramLogoImage = () => {
    return contentData.programLogoImage ?? null;
  };

  const getTitle = () => {
    return contentData.data[getContentIndex()].title;
  };

  const shouldDisplayMoreAction = () => {
    return (
      contentData.data[getContentIndex()].actions &&
      contentData.data[getContentIndex()].actions!.more
    );
  };

  const shouldDisplayPlayAction = () => {
    return (
      contentData.data[getContentIndex()].actions &&
      contentData.data[getContentIndex()].actions!.play
    );
  };

  return (
    <section
      className={`content-wrapper-banner ${contentData.type}`}
      style={{
        backgroundImage: getBackgroundImage()
          ? `linear-gradient(to right, rgba(0,0,0,.8),rgba(0,0,0,0)), linear-gradient( rgba(0,0,0,0),rgba(0,0,0,1)), url(${getBackgroundImage()})`
          : "",
      }}
    >
      <div className="details">
        {getProgramLogoImage() ? (
          <img
            className="programLogo"
            alt={getTitle()}
            src={getProgramLogoImage()!}
          />
        ) : null}
        {getProgramName() ? <h2>{getProgramName()!}</h2> : null}
        <h1>{getTitle()}</h1>
        {shouldDisplayMoreAction() || shouldDisplayPlayAction() ? (
          <div className="actions">
            {shouldDisplayPlayAction() ? (
              <Button
                className={`selected ${
                  focusedItem === "play" ? "focused" : null
                }`}
                icon={<PlayIcon />}
                label="Assista"
                onClick={() => {}}
                onFocus={() => {
                  setFocusedItem("play");
                }}
              />
            ) : null}
            {shouldDisplayMoreAction() ? (
              <Button
                className={`selected ${
                  focusedItem === "more" ? "focused" : null
                }`}
                label="Veja mais"
                onClick={() => {}}
                onFocus={() => {
                  setFocusedItem("more");
                }}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ContentWrapperBanner;
