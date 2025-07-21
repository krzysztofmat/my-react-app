import MadeGoal from "./MadeGoal";

function GoalAndVersion(props)
{
    const isGoal = props?.isGoal ?? false;

    return (
    <>
        <h2>Goal and Version</h2>
        {isGoal && <MadeGoal />}
    </>
    );    
}

export default GoalAndVersion;