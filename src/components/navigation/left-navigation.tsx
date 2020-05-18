import React, { useState } from "react";
import "./left-navigation.scss";
import Button from "../button/button";
import HomeIcon from "../icon/home";
import SearchIcon from "../icon/search";
import NowIcon from "../icon/now";
import CategoriesIcon from "../icon/categories";
import AccountIcon from "../icon/account";
import LeftNavigationItemType from "../../shared/types/left-navigation-item";

interface IProps {
  selectedItem: LeftNavigationItemType;
  onSelectItem: Function;
}

const LeftNavigation = (props: IProps) => {
  const { selectedItem, onSelectItem } = props;
  const [focusedItem, setFocusedItem] = useState(
    null as LeftNavigationItemType | null
  );

  const getItemClassNames = (item: LeftNavigationItemType) => {
    const itemClassNames = [
      isItemFocused(item) ? "focused" : "",
      isItemSelected(item) ? "selected" : "",
    ];

    return itemClassNames.join(" ");
  };

  const isItemFocused = (item: LeftNavigationItemType) => {
    return item === focusedItem;
  };

  const isItemSelected = (item: LeftNavigationItemType) => {
    return item === selectedItem;
  };

  const onItemClick = (item: LeftNavigationItemType) => {
    onSelectItem(item);
    console.log("clicou", { item });
  };

  return (
    <div className="left-navigation-wrapper hidden">
      <nav>
        <Button
          className={getItemClassNames("search")}
          icon={<SearchIcon />}
          label="Busca"
          onClick={() => onItemClick("search")}
          onFocus={() => setFocusedItem("search")}
        />
        <Button
          className={getItemClassNames("home")}
          icon={<HomeIcon />}
          label="Início"
          onClick={() => onItemClick("home")}
          onFocus={() => setFocusedItem("home")}
        />
        <Button
          className={getItemClassNames("now")}
          icon={<NowIcon />}
          label="Agora na Globo"
          onClick={() => onItemClick("now")}
          onFocus={() => setFocusedItem("now")}
        />
        <Button
          className={getItemClassNames("categories")}
          icon={<CategoriesIcon />}
          label="Categorias"
          onClick={() => onItemClick("categories")}
          onFocus={() => setFocusedItem("categories")}
        />
        <Button
          className={getItemClassNames("account")}
          icon={<AccountIcon />}
          label="Minha Conta"
          onClick={() => onItemClick("account")}
          onFocus={() => setFocusedItem("account")}
        />
      </nav>
    </div>
  );
};

export default LeftNavigation;
