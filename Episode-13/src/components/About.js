import User from "./User"
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {

    constructor(props){
        super(props);
        console.log("Parent Constructor")
    }
    componentDidMount(){
        console.log("parent componentDidMount");
    }
    render(){
        console.log("Parent RENDER")
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Course</h2>
                {/* <User name={"Akshay Saini (function)"} location={"Gurugram, India"} /> */}
    
                <UserClass name={"Akshay Saini (class)"} location={"Gurugram, India"}/>
                <UserClass name={"Dhruv Mehta (class)"} location={"Gurugram, India"}/>
            </div>
        )
    }
    
};

export default About;