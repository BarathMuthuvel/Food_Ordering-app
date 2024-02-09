import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
        company: "",
      },
    };
  }

  async componentDidMount() {
    const userData = await fetch("https://api.github.com/users/BarathMuthuvel");
    const jsonData = await userData.json();
    this.setState({
      userInfo: jsonData,
    });
    console.log(jsonData);
  }

  render() {
    const { name, location, company } = this.state.userInfo;
    return (
      <div className="user-class">
        <h3>Name : {name}</h3>
        <h3>Location : {location}</h3>
        <h3>Company : {company}</h3>
      </div>
    );
  }
}

export default UserClass;
