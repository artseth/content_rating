function Greeting(props) {
    return(
        <div>
            <h3>Hello: {props.name}</h3>
            <p>You are {props.age} years old this year</p>
        </div>
    )
};

export default Greeting;