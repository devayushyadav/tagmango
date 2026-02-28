import { NavLink, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { WorkoutPlanMenuBar } from "../../Styles/PageWrapper";
import { useDeviceType } from "../../../../hooks/useMediaQuery";
import CheckIcon from "../../../../assets/images/greenCheck.svg";
import LockLight from "../../../../assets/images/lightmodesvgs/lock.svg";
import LockDark from "../../../../assets/images/darkmodesvgs/lock.svg";
import { useTheme } from "../../../../context/ThemeContext";
import bgImage from "../../../../assets/images/menu-bg.svg";

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Menubar = () => {
  const { day } = useParams();
  const [isSmallDevice] = useDeviceType();
  const { theme } = useTheme();
  const activeRef = useRef(null);

  const lockIcon = theme === "light" ? LockLight : LockDark;

  const currentDay = parseInt(day, 10);

  useEffect(() => {
    if (activeRef.current && isSmallDevice) {
      activeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [day, isSmallDevice]);

  return (
    <WorkoutPlanMenuBar>
      {!isSmallDevice && (
        <img src={bgImage} alt="Menu Background" className="menu-bg" />
      )}
      <div className="navigation-links-container">
        {pages.map((page) => (
          <NavLink
            to={`/9-day-workout-plan/${page}`}
            key={page}
            ref={currentDay === page ? activeRef : null}
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
                {currentDay < page && <img src={lockIcon} alt="Locked" />}
              </>
            ) : (
              <>
                <span>Day - {page}</span>
                {currentDay >= page ? (
                  <img src={CheckIcon} alt="Completed" />
                ) : (
                  <img src={lockIcon} alt="Locked" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </WorkoutPlanMenuBar>
  );
};

export default Menubar;
