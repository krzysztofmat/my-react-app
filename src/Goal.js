import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

function Goal(props)
{
    const isGoal = props?.isGoal ?? false;

    if (isGoal) {
        return <MadeGoal />
    }

    return <MissedGoal />
}

export default Goal;