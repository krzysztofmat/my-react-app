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
import FavouriteColor from "../FavouriteColor";

const myFirstElement = <h1>Hello React!!!</h1>;

const Home = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  
  return (
    <div style={{ paddingBottom: "10rem" }}>
      <h1 style={{color: "red", backgroundColor: "lightblue"}}>Home</h1>
      <h2 style={myStyle}>SubHome</h2>
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
      <FavouriteColor />
    </div>
  );
};

export default Home;
