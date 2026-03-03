import { useTheme } from "../../../../../context/ThemeContext";
import {
  MyPostCard,
  PostHeader,
  PostUserInfo,
  PostUserAvatar,
  PostUserDetails,
  PostUserName,
  PostUserTime,
  PostMenuIcon,
  PostCaption,
  PostImage,
  PostEngagement,
  EngagementLeft,
  EngagementIcon,
  EngagementRight,
  ConfettiContainer,
  EngagementGroup,
  EngageIcon,
} from "../Styles/PageContentWrapper";
import CommentLight from "../../../../../assets/images/lightmodesvgs/comment.png";
import CommentDark from "../../../../../assets/images/darkmodesvgs/comment.png";
import ReactionLight from "../../../../../assets/images/lightmodesvgs/reaction.png";
import ReactionDark from "../../../../../assets/images/darkmodesvgs/reaction.png";
import HandsEmoji from "../../../../../assets/images/hands.png";
import SmileEmoji from "../../../../../assets/images/emoticon.png";

const MySubmissionCard = ({ post }) => {
  const { theme } = useTheme();
  const commentIcon = theme === "light" ? CommentLight : CommentDark;
  const reactionIcon = theme === "light" ? ReactionLight : ReactionDark;

  return (
    <>
      <ConfettiContainer>
        <span>Your Submission</span>
      </ConfettiContainer>
      <MyPostCard>
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

        <PostCaption>{post.caption}</PostCaption>

        <PostImage src={post.postImage} alt="Post" />

        <PostEngagement>
          <EngagementLeft>
            <EngagementGroup>
              <EngagementIcon src={HandsEmoji} />
              <EngagementIcon src={SmileEmoji} />
              <span className="likes">{post.likes}</span>
            </EngagementGroup>
            <EngageIcon src={reactionIcon} alt="React" />
            <EngageIcon src={commentIcon} alt="Comment" />
          </EngagementLeft>
          <EngagementRight>{post.comments} Comments</EngagementRight>
        </PostEngagement>
      </MyPostCard>
    </>
  );
};

export default MySubmissionCard;
