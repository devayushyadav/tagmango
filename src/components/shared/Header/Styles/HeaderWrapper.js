import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 60px;
  background-color: ${(props) =>
    props.theme.bg.header || props.theme.bg.primary};
  border-bottom: 1px solid ${(props) => props.theme.border.light};
  box-shadow: 0 1px 2px ${(props) => props.theme.shadow.sm};
  position: sticky;
  top: 0;
  z-index: 10;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
  @media (max-width: 768px) {
    display: none;
  }
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
  color: ${(props) => props.theme.text.primary};
  white-space: nowrap;
  transition: color 0.2s ease;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: nowrap;
  height: 32px;
`;

export const StreakPill = styled.div`
  background: ${(props) => props.theme.streakPill.bg};
  display: inline-flex;
  align-items: center;
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  gap: 8px;
  height: 32px;
  padding: 4px 8px;
  border-radius: 999px;
  color: ${(props) => props.theme.streakPill.text};
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
`;

export const IconButton = styled.button`
  background: ${(props) => props.theme.icon.bg};
  padding: 7px;
  border: 1px solid ${(props) => props.theme.icon.border};
  border-radius: 50%;
  max-width: 32px;
  max-height: 32px;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;
  color: ${(props) => props.theme.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${(props) => props.theme.text.secondary};
  }

  img {
    width: 16px;
    height: 16px;
    display: block;
  }

  svg {
    width: 16px;
    height: 16px;
    display: block;
  }
`;

export const Badge = styled.div`
  min-width: 32px;
  height: 32px;
  padding: 0 0.6rem;
  border-radius: 999px;
  background: ${(props) => props.theme.accent.purple};
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  transition: background-color 0.2s ease;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 999px;
  overflow: hidden;
  background-color: ${(props) => props.theme.bg.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default HeaderWrapper;
