import { useState } from "react";

function UseContextExample1()
{
    const [user, setUser] = useState("Julian Hall");

    return (
        <>
        <h1>{`Hello ${user}!`}</h1>
        <UseContextExample12 user={user}/>
        </>
    );
}

function UseContextExample12({user})
{
    return (
        <>
        <h1>UseContextExample1-2</h1>
        <UseContextExample13 user={user}/>
        </>
    );
}

function UseContextExample13({user})
{
    return (
        <>
        <h1>UseContextExample1-3</h1>
        <UseContextExample14 user={user}/>
        </>
    );
}

function UseContextExample14({user})
{
    return (
        <>
        <h1>UseContextExample1-4</h1>
        <UseContextExample15 user={user}/>
        </>
    );
}

function UseContextExample15({user})
{
    return (
        <>
        <h1>UseContextExample1-4</h1>
        <h2>{`Hello ${user} again`}</h2>
        </>
    );
}

export default UseContextExample1;