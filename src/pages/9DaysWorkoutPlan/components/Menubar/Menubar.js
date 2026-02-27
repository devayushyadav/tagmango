import { NavLink } from "react-router-dom";
import { WorkoutPlanMenuBar } from "../../Styles/PageWrapper";

const pages = [1,2,3,4,5,6,7,8,9]

const Menubar = () => {
    return (
        <WorkoutPlanMenuBar>
            {pages.map((page) => (
                <NavLink to={`/9-day-workout-plan/${page}`} key={page}>
                    <span>Day - {page}</span>
                </NavLink>
            ))}
        </WorkoutPlanMenuBar>
    );
};

export default Menubar;