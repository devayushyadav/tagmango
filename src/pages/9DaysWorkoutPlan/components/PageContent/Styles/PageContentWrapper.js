import styled from "styled-components";
import ConfettiImage from "../../../../../assets/images/Confetti.svg";

export const ConfettiContainer = styled.div`
  border-radius: 24px 24px 0 0;
  background: url(${ConfettiImage}) no-repeat center center;
  background-size: cover;
  background-color: ${(props) => props.theme.accent.greenBg};
  min-height: 100px;
  text-align: center;
  padding: 12px;
  transition: background-color 0.2s ease;
  span {
    font-family: "Be Vietnam Pro", sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: ${(props) => props.theme.accent.green};
    text-align: center;
    display: block;
    margin: 0 auto;
    transition: color 0.2s ease;
  }
`;

export const MyPostCard = styled.div`
  background-color: ${(props) => props.theme.bg.post || props.theme.bg.primary};
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px ${(props) => props.theme.shadow.md};
  max-width: 640px;
  width: 100%;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.border.light};
  margin-top: -80px;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
`;

export const OthersPost = styled.div`
  margin: 0 12px;
  border-radius: 24px;
  border: 1px solid ${(props) => props.theme.border.light};
  transition: border-color 0.2s ease;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
`;

export const PostUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const PostUserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const PostUserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostUserName = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.text.primary};
  font-family: "Be Vietnam Pro", sans-serif;
  transition: color 0.2s ease;
`;

export const PostUserTime = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.text.secondary};
  font-family: "Be Vietnam Pro", sans-serif;
  transition: color 0.2s ease;
`;

export const PostMenuIcon = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.text.secondary};
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.text.primary};
  }
`;

export const PostCaption = styled.p`
  margin: 0;
  padding: 0 16px 16px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.text.primary};
  line-height: 20px;
  font-family: "Be Vietnam Pro", sans-serif;
  transition: color 0.2s ease;
`;

export const PostImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
`;

export const PostEngagement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid ${(props) => props.theme.border.light};
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => props.theme.text.secondary};
  font-family: "Be Vietnam Pro", sans-serif;
  transition:
    border-color 0.2s ease,
    color 0.2s ease;
`;

export const EngagementLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const EngagementGroup = styled.div`
  padding: 4px 12px;
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "rgba(48, 0, 64, 0.06)"
      : "rgba(167, 139, 250, 0.1)"};
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  transition: background-color 0.2s ease;
  .likes {
    font-family: Inter;
    font-weight: 500;
    font-style: Medium;
    font-size: 14px;
    line-height: 20px;
    color: ${(props) => props.theme.text.primary};
    transition: color 0.2s ease;
  }
`;

export const EngagementIcon = styled.span`
  width: 16px;
  height: 24px;
`;

export const EngageIcon = styled.div`
  background-color: ${(props) =>
    props.theme.mode === "light"
      ? "rgba(48, 0, 64, 0.06)"
      : "rgba(167, 139, 250, 0.1)"};
  height: 100%;
  padding: 6px;
  border: 1px solid ${(props) => props.theme.border.medium};
  border-radius: 50%;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
  svg,
  img {
    height: 18px;
    width: 18px;
  }
`;

export const EngagementRight = styled.span`
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.text.primary};
  transition: color 0.2s ease;
`;

export const SeeOthersSection = styled.div`
  padding: 16px 20px;
  text-align: center;
`;

export const SeeOthersText = styled.p`
  margin: 0;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  color: ${(props) => props.theme.text.primary};
  font-family: "Be Vietnam Pro", sans-serif;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: color 0.2s ease;
`;

export const SeeOthersAvatars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AvatarCircle = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${(props) => props.theme.bg.primary};
  margin-right: -8px;
  transition: border-color 0.2s ease;

  &:last-child {
    margin-right: 0;
  }
`;

export const ParticipantsText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: ${(props) => props.theme.text.primary};
  font-family: "Be Vietnam Pro", sans-serif;
  transition: color 0.2s ease;
  b {
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0.04px;
  }
`;

export const OthersPostCard = styled.div`
  background-color: ${(props) => props.theme.bg.post || props.theme.bg.primary};
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;
  box-shadow: 0 1px 3px ${(props) => props.theme.shadow.md};
  border: 1px solid ${(props) => props.theme.border.medium};
  max-width: 640px;
  width: 100%;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
`;

export const PinnedIndicator = styled.div`
  font-family: "Be Vietnam Pro", sans-serif;
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.04px;
  padding: 9px 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  border-bottom: 1px solid ${(props) => props.theme.border.light};
  transition: border-color 0.2s ease;
`;

export const PostContent = styled.div`
  padding: 0px 16px;
`;

export const PostDescription = styled.p`
  margin: 0 0 16px 0;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.text.primary};
  line-height: 20px;
  font-family: "Be Vietnam Pro", sans-serif;
  transition: color 0.2s ease;
`;

export const ChecklistItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
  color: ${(props) => props.theme.text.primary};
  font-family: "Be Vietnam Pro", sans-serif;
  transition: color 0.2s ease;

  &:last-child {
    padding-bottom: 0;
  }
`;

export const CheckIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  background-color: ${(props) => props.theme.bg.tertiary};
  border-radius: 4px;
  font-size: 12px;
  color: ${(props) => props.theme.text.secondary};
  flex-shrink: 0;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
`;

export const ChecklistItemText = styled.span`
  line-height: 20px;
`;
