import { useParams } from "react-router-dom";
import PageBar from "../../components/shared/PageBar/PageBar";
import { WorkoutPlanPageWrapper, WorkoutPlanWrapper } from "./Styles/PageWrapper";
import PageContent from "./components/PageContent/PageContent";
import Menubar from "./components/Menubar/Menubar";

const NineDaysWorkoutPlan = () => {
    const { day } = useParams();

    const handleBack = () => {
        window.history.back();
    };

    const dayNumber = parseInt(day, 10);
    const isValidDay = !isNaN(dayNumber) && dayNumber >= 1 && dayNumber <= 9;


    return (
        <>
            <PageBar
                onBack={handleBack}
                backLabel="Back"
                rightTitle="9-Day Fitness Challenge"
                leftTitle={`Day ${day} of 9`}
                showInfo
            />
            <WorkoutPlanPageWrapper>

                {isValidDay ? (
                    <WorkoutPlanWrapper>
                        <Menubar />
                        <PageContent />
                    </WorkoutPlanWrapper>
                ) : (
                    <div>
                        <h2>Invalid Day</h2>
                        <p>Please select a day between 1 and 9.</p>
                    </div>
                )}

            </WorkoutPlanPageWrapper>

        </>
    );
};

export default NineDaysWorkoutPlan;