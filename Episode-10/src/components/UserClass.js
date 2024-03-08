import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("child constructor");
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "Dummy name",
        location: "Default location"
      }
    };
  }

 async componentDidMount(){
    console.log("child componentDidMount");
    const data = await fetch (
        "https://api.github.com/users/DHRUV208"
        );
        const jsonData = await data.json();
        this.setState({
            userInfo: jsonData
        })
        console.log(jsonData);
}

componentDidUpdate(){
    console.log("componentDidUpdate");
}
componentWillUnmount(){
    console.log("unmounting");
}

  render() {
    console.log("child render");
    const { name1, location1 } = this.props;
    const { count, count2, name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Class Based</h1>
        <h2>Count : {count}</h2>
        <h2>Count : {count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
              count2: count2 +2
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Twitter Handle</h4>
      </div>
    );
  }
}

export default UserClass;
