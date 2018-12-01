import React from "react";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation";

class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Navigation />
      </React.Fragment>
    );
  }
}

export default LandingPage;
