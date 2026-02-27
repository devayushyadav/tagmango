import React from "react";
import HeaderWrapper, {
  HeaderLeft,
  HeaderRight,
  LogoContainer,
  LogoImage,
  StreakPill,
  IconButton,
  Avatar,
} from "./Styles/HeaderWrapper";

import Logo from "../../../assets/images/logo.svg";
import FireIcon from "../../../assets/images/fireIcon.svg";
import BellIcon from "../../../assets/images/bellIcon.svg";
import UserIcon from "../../../assets/images/user.svg";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <LogoContainer>
          <LogoImage src={Logo} alt="BackstagePass logo" />
        </LogoContainer>
      </HeaderLeft>

      <HeaderRight>
        <StreakPill>
          <img src={FireIcon} alt="Streak" />
          <span>30</span>
        </StreakPill>

        <IconButton aria-label="Notifications">
          <img src={BellIcon} alt="" />
        </IconButton>

        <Avatar>
          <img src={UserIcon} alt="User" />
        </Avatar>
      </HeaderRight>
    </HeaderWrapper>
  );
};

export default Header;