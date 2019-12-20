import React from "react";
import Paper from "@material-ui/core/Paper";
import FormControl from "@material-ui/core/FormControl";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "semantic-ui-react";
import { MDBInput, MDBBadge } from "mdbreact";
import { Button } from "@material-ui/core";
import Chart from "./graph";
import { setCurrentComponent } from "../actions/componentActions";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    overflowX: "auto",
    paddingLeft: theme.spacing(8),
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(4)
  },
  label: {
    fontFamily: "Arial"
  },
  form: {
    width: "40%"
  }
}));
const style = {
  h1: {
    fontFamily: "Times New Roman",
    fontWeight: "bolder"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  }
};

function MyProfile(props) {
  const classes = useStyles();
  const { user } = props;

  // const showGraph = userId => {
  //   props.setCurrentComponent(<Chart />);
  // };
  if (user) {
    return (
      <Paper className={classes.root}>
        {/* <Button
          onClick={() => {
            showGraph(user._id);
          }}
        >
          View Performance
        </Button> */}
        <Header as="h1" content="PROFILE" style={style.h1} textAlign="center" />
        <Header textAlign="center">
          <FormControl className={classes.form}>
            <MDBBadge className={classes.label}>Employee Code</MDBBadge>
            <MDBInput
              disabled
              value={`${user.prefix}${user._id}`}
              name="firstname"
            />

            <MDBBadge className={classes.label}>Name</MDBBadge>
            <MDBInput disabled value={user.name} name="firstname"></MDBInput>

            <MDBBadge className={classes.label}>Gender</MDBBadge>

            <MDBInput disabled value={user.gender} name="gender"></MDBInput>

            <MDBBadge className={classes.label}>Designation</MDBBadge>

            <MDBInput
              disabled
              value={user.designation_id.name}
              name="designation"
            ></MDBInput>

            {user.designation_id.name !== "Admin" ? (
              <>
                <MDBBadge className={classes.label}>Department</MDBBadge>
                <MDBInput
                  disabled
                  value={user.department_id.name}
                  name="designation"
                ></MDBInput>
                <MDBBadge className={classes.label}>Reporting Manager</MDBBadge>
                <MDBInput
                  disabled
                  value={user.reportingManager.name}
                  name="reportingmanager"
                ></MDBInput>{" "}
              </>
            ) : null}
          </FormControl>
        </Header>
      </Paper>
    );
  } else {
    return <div>nodata</div>;
  }
}

const mapStateToProps = state => {
  return { user: state.HRfields.employeeData };
};

export default connect(mapStateToProps, { setCurrentComponent })(MyProfile);
