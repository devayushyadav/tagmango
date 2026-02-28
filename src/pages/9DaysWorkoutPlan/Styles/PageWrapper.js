import styled from "styled-components";

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
  background: linear-gradient(360deg, rgba(255, 255, 255, 0) 0%, #f7f6fc 100%);
  max-width: 258px;
  width: 100%;
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  .menu-link {
    text-decoration: none;
    color: rgba(33, 31, 38, 1);
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0;
    font-family: "Be Vietnam Pro", sans-serif;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &.active-link {
      background: rgba(48, 0, 64, 0.06);
    }
  }
  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
    max-width: none;
    padding: 8px 0 6px 0;
    background: red;
    .active {
      background: rgba(48, 0, 64, 0.06);
    }
  }
`;

export const WorkoutPlanContent = styled.div`
  margin: 0 auto;
  @media (max-width: 768px) {
    padding: 24px 8px 0;
  }
`;
