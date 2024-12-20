import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
        name:"Dummy",
        location:"Default",
        avatar_url:"abdc.com"
      }
    };
    // console.log("Child constructor");
  };

  async componentDidMount() {
    // console.log("Child ComponentDidMount");
    const data = await fetch("");
    const json = await data.json();

    this.setState({
      userInfo:json,
    });
    console.log(json);
  }

  componentDidUpdate(){
    // and after every subSequent render it is ComponentDiUpdate
    // console.log("ComponentDidUpdate")
  }
  componentWillUnmount(){
    // after first render componentDidMount is called
    // console.log("ComponentWillMount")
  }

  render() {
    console.log("Child Render");

    const {name, location, avatar_url} = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>{name}</h2>
        <h3>Location: { location}</h3>
        <h4>Contact: shri1234@gmail.com</h4>
      </div>)
  }
}

export default UserClass; 