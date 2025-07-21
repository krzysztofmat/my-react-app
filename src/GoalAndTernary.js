import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

function GoalAndTernary(props)
{
    const isGoal = props?.isGoal ?? false;

    return (
    <>
        <h2>Goal and Ternary</h2>
        {isGoal ? <MadeGoal /> : <MissedGoal />}
    </>
    );    
}

export default GoalAndTernary;