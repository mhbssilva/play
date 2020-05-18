import React from "react";
import "./content-wrapper-banner.scss";

interface IProps {
  contentImage: string;
}

const ContentWrapperBanner = (props: IProps) => {
  const { contentImage } = props;

  return (
    <div
      className="content-wrapper-banner"
      style={{
        backgroundImage: contentImage
          ? `linear-gradient(to right, rgba(0,0,0,.8),rgba(0,0,0,0)), linear-gradient( rgba(0,0,0,0),rgba(0,0,0,1)), url(${contentImage})`
          : "",
      }}
    />
  );
};

export default ContentWrapperBanner;
