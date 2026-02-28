import { NavLink, useParams } from "react-router-dom";
import { WorkoutPlanMenuBar } from "../../Styles/PageWrapper";
import { useDeviceType } from "../../../../hooks/useMediaQuery";
import CheckIcon from "../../../../assets/images/greenCheck.svg";
import LockIcon from "../../../../assets/images/lock.svg";

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Menubar = () => {
  const { day } = useParams();
  const [isSmallDevice] = useDeviceType();

  const currentDay = parseInt(day, 10);

  return (
    <WorkoutPlanMenuBar>
      {pages.map((page) => (
        <NavLink
          to={`/9-day-workout-plan/${page}`}
          key={page}
          className="menu-link"
          activeClassName="active-link"
        >
          <span>{isSmallDevice ? `Day ${page}` : `Day - ${page}`}</span>

          {currentDay >= page ? (
            <img src={CheckIcon} alt="Completed" />
          ) : (
            <img src={LockIcon} alt="Locked" />
          )}
        </NavLink>
      ))}
    </WorkoutPlanMenuBar>
  );
};

export default Menubar;
