import styled from "styled-components";

export const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border: 1px solid var(--Colors-Neutral-Neutral-3, #f2eff3);
  background-color: #ffffff;
`;

export const LeftSection = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  border: none;
  background: transparent;
  color: #111827;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  .backLabel {
    &::after {
      content: "";
      margin-left: 16px;
      border-left: 1px solid #d9d6df;
      height: 24px;
      width: 2px;
    }
  }
`;

export const BackIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex-shrink: 0;
`;

export const LeftText = styled.div`
  flex: 1;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #111827;
  margin-left: 10px;
`;

export const RightSection = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #111827;
  letter-spacing: 0;
  font-family: "Be Vietnam Pro", sans-serif;
`;
