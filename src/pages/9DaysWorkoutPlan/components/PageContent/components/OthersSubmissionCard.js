import { useTheme } from "../../../../../context/ThemeContext";
import {
  PostHeader,
  PostUserInfo,
  PostUserAvatar,
  PostUserDetails,
  PostUserName,
  PostUserTime,
  PostMenuIcon,
  SeeOthersSection,
  SeeOthersText,
  SeeOthersAvatars,
  AvatarCircle,
  ParticipantsText,
  OthersPostCard,
  PinnedIndicator,
  PostContent,
  PostDescription,
  ChecklistItem,
  ChecklistItemText,
  OthersPost,
} from "../Styles/PageContentWrapper";
import PinLight from "../../../../../assets/images/lightmodesvgs/pin.svg";
import PinDark from "../../../../../assets/images/darkmodesvgs/pin.svg";

const OthersSubmissionCard = ({ post, othersAvatars }) => {
  const { theme } = useTheme();
  const pinIcon = theme === "light" ? PinLight : PinDark;

  return (
    <OthersPostCard>
      <SeeOthersSection>
        <SeeOthersText>
          See what others
          {othersAvatars.length > 0 && (
            <SeeOthersAvatars>
              {othersAvatars.slice(0, 3).map((avatar, index) => (
                <AvatarCircle key={index} src={avatar} alt="Participant" />
              ))}
            </SeeOthersAvatars>
          )}
          shared
        </SeeOthersText>
        <ParticipantsText>
          <b>85+</b> participants already completed
        </ParticipantsText>
      </SeeOthersSection>

      <OthersPost>
        {post.isPinned && (
          <PinnedIndicator>
            <img src={pinIcon} alt="Pinned" />
            This is a pinned post
          </PinnedIndicator>
        )}
        <PostHeader>
          <PostUserInfo>
            <PostUserAvatar src={post.userAvatar} alt={post.userName} />
            <PostUserDetails>
              <PostUserName>{post.userName}</PostUserName>
              <PostUserTime>{post.time}</PostUserTime>
            </PostUserDetails>
          </PostUserInfo>
          <PostMenuIcon>⋯</PostMenuIcon>
        </PostHeader>

        <PostContent>
          <PostDescription>{post.description}</PostDescription>

          {post.checklist.map((item, index) => (
            <ChecklistItem key={index}>
              <ChecklistItemText>{item}</ChecklistItemText>
            </ChecklistItem>
          ))}
        </PostContent>
      </OthersPost>
    </OthersPostCard>
  );
};

export default OthersSubmissionCard;
