import React, { Component } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { withRouter } from "react-router-dom";

export class logout extends Component {
  componentDidMount = async () => {
    await AsyncStorage.removeItem("@user_token");
    await AsyncStorage.removeItem("@user_id");
    this.props.history.push("/login");
  };

  render() {
    return <></>;
  }
}

export default withRouter(logout);