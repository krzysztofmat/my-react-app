function Football()
{
    const shoot = (name, event) => {
        alert(name);
        alert(event.type);
    };

    const simpleShot = () => {
        alert('Simple goal!');
    };

    return (
    <>
        <button onClick={simpleShot}>Simple Shot</button>
        <button onClick={(event) => shoot('Goal!', event)}>Take a shot!</button>
    </>
    );
}

export default Football;