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
import { useTheme } from "../../../context/ThemeContext";

import FireIcon from "../../../assets/images/fireIcon.svg";
import BellLight from "../../../assets/images/lightmodesvgs/bell.svg";
import BellDark from "../../../assets/images/darkmodesvgs/bell.svg";
import UserIcon from "../../../assets/images/user.svg";
import LogoDark from "../../../assets/images/darkmodesvgs/PageLogo.svg";
import LogoLight from "../../../assets/images/lightmodesvgs/PageLogo.svg";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const BellIcon = theme === "light" ? BellLight : BellDark;
  const LogoIcon = theme === "light" ? LogoLight : LogoDark;

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <LogoContainer>
          <LogoImage src={LogoIcon} alt="BackstagePass logo" />
        </LogoContainer>
      </HeaderLeft>

      <HeaderRight>
        <StreakPill>
          <img src={FireIcon} alt="Streak" />
          <span>30</span>
        </StreakPill>

        <IconButton
          aria-label="Toggle theme"
          onClick={toggleTheme}
          title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="3" fill="currentColor" />
              <path
                d="M10 1V3M10 17V19M1 10H3M17 10H19M3.22 3.22L4.64 4.64M15.36 15.36L16.78 16.78M3.22 16.78L4.64 15.36M15.36 4.64L16.78 3.22"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a1 1 0 00-1.414 1.414A6 6 0 1015.879 15.879a1 1 0 001.414-1.414z"
                fill="currentColor"
              />
            </svg>
          )}
        </IconButton>

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
