import React from "react";

class Userclass1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Fetching...",
        location: "Fetching...",
        contact: "Fetching...",
      },
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("https://api.github.com/users/vashu-aggarwal");
      const json = await response.json();
      this.setState({
        userInfo: {
          name: json.name || "Vashu Aggarwal",
          location: json.location || "India",
          contact: json.email || "vashu@gmail.com",
        },
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
      this.setState({
        userInfo: {
          name: "Error fetching name",
          location: "Error fetching location",
          contact: "Error fetching contact",
        },
      });
    }
  }

  render() {
    const { name, location, contact } = this.state.userInfo;
    return (
      <div style={{ marginTop: "20px", border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
        <h3>Developer Details:</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Contact:</strong> {contact}</p>
      </div>
    );
  }
}

export default Userclass1;
