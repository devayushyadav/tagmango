import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 24px;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoImage = styled.img`
  width: 200px;
  height: 24px;
  display: block;
`;

export const LogoTitle = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;
  white-space: nowrap;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: nowrap;
  height: 32px;
`;

export const StreakPill = styled.div`
  background: #30004010;
  display: inline-flex;
  align-items: center;
  font-family: 'Be Vietnam Pro', sans-serif;
    font-weight: 500;
    font-style: Medium;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0;
    gap: 4px;
  height: 32px;
  padding: 4px 8px;
  border-radius: 999px;
  color: #211F26;
`;

export const IconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.1s ease;

  img {
    display: block;
  }

  &:hover {
    background-color: rgba(15, 23, 42, 0.04);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const Badge = styled.div`
  min-width: 32px;
  height: 32px;
  padding: 0 0.6rem;
  border-radius: 999px;
  background: #7c3aed;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  overflow: hidden;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default HeaderWrapper;