import React, { Component } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PageviewIcon from "@material-ui/icons/Pageview";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import { setCurrentComponent } from "../../actions/componentActions";
import { connect } from "react-redux";
import FillKra from "../fillkra";
import Myprofile from "../myprofile";
import ViewKra from "../viewkra";
import ViewUsers from "../viewUser";
import { viewUsers } from "../../actions/viewUser";

import LockOpenIcon from "@material-ui/icons/LockOpen";
import AssessmentIcon from "@material-ui/icons/Assessment";
import Chart from "../graph";
import Divider from "@material-ui/core/Divider";

class ManagerFeatures extends Component {
  state = { disabled: false, flag: false };

  check = () => {
    this.setState({ disabled: true });
  };
  render() {
    return (
      <div>
        <br />

        <ListItem
          button
          onClick={() => {
            this.props.changeComponent(<ViewUsers />);
          }}
        >
          <ListItemIcon>
            <LockOpenIcon />
          </ListItemIcon>
          <ListItemText primary="Switch to Official" />
        </ListItem>
        <br />
        <Divider />
        <br />

        <ListItem
          button
          onClick={() => {
            this.props.changeComponent(<Myprofile />);
          }}
        >
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            this.props.changeComponent(<Chart />);
          }}
        >
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Performance" />
        </ListItem>

        <ListItem
          disabled={this.state.disabled}
          button
          onClick={() => {
            this.props.changeComponent(<FillKra check={this.check} />);
          }}
        >
          <ListItemIcon>
            <InsertCommentIcon />
          </ListItemIcon>
          <ListItemText primary="Fill KRA" />
        </ListItem>

        <ListItem
          button
          onClick={() => {
            this.props.changeComponent(<ViewKra />);
          }}
        >
          <ListItemIcon>
            <PageviewIcon />
          </ListItemIcon>
          <ListItemText primary="All KRA" />
        </ListItem>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    myteam: state.myteam.myteam,
    kraStatus: state.auth.user.userdata.filledKra
  };
};

export default connect(mapStateToProps, { setCurrentComponent, viewUsers })(
  ManagerFeatures
);
