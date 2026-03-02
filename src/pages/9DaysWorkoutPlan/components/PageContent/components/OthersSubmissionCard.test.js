import { render, screen } from "@testing-library/react";
import OthersSubmissionCard from "./OthersSubmissionCard";

// minimal theme context wrapper since the component uses useTheme
import { ThemeProvider } from "../../../../../context/ThemeContext";

const wrap = (ui) => <ThemeProvider>{ui}</ThemeProvider>;

describe("OthersSubmissionCard", () => {
  const samplePosts = [
    {
      userName: "Pinned User",
      userAvatar: "/avatar1.png",
      time: "1h ago",
      description: "Pinned description",
      isPinned: true,
      checklist: ["a", "b"],
    },
    {
      userName: "Regular User",
      userAvatar: "/avatar2.png",
      time: "2h ago",
      description: "Regular description",
      isPinned: false,
      checklist: ["x"],
    },
  ];

  const othersAvatars = ["/a.png", "/b.png"];

  test("shows pinned indicator only for pinned post", () => {
    render(
      wrap(
        <OthersSubmissionCard
          posts={samplePosts}
          othersAvatars={othersAvatars}
        />,
      ),
    );

    // pinned text should appear once
    const pinText = screen.getByText(/This is a pinned post/);
    expect(pinText).toBeInTheDocument();

    // ensure it doesn't appear a second time
    const allPins = screen.getAllByText(/This is a pinned post/);
    expect(allPins).toHaveLength(1);
  });

  test("renders all descriptions", () => {
    render(
      wrap(
        <OthersSubmissionCard
          posts={samplePosts}
          othersAvatars={othersAvatars}
        />,
      ),
    );
    expect(screen.getByText("Pinned description")).toBeInTheDocument();
    expect(screen.getByText("Regular description")).toBeInTheDocument();
  });
});
