import { useEffect, useState } from "react";

const User = ({name, location}) => {
    // const {name, location} = props;

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("setinterval");
        },1000)

        return ()=>{
            clearInterval(timer)
        }
    }, [])

    return  (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h1>Count = {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Twitter Handle</h4>
        </div>
    )
};
export default User;