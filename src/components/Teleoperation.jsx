import React, { Component } from "react";
import { Joystick } from "react-joystick-component";
import {Button} from 'react-bootstrap';
import Config from "../scripts/config";


class Teleoperation extends Component {
  state = {ros: null} // this ros is redundant. Look into using redux to share states between this component and Connection component 
  constructor() {
    super();
    this.init_connection();

    this.handleClick = this.handleClick.bind(this)
  }

  init_connection() {
    this.state.ros = new window.ROSLIB.Ros();
    console.log(this.state.ros);

    this.state.ros.on("connection", () => {
      console.log("connection established");
      console.log(this.state.ros)
      this.setState({ connected: true });
    });

    this.state.ros.on("close", () => {
      console.log("connection closed");
      this.setState({ connected: false });

      // try to reconnect every 3 seconds
      setTimeout(() => {
        try {
          this.state.ros.connect(
            "ws://" +
              Config.ROSBRIDGE_SERVER_IP +
              ":" +
              Config.ROSBRIDGE_SERVER_PORT
          );
        } catch (error) {
          console.log("connection problem");
        }
      }, Config.RECONNECTION_TIMER);
    });

    try {
      this.state.ros.connect(
        "ws://" +
          Config.ROSBRIDGE_SERVER_IP +
          ":" +
          Config.ROSBRIDGE_SERVER_PORT
      );
    } catch (error) {
      console.log("connection problem");
    }
  }

  handleClick () {
    console.log("handling click");
    // we need to create a ROS publisher on the topic of cmd_vel
    var cmd_vel = new window.ROSLIB.Topic({
        ros: this.state.ros,
        name: Config.CMD_VEL_TOPIC, // THIS NAME DEPENDS ON running `rostopic list` in ubuntu terminal
        messageType: "charon2/custom.msg"
    });

    // we need to create a twist message to be published to rosbridge
    var twist = new window.ROSLIB.Message({
      'steps': 400,
      'dir': 1,
      'speed': 30,
    });

    // we need to publish the message on the cmd_vel message  
    // Error: unable to import cus
    cmd_vel.publish(twist);
  }


  render() {
    return (
      <div>
         {/* <Joystick
        //   size={100}
        // //   sticky={true}
        //   baseColor="#EEEEEE"
        //   stickColor="#BBBBBB"
        //   move={this.handleMove}
        //   stop={this.handleStop}
        // ></Joystick> */}
        <Button onClick={this.handleClick}>
          Click me!
        </Button>
      </div>
    );
  }
}
 
export default Teleoperation;
