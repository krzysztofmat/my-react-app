import Car from "./../Car";
import Garage from "./../Garage";
import Football from "./../Football";
import Goal from "./../Goal";
import GoalAndVersion from "./../GoalAndVersion";
import GoalAndTernary from "./../GoalAndTernary";
import GarageList from "./../GarageList";
import Form from "./../Form";

const myFirstElement = <h1>Hello React!!!</h1>;

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
