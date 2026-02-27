import styled from "styled-components";

export const WorkoutPlanPageWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`;

export const WorkoutPlanWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const WorkoutPlanMenuBar = styled.div`
  background: linear-gradient(360deg, rgba(255, 255, 255, 0) 0%, #f7f6fc 100%);
  max-width: 258px;
  width: 100%;
  padding-top: 76px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: sticky;
  top: 68.8px;
  a {
    text-decoration: none;
    color: rgba(33, 31, 38, 1);
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0;
    font-family: "Be Vietnam Pro", sans-serif;
    padding: 12px 16px;
  }
`;

export const WorkoutPlanContent = styled.div`
  margin: 0 auto;
`;
