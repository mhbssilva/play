interface IContentData {
  title: string;
  backgroundImage: string;
  thumbImage?: string;
  actions?: {
    play?: boolean;
    more?: boolean;
  };
}

interface IContentDataList {
  contents: Array<{
    type: "feature" | "trail";
    trailName?: string;
    categoryName?: string;
    programName?: string;
    programLogoImage?: string;
    data: IContentData | Array<IContentData>;
  }>;
}

export default IContentDataList;
