import { useParams } from "react-router-dom";
import PageBar from "../../components/shared/PageBar/PageBar";
import { MobileHeader, WorkoutPlanPageWrapper, WorkoutPlanWrapper } from "./Styles/PageWrapper";
import PageContent from "./components/PageContent/PageContent";
import Menubar from "./components/Menubar/Menubar";
import { useDeviceType } from "../../hooks/useMediaQuery";
import mobileBg from "../../assets/images/menu-bg-mobile.svg";

const NineDaysWorkoutPlan = () => {

    const { day } = useParams();

    const [isSmallDevice] = useDeviceType();

    const handleBack = () => {
        window.history.back();
    };

    const dayNumber = parseInt(day, 10);
    const isValidDay = !isNaN(dayNumber) && dayNumber >= 1 && dayNumber <= 9;


    return (
        <>
            {!isSmallDevice &&
                <PageBar
                    onBack={handleBack}
                    backLabel="Back"
                    rightTitle="9-Day Fitness Challenge"
                    leftTitle={`Day ${day} of 9`}
                    showInfo
                />
            }
            <WorkoutPlanPageWrapper>

                {isValidDay ? (
                    <WorkoutPlanWrapper>
                        {isSmallDevice ?
                            <MobileHeader>
                                <img src={mobileBg} alt="" className="mobile-bg" />
                                <div className="navigation-container">
                                    <PageBar
                                        onBack={handleBack}
                                        backLabel="Back"
                                        rightTitle="9-Day Fitness Challenge"
                                        leftTitle={`Day ${day} of 9`}
                                        showInfo
                                    />
                                    <Menubar />
                                </div>
                            </MobileHeader> :
                            <Menubar />
                        }
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