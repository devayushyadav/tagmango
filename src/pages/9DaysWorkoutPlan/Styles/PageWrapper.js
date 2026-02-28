import styled from "styled-components";
import curveLight from "../../../assets/images/lightmodesvgs/top-corner.png";
import curveDark from "../../../assets/images/darkmodesvgs/top-corner-dark.png";

export const WorkoutPlanPageWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const WorkoutPlanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: visible;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MobileHeader = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 24px 24px;
  .mobile-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: -1;
    object-fit: cover;
  }
  .navigation-container {
    background: ${(props) =>
      props.theme.mode === "dark"
        ? "rgb(0 0 0 / 79%)"
        : "rgb(255 255 255 / 29%)"};
    backdrop-filter: blur(8px) saturate(200%);
    box-shadow: ${(props) =>
      props.theme.mode === "dark"
        ? "0 8px 32px rgba(0, 0, 0, 0.3)"
        : "0 8px 32px rgba(31, 38, 135, 0.1)"};
  }
`;

export const WorkoutPlanMenuBar = styled.div`
  max-width: 258px;
  width: 100%;
  position: sticky;
  top: 118px;
  align-self: flex-start;
  height: fit-content;

  .navigation-links-container {
    max-height: calc(100vh - 118px);
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding-top: 76px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 12px;
    @media (max-width: 768px) {
      max-height: none;
      overflow-y: visible;
    }
    background: ${(props) =>
      props.theme.mode === "dark"
        ? "rgb(0 0 0 / 79%)"
        : "rgb(255 255 255 / 29%)"};
    backdrop-filter: blur(4px) saturate(196%);
    box-shadow: ${(props) =>
      props.theme.mode === "dark"
        ? "0 8px 32px rgba(0, 0, 0, 0.3)"
        : "0 8px 32px rgba(31, 38, 135, 0.1)"};
    @media (max-width: 768px) {
      backdrop-filter: none;
      box-shadow: none;
      background: transparent;
    }
  }

  .navigation-links-container::-webkit-scrollbar {
    display: none;
  }

  .menu-bg {
    position: absolute;
    top: 0;
    z-index: -1;
    object-fit: cover;
  }

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
    width: --webkit-fill-available;
    margin-left: 0;

    &.active-link {
      background: ${(props) => (props.theme.mode === "dark" ? "#000" : "#fff")};
      color: ${(props) =>
        props.theme.mode === "dark" ? "#ffffff" : "rgba(33, 31, 38, 1)"};
      border-radius: 50px 0 0 50px;
      padding-right: 30px;
      margin-right: -14px;
      @media (max-width: 768px) {
        margin-bottom: -12px;
        padding: 8px 16px 21px;
      }
    }
  }

  .menu-link.active-link {
    position: relative;
  }

  .menu-link.active-link:before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background-image: ${(props) =>
      props.theme.mode === "dark" ? `url(${curveDark})` : `url(${curveLight})`};
    background-size: contain;
    background-repeat: no-repeat;
    top: -25px;
    right: -7px;

    @media (max-width: 768px) {
      bottom: -5px;
      left: -17px;
      top: unset;
    }
  }

  .menu-link.active-link:after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background-image: ${(props) =>
      props.theme.mode === "dark" ? `url(${curveDark})` : `url(${curveLight})`};
    background-size: contain;
    background-repeat: no-repeat;
    bottom: -23px;
    right: -4px;
    transform: rotate(270deg);

    @media (max-width: 768px) {
      bottom: -9px;
      right: -23px;
      transform: rotate(90deg);
    }
  }

  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    height: auto;
    max-width: 100%;

    .navigation-links-container {
      max-height: auto;
      overflow-x: auto;
      overflow-y: hidden;
      flex-direction: row;
      max-width: 100%;
      padding: 12px 0;
      border-radius: 0 0 24px 24px;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
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
      margin-left: 0;

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
