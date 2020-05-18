import React from "react";
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

  const getContentIndex = () => {
    return contentData.type === "feature" ? 0 : contentDataIndex;
  };

  const getBackgroundImage = () => {
    return contentData.data[getContentIndex()].backgroundImage;
  };

  const getCategoryName = () => {
    return contentData.categoryName ?? null;
  };

  const getProgramLogoImage = () => {
    return contentData.programLogoImage ?? null;
  };

  const getTitle = () => {
    return contentData.data[getContentIndex()].title;
  };

  const shouldDisplayMoreAction = () => {
    return contentData.data[getContentIndex()].actions!.more;
  };

  const shouldDisplayPlayAction = () => {
    return contentData.data[getContentIndex()].actions!.play;
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
        {getCategoryName() ? <h2>{getCategoryName()!}</h2> : null}
        <h1>{getTitle()}</h1>
        {shouldDisplayMoreAction() || shouldDisplayPlayAction() ? (
          <div className="actions">
            {shouldDisplayPlayAction() ? (
              <Button
                className="selected"
                icon={<PlayIcon />}
                label="Assista"
                onClick={() => {}}
                onFocus={() => {}}
              />
            ) : null}
            {shouldDisplayMoreAction() ? (
              <Button
                className="selected"
                label="Veja mais"
                onClick={() => {}}
                onFocus={() => {}}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ContentWrapperBanner;
