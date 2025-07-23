import Car from "./../Car";
import Garage from "./../Garage";
import Football from "./../Football";
import Goal from "./../Goal";
import GoalAndVersion from "./../GoalAndVersion";
import GoalAndTernary from "./../GoalAndTernary";
import GarageList from "./../GarageList";
import Form from "./../Form";
import TodosWrapperProblematic from "../TodosWrapperProblematic";
import TodosWrapper from "../TodosWrapper";

const myFirstElement = <h1>Hello React!!!</h1>;

const Home = () => {
  return (
    <div style={{ "padding-bottom": '10rem' }}>
      <h1>Home</h1>
      {myFirstElement}
      <Car />
      <Garage />
      <Football />
      <Goal />
      <Goal isGoal={true} />
      <GoalAndVersion isGoal={true} />
      <GoalAndTernary />
      <GarageList />
      <Form />
      <TodosWrapperProblematic />
      <TodosWrapper />
    </div>
  );
};

export default Home;
