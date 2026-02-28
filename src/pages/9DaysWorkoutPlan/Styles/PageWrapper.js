import styled from "styled-components";
import curveLight from "../../../assets/images/lightmodesvgs/top-corner.png";
import curveDark from "../../../assets/images/darkmodesvgs/top-corner-dark.png";
import menuBg from "../../../assets/images/menu-bg.svg";

export const WorkoutPlanPageWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const WorkoutPlanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WorkoutPlanMenuBar = styled.div`
  background: url(${menuBg}) no-repeat center center;
  background-size: cover;
  max-width: 250px;
  width: 100%;
  padding: 76px 0 0 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: calc(100vh - 126px);
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .menu-link {
    text-decoration: none;
    color: ${(props) =>
      props.theme.mode === "dark"
        ? "rgba(245, 241, 255, 0.72)"
        : "rgba(4, 0, 17, 0.61)"};
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0;
    font-family: "Be Vietnam Pro", sans-serif;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 50px;
    transition: all 0.2s ease;

    &.active-link {
      background: ${(props) => (props.theme.mode === "dark" ? "#000" : "#fff")};
      color: ${(props) =>
        props.theme.mode === "dark" ? "#ffffff" : "rgba(33, 31, 38, 1)"};
      border-radius: 50px 0 0 50px;
      margin-right: -5px;
    }
  }

  .menu-link.active-link {
    position: relative;
  }

  .menu-link.active-link:before {
    content: "";
    position: absolute;
    width: 30px; /* adjust size */
    height: 30px;
    background-image: ${(props) =>
      props.theme.mode === "dark" ? `url(${curveDark})` : `url(${curveLight})`};
    background-size: contain;
    background-repeat: no-repeat;
    top: -25px;
    right: -8px;
  }

  .menu-link.active-link:after {
    content: "";
    position: absolute;
    width: 30px; /* adjust size */
    height: 30px;
    background-image: ${(props) =>
      props.theme.mode === "dark" ? `url(${curveDark})` : `url(${curveLight})`};
    background-size: contain;
    background-repeat: no-repeat;
    bottom: -23px;
    right: -4px;
    transform: rotate(270deg);
  }

  @media (max-width: 768px) {
    background: none;
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
    max-width: none;
    padding: 8px 0 6px 0;
    border-radius: 0 0 24px 24px;
    scrollbar-width: none;
    -ms-overflow-style: none;
    max-width: 100%;

    &::-webkit-scrollbar {
      display: none;
    }

    .menu-link {
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;
      text-wrap: nowrap;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 8px 16px;
      gap: 8px;

      &:first-child {
        margin-left: calc(50% - 28px);
      }

      &:last-child {
        margin-right: calc(50% - 28px);
      }

      &.active-link {
        border-radius: 50px 50px 0 0;
      }

      .current-day {
        font-weight: 700;
        font-size: 24px;
        display: block;
      }
    }
  }
`;

export const WorkoutPlanContent = styled.div`
  margin: 0 auto;
  padding-top: 24px;
  @media (max-width: 768px) {
    padding: 24px 8px 0;
  }
`;
