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
    {
      userName: "Jane Doe",
      userAvatar: Avatar1,
      time: "2 hrs ago",
      description: "Completed day 2! Feeling great.",
      isPinned: false,
      checklist: ["1️⃣ Minimum 20 minutes of sit-up", "2️⃣ Mention Intensity"],
    },
    {
      userName: "John Smith",
      userAvatar: Avatar2,
      time: "4 hrs ago",
      description: "Day 3 done, energy levels up.",
      isPinned: false,
      checklist: [
        "1️⃣ Minimum 20 minutes of sit-up",
        "2️⃣ Mention Intensity",
        "3️⃣ Upload Media (Optional)",
      ],
    },
    {
      userName: "Alex Johnson",
      userAvatar: Avatar3,
      time: "5 hrs ago",
      description: "Third workout complete - keeping the momentum!",
      isPinned: false,
      checklist: ["1️⃣ Minimum 20 minutes of sit-up"],
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
