import React, { useState } from "react";
import LeftNavigationItemType from "../../shared/types/left-navigation-item";
import Button from "../button/button";
import AccountIcon from "../icon/account";
import CategoriesIcon from "../icon/categories";
import HomeIcon from "../icon/home";
import NowIcon from "../icon/now";
import SearchIcon from "../icon/search";
import "./left-navigation.scss";

interface IProps {
  selectedItem: LeftNavigationItemType;
  onSelectItem: Function;
}

const LeftNavigation = (props: IProps) => {
  const { selectedItem, onSelectItem } = props;
  const [focusedItem, setFocusedItem] = useState(
    null as LeftNavigationItemType | null
  );

  const menuItems = [
    {
      icon: <SearchIcon />,
      label: "Busca",
      type: "search" as LeftNavigationItemType,
    },
    {
      icon: <HomeIcon />,
      label: "Início",
      type: "home" as LeftNavigationItemType,
    },
    {
      icon: <NowIcon />,
      label: "Agora na Globo",
      type: "now" as LeftNavigationItemType,
    },
    {
      icon: <CategoriesIcon />,
      label: "Categorias",
      type: "categories" as LeftNavigationItemType,
    },
    {
      icon: <AccountIcon />,
      label: "Minha Conta",
      type: "account" as LeftNavigationItemType,
    },
  ];

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
        {menuItems.map((item) => (
          <Button
            className={getItemClassNames(item.type)}
            icon={item.icon}
            label={item.label}
            onClick={() => onItemClick(item.type)}
            onFocus={() => setFocusedItem(item.type)}
          />
        ))}
      </nav>
    </div>
  );
};

export default LeftNavigation;
