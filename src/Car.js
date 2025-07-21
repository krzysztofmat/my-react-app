function Car(props) {
    return <h2>I am a {props?.brand?.model ?? 'Unknown'}</h2>
}

export default Car;