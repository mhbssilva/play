import React from "react";
import ActionHelper from "../../shared/helpers/action";
import KeyHelper from "../../shared/helpers/key-helper";
import Button from "../button/button";
import AccountIcon from "../icon/account";
import CategoriesIcon from "../icon/categories";
import HomeIcon from "../icon/home";
import NowIcon from "../icon/now";
import SearchIcon from "../icon/search";
import "./left-navigation.scss";

interface IProps {
  selectedItem: number;
  setFocusOnFeature: Function;
  setSelectedItem: Function;
}

const LeftNavigation = (props: IProps) => {
  const { selectedItem, setFocusOnFeature, setSelectedItem } = props;

  const menuItems = [
    {
      icon: <SearchIcon />,
      label: "Busca",
    },
    {
      icon: <HomeIcon />,
      label: "Início",
    },
    {
      icon: <NowIcon />,
      label: "Agora na Globo",
    },
    {
      icon: <CategoriesIcon />,
      label: "Categorias",
    },
    {
      icon: <AccountIcon />,
      label: "Minha Conta",
    },
  ];

  const isItemSelected = (index: number) => index === selectedItem;

  const onPressUpKey = () => {
    if (selectedItem > 0) {
      ActionHelper.setFocus(`left-navigation-menu-btn-${selectedItem - 1}`);
    }
  };

  const onPressDownKey = () => {
    if (selectedItem < menuItems.length) {
      ActionHelper.setFocus(`left-navigation-menu-btn-${selectedItem + 1}`);
    }
  };

  const onPressLeftKey = () => {};
  const onPressRightKey = () => {
    setFocusOnFeature();
  };

  const onKeyPress = (e: KeyboardEvent) => {
    KeyHelper.setKeyCallback(e, {
      upCallback: onPressUpKey,
      downCallback: onPressDownKey,
      leftCallback: onPressLeftKey,
      rightCallback: onPressRightKey,
    });
  };

  return (
    <div className="left-navigation-wrapper">
      <nav>
        {menuItems.map((item, index) => (
          <Button
            id={`left-navigation-menu-btn-${index}`}
            key={`left-navigation-menu-btn-${index}`}
            className={isItemSelected(index) ? "selected" : ""}
            icon={item.icon}
            label={item.label}
            onFocus={() => setSelectedItem(index)}
            onKeyPress={onKeyPress}
          />
        ))}
      </nav>
    </div>
  );
};

export default LeftNavigation;
