import React, { useEffect } from "react";
import defaultImage from "../../assets/images/bbb-featured-content-bg.jpg";
import FeaturedContent from "../featured-content/featured-content";
import "./content-wrapper.scss";
import ContentWrapperBanner from "./content-wrapper-banner";

interface IProps {
  contentImage: string;
  setContentImage: Function;
}

const ContentWrapper = (props: IProps) => {
  const { contentImage, setContentImage } = props;

  useEffect(() => {
    setContentImage(defaultImage);
  }, [setContentImage]);

  return (
    <section className="content-wrapper">
      <ContentWrapperBanner contentImage={contentImage} />
      <FeaturedContent />
    </section>
  );
};

export default ContentWrapper;
