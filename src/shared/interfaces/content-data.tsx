import IContentItemData from "./content-item-data";

interface IContentData {
  type: "feature" | "trail";
  trailName?: string;
  programName?: string;
  programLogoImage?: string;
  data: Array<IContentItemData>;
}

export default IContentData;
