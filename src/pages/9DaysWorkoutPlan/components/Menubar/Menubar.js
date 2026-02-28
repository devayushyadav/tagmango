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
          className={({ isActive }) =>
            isActive ? "menu-link active-link" : "menu-link"
          }
        >
          {isSmallDevice ? (
            <>
              <span>Day {currentDay < page ? page : ""}</span>
              {currentDay === page && (
                <span className="current-day">{currentDay}</span>
              )}
              {currentDay > page && <img src={CheckIcon} alt="Completed" />}
              {currentDay < page && <img src={LockIcon} alt="Locked" />}
            </>
          ) : (
            <>
              <span>Day - {page}</span>
              {currentDay >= page ? (
                <img src={CheckIcon} alt="Completed" />
              ) : (
                <img src={LockIcon} alt="Locked" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </WorkoutPlanMenuBar>
  );
};

export default Menubar;
