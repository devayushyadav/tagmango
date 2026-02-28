import styled from "styled-components";

export const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid
    ${(props) => props.theme.border.pageBar || props.theme.border.light};
  background-color: ${(props) =>
    props.theme.bg.pageBar || props.theme.bg.primary};
  position: sticky;
  top: 61px;
  z-index: 1;
  padding: 0 24px 0 18px;
  height: 56px;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
  @media (max-width: 768px) {
    top: 0;
    padding: 8px;
    gap: 8px;
    background: transparent;
    border: none;
  }
`;

export const LeftSection = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0;
  border: none;
  background: transparent;
  color: ${(props) => props.theme.text.primary};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  font-family: "Be Vietnam Pro", sans-serif;
  cursor: pointer;
  transition:
    opacity 0.2s ease,
    color 0.2s ease;

  &:hover {
    opacity: 0.8;
  }

  .backLabel {
    &::after {
      content: "";
      margin-left: 16px;
      border-left: 1px solid ${(props) => props.theme.border.medium};
      height: 24px;
      width: 2px;
      transition: border-color 0.2s ease;
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
  color: ${(props) => props.theme.text.primary};
  transition: color 0.2s ease;
`;

export const LeftText = styled.div`
  flex: 1;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
  color: ${(props) => props.theme.text.primary};
  font-family: "Be Vietnam Pro", sans-serif;
  margin-left: 10px;
  transition: color 0.2s ease;
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
  color: ${(props) => props.theme.text.primary};
  letter-spacing: 0;
  font-family: "Be Vietnam Pro", sans-serif;
  transition: color 0.2s ease;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    svg {
      background: ${(props) => props.theme.bg.tertiary};
      padding: 8px;
      border-radius: 50%;
      height: 24px;
      width: 24px;
      transition: background-color 0.2s ease;
    }
  }
`;
