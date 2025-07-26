import { createContext, useContext, useState } from "react";

const UserContext = createContext()

function UseContextExample2()
{
    const [user, setUser] = useState("Julian Hall 2");

    return (
        <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <UseContextExample22/>
        </UserContext.Provider>
    );
}

function UseContextExample22()
{
    return (
        <>
        <h1>UseContextExample2-2</h1>
        <UseContextExample23/>
        </>
    );
}

function UseContextExample23()
{
    return (
        <>
        <h1>UseContextExample2-3</h1>
        <UseContextExample24/>
        </>
    );
}

function UseContextExample24()
{
    return (
        <>
        <h1>UseContextExample2-4</h1>
        <UseContextExample25 />
        </>
    );
}

function UseContextExample25()
{
    const user = useContext(UserContext);
    
    return (
        <>
        <h1>UseContextExample2-5</h1>
        <h2>{`Hello ${user} again`}</h2>
        </>
    );
}

export default UseContextExample2;