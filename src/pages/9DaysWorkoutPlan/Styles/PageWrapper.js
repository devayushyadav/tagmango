import styled from "styled-components";

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



export const WorkoutPlanContent = styled.div`
  margin: 0 auto;
  padding-top: 24px;
  @media (max-width: 768px) {
    padding: 24px 8px 0;
  }
`;
