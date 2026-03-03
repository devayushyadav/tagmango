import { WorkoutPlanContent } from "../../Styles/PageWrapper";
import MySubmissionCard from "./components/MySubmissionCard";
import OthersSubmissionCard from "./components/OthersSubmissionCard";
import UserIcon from "../../../../assets/images/user.svg";
import RusselIcon from "../../../../assets/images/Russel.png";
import MyPostImage from "../../../../assets/images/Post.png";
import Avatar1 from "../../../../assets/images/UserOne.png";
import Avatar2 from "../../../../assets/images/UserTwo.png";
import Avatar3 from "../../../../assets/images/UserThree.png";

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
  // change to an array of posts; first item is pinned
  othersPosts = [
    {
      userName: "Russell Brunson",
      userAvatar: RusselIcon,
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
  ],
  othersAvatars = [Avatar1, Avatar2, Avatar3],
}) => {
  return (
    <WorkoutPlanContent>
      {/* My Post Card */}
      <MySubmissionCard post={myPost} />

      {/* Others Post Card */}
      <OthersSubmissionCard posts={othersPosts} othersAvatars={othersAvatars} />
    </WorkoutPlanContent>
  );
};

export default PageContent;
