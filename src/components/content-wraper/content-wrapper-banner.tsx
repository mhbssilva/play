import React from "react";
import KeyHelper from "../../shared/helpers/key-helper";
import IContentData from "../../shared/interfaces/content-data";
import Button from "../button/button";
import PlayIcon from "../icon/play";
import "./content-wrapper-banner.scss";
import ActionHelper from "../../shared/helpers/action";
import ContentType from "../../shared/enums/content-type";

interface IProps {
  contentData: IContentData;
  contentDataIndex: number;
  setFocusOnTrail: Function;
  setFocusOnNavigation: Function;
  setSelectedContentType: Function;
}

const ContentWrapperBanner = (props: IProps) => {
  const {
    contentData,
    contentDataIndex,
    setSelectedContentType,
    setFocusOnTrail,
  } = props;

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

  const showMoreBtn = () => {
    return (
      contentData.data[getContentIndex()].actions &&
      contentData.data[getContentIndex()].actions!.more
    );
  };

  const showPlayBtn = () => {
    return (
      contentData.data[getContentIndex()].actions &&
      contentData.data[getContentIndex()].actions!.play
    );
  };

  const onPressUpKey = () => {};
  const onPressDownKey = () => {
    setSelectedContentType(ContentType.TRAIL);
    setFocusOnTrail();
  };

  const playBtnOnKeyPress = (e: KeyboardEvent) => {
    KeyHelper.setKeyCallback(e, {
      upCallback: onPressUpKey,
      downCallback: onPressDownKey,
      leftCallback: props.setFocusOnNavigation(),
      rightCallback: () => ActionHelper.setFocus("btn-more-action"),
    });
  };

  const moreBtnOnKeyPress = (e: KeyboardEvent) => {
    KeyHelper.setKeyCallback(e, {
      upCallback: onPressUpKey,
      downCallback: onPressDownKey,
      leftCallback: () => ActionHelper.setFocus("btn-play-action"),
      rightCallback: () => {},
    });
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
        {showMoreBtn() || showPlayBtn() ? (
          <div className="actions">
            {showPlayBtn() ? (
              <Button
                className="selected"
                icon={<PlayIcon />}
                id={`btn-play-action`}
                label="Assista"
                onKeyPress={playBtnOnKeyPress}
              />
            ) : null}
            {showMoreBtn() ? (
              <Button
                className="selected"
                id={`btn-more-action`}
                label="Veja mais"
                onKeyPress={moreBtnOnKeyPress}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ContentWrapperBanner;
