interface IContentItemData {
  title: string;
  backgroundImage: string;
  thumbImage?: string;
  actions?: {
    play?: boolean;
    more?: boolean;
  };
}

export default IContentItemData;
