import styled from "styled-components";

export const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--Colors-Neutral-Neutral-3, #f2eff3);
  background-color: #ffffff;
  position: sticky;
  top: 69px;
  z-index: 1;
  background: #fff;
  padding: 0 24px 0 18px;
  height: 56px;
  @media (max-width: 768px) {
    top: 0;
    padding: 8px;
    gap: 8px;
  }
`;

export const LeftSection = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  border: none;
  background: transparent;
  color: #111827;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  font-family: "Be Vietnam Pro", sans-serif;
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
    @media (max-width: 768px) {
      display: none;
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
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  color: #111827;
  font-family: "Be Vietnam Pro", sans-serif;
  margin-left: 10px;
  @media (max-width: 768px) {
    display: none;
  }
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
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    svg {
      background: rgba(48, 0, 64, 0.06);
      padding: 8px;
      border-radius: 50%;
      height: 24px;
      width: 24px;
    }
  }
`;
