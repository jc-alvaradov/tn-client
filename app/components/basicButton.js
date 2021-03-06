import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

let globalVar = {};

class Button extends React.Component {
  state = {
    pressed: false
  };

  onBtnFinish = () => {
    this.setState({ pressed: false });
  };

  pressBtn = () => {
    // se pasa un callback para volver a activar el boton si es que es necesario
    if (!this.state.pressed) {
      this.setState({ pressed: true }, () =>
        this.props.onTouch(this.onBtnFinish)
      );
    }
  };

  render() {
    let style, textColor;
    switch (this.props.btnStyle) {
      case "default":
        style = styles.default;
        textColor = styles.text;
        break;
      case "small":
        style = styles.small;
        textColor = styles.text;
        break;
      case "long":
        style = styles.long;
        textColor = styles.text;
        break;
      case "inline":
        style = styles.inline;
        textColor = styles.inlineText;
        break;
      case "finishedLong": 
        style = styles.finishedLong;
        textColor = styles.text;
        break;
      default:
        style = styles.default;
        textColor = styles.text;
    }

    let icon = null;

    if (this.props.icon) {
      icon = <Icon name={this.props.icon} color="#1ca68a" size={25} />;
    }

    return (
      <TouchableOpacity onPress={this.pressBtn} style={style}>
        <Text style={textColor}>
          {icon} {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    height: 55,
    borderRadius: 50,
    backgroundColor: "#1ca68a",
    marginTop: 20
  },
  small: {
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#1ca68a",
    marginTop: 20
  },
  inline: {
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 50
  },
  long: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 50,
    backgroundColor: "#1ca68a",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  finishedLong: {
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 50,   
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: "#1ca68a",
  }, 
  text: {
    color: "white",
    fontSize: 18
  },
  inlineText: {
    color: "#444444",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default Button;
