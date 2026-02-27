import React from "react";
import { WorkoutPlanContent } from "../../Styles/PageWrapper";
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
  CheckIcon,
  ChecklistItemText,
  ConfettiContainer,
  EngagementGroup,
  EngageIcon,
  OthersPost,
} from "./Styles/PageContentWrapper";
import UserIcon from "../../../../assets/images/user.svg";
import MyPostImage from "../../../../assets/images/Post.png";
import CommentIcon from "../../../../assets/images/Comment.svg";
import ReactionIcon from "../../../../assets/images/Reactions.svg";
import Avatar1 from "../../../../assets/images/UserOne.png";
import Avatar2 from "../../../../assets/images/UserTwo.png";
import Avatar3 from "../../../../assets/images/UserThree.png";
import PinIcon from "../../../../assets/images/pin.svg";

const PageContent = ({
  myPost = {
    userName: "Ashraf Idrishi",
    userAvatar: UserIcon,
    caption: "Today's challenge workout completed – feeling stronger already",
    postImage: MyPostImage,
    likes: 18,
    comments: 10,
    time: "1s",
  },
  othersPost = {
    userName: "Russell Brunson",
    userAvatar: UserIcon,
    time: "3 hrs ago",
    description:
      "This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger—one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.",
    isPinned: true,
    checklist: [
      "1️⃣ Minimum 20 minutes of sit-up",
      "2️⃣ Mention Intensity",
      "3️⃣ Upload Media (Optional)",
    ],
  },
  othersAvatars = [Avatar1, Avatar2, Avatar3],
}) => {
  return (
    <WorkoutPlanContent>
      {/* My Post Card */}

      <ConfettiContainer>
        <span>Your Submission</span>
      </ConfettiContainer>
      <MyPostCard>
        <PostHeader>
          <PostUserInfo>
            <PostUserAvatar src={myPost.userAvatar} alt={myPost.userName} />
            <PostUserDetails>
              <PostUserName>{myPost.userName}</PostUserName>
              <PostUserTime>{myPost.time}</PostUserTime>
            </PostUserDetails>
          </PostUserInfo>
          <PostMenuIcon>⋯</PostMenuIcon>
        </PostHeader>

        <PostCaption>{myPost.caption}</PostCaption>

        <PostImage src={myPost.postImage} alt="Post" />

        <PostEngagement>
          <EngagementLeft>
            <EngagementGroup>
              <EngagementIcon>🙏</EngagementIcon>
              <EngagementIcon>😊</EngagementIcon>
              <span className="likes">{myPost.likes}</span>
            </EngagementGroup>
            <EngageIcon>
              <img src={ReactionIcon} alt="React" />
            </EngageIcon>
            <EngageIcon>
              <img src={CommentIcon} alt="Comment" />
            </EngageIcon>
          </EngagementLeft>
          <EngagementRight>{myPost.comments} Comments</EngagementRight>
        </PostEngagement>
      </MyPostCard>

      {/* Others Post Card */}
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
          {othersPost.isPinned && (
            <PinnedIndicator>
              <img src={PinIcon} alt="Pinned" />
              This is a pinned post
            </PinnedIndicator>
          )}
          <PostHeader>
            <PostUserInfo>
              <PostUserAvatar
                src={othersPost.userAvatar}
                alt={othersPost.userName}
              />
              <PostUserDetails>
                <PostUserName>{othersPost.userName}</PostUserName>
                <PostUserTime>{othersPost.time}</PostUserTime>
              </PostUserDetails>
            </PostUserInfo>
            <PostMenuIcon>⋯</PostMenuIcon>
          </PostHeader>

          <PostContent>
            <PostDescription>{othersPost.description}</PostDescription>

            {othersPost.checklist.map((item, index) => (
              <ChecklistItem key={index}>
                <ChecklistItemText>{item}</ChecklistItemText>
              </ChecklistItem>
            ))}
          </PostContent>
        </OthersPost>
      </OthersPostCard>
    </WorkoutPlanContent>
  );
};

export default PageContent;
