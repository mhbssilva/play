interface IContentItemData {
  title: string;
  categoryName?: string;
  backgroundImage: string;
  thumbImage?: string;
  actions?: {
    play?: boolean;
    more?: boolean;
  };
}

export default IContentItemData;
