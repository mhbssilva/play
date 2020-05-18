import React from "react";
import "./featured-content.scss";
import featuredContentData from "../../data/featured-content";
import Button from "../button/button";
import PlayIcon from "../icon/play";

function FeaturedContent() {
  return (
    <section className="featured-content-wrapper">
      <h1>{featuredContentData.title}</h1>
      <div className="actions">
        <Button
          icon={<PlayIcon />}
          label="Assista"
          onClick={() => {}}
          onFocus={() => {}}
        />
        <Button label="Veja mais" onClick={() => {}} onFocus={() => {}} />
      </div>
    </section>
  );
}

export default FeaturedContent;
