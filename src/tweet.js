import React, {useState} from "react";
import  {Card} from 'react-bootstrap'

const Tweet=(props)=>{
    const text=props.text
    const date=props.date
    const author=props.author
    const [counter,setCounter]=useState(0)

    const increment=()=>{
        setCounter(counter+1)
    }

    const decrement=()=>{
        if(counter==0){
            setCounter(0)
        }
        else
        setCounter(counter-1)
    }
    return (
    <>
    <Card style={{width:'18rem'}}>
        <Card.Body>
            <Card.title>{author}</Card.title>
            <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        
        <Card.Text>{text}</Card.Text>
        </Card.Body>
    </Card>
    {/* <h3>{props.text.toUpperCase()}</h3>
    <h6>By:{props.author} dated: {props.date}</h6>
    <h3>{counter}</h3>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button> */}

    </>
    
    
    
    );
}

export default Tweet;