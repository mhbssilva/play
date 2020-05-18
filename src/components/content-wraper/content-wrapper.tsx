import React, { useEffect } from "react";
import defaultImage from "../../assets/images/bbb-featured-content-bg.jpg";
import FeaturedContent from "../featured-content/featured-content";
import "./content-wrapper.scss";
import ContentWrapperBanner from "./content-wrapper-banner";
import sampleContentData from "../../data/sample-content";
import IContentData from "../../shared/interfaces/content-data";

interface IProps {
  selectedContentData: IContentData;
  setSelectedContentData: Function;
  selectedContentDataIndex: number;
  setSelectedContentDataIndex: Function;
}

const data = sampleContentData.contents[0];

const ContentWrapper = (props: IProps) => {
  const { selectedContentData, selectedContentDataIndex } = props;

  return (
    <section className="content-wrapper">
      <ContentWrapperBanner
        contentData={selectedContentData}
        contentDataIndex={selectedContentDataIndex}
      />
      <FeaturedContent contentData={data} />
    </section>
  );
};

export default ContentWrapper;
