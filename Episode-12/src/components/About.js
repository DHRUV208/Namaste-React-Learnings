import User from "./User"
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

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
                <div>
                    LoggedIn User 
                    <UserContext.Consumer>
                        {({loggedInUser})=>{
                            console.log("data in about", loggedInUser);
                          return <h1 className="text-xl font-bold"> {loggedInUser} </h1>;
                        }}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Course</h2>
                {/* <User name={"Akshay Saini (function)"} location={"Gurugram, India"} /> */}
    
                <UserClass name={"Akshay Saini (class)"} location={"Gurugram, India"}/>
                <UserClass name={"Dhruv Mehta (class)"} location={"Gurugram, India"}/>
            </div>
        )
    }
    
};

export default About;