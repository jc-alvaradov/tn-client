import React from "react";
import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loading from "../components/loading";
import { loadStartScreen, loadHomeScreen } from "../actions/load_screens";

class Loader extends React.Component {
  componentDidMount() {
    // chequear si es que la app esta pagada o no
    this.getAppState();
  }

  getAppState = async () => {
    try {
      const user = await AsyncStorage.getItem("@TNStore:user");
      if (user != null) {
        // user is logged in
        this.props.loadHomeScreen(JSON.parse(user));
      } else {
        // user is not logged in
        this.props.loadStartScreen();
      }
    } catch (error) {
      //console.log("There was an error reading from disk");
    }
  };

  render() {
    return <Loading />;
  }
}

Loader.navigationOptions = {
  header: null
};

mapDispatchToProps = dispatch => {
  return bindActionCreators({ loadStartScreen, loadHomeScreen }, dispatch);
};
export default connect(null, mapDispatchToProps)(Loader);
