import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Header } from "semantic-ui-react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Avatar, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { getLeaveRequest ,actionleaves} from "../actions/leaveRequests";
import Moment from "react-moment";

const columns = [
    { id: "_id", label: "Employee Code", minWidth: 100 },
    {
        id: "name",
        label: "Name",
        minWidth: 100,
        align: "left"
    },
    {
        id: "fromDate",
        label: "From Date",
        minWidth: 100,
        align: "left"
    },
    {
        id: "toDate",
        label: "To Date",
        minWidth: 100,
        align: "left"
    },
    {
        id: "leavetype",
        label: "Leave Type",
        minWidth: 100,
        align: "left"
    },
    {
        id: "reason",
        label: "Reason",
        minWidth: 100,
        align: "left"
    },
    {
        id: "status",
        label: "Approve/Disapprove",
        minWidth: 100,
        align: "left"
    },
    {
        id: "action",
        label: "Action",
        minWidth: 100,
        align: "right"
    }
];
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
const useStyles = makeStyles({
    root: {
        width: "100%"
    },
    tableWrapper: {
        maxHeight: 440,
        overflow: "auto"
    }
});

function LeaveRequests(props) {
    const classes = useStyles();
    const { leaveRequests } = props;
    const [flag, setFlag] = React.useState(false);
    // const [skipvalue, setskipvalue] = React.useState(0);


    if (flag === false) {
        props.getLeaveRequest();
        setFlag(true);
    }

    // const next = () => {
    //     props.viewMyTeam(skipvalue + 2);
    //     setskipvalue(skipvalue + 2);
    // };
    // const prev = () => {
    //     props.viewMyTeam(skipvalue - 2);
    //     setskipvalue(skipvalue - 2);
    // };
    const viewLeaveRequest = (Component, leaveId) => {
        // props.updateKra(sheetId);
        props.setCurrentComponent(Component);
    };

    if (leaveRequests !== null) {
        return (
            <Paper className={classes.root}>
                <Header as="h3" content="LEAVE REQUESTS" style={style.h1} textAlign="center" />
                <div className={classes.tableWrapper}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map(column => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {leaveRequests.leaveRequests.map((leaves, i) => (
                                <TableRow key={i}>
                                    <TableCell>{leaves.userId._id}</TableCell>
                                    <TableCell>{leaves.userId.name}</TableCell>
                                    <TableCell><Moment format="DD/MM/YYYY">{leaves.fromDate}</Moment></TableCell>
                                    <TableCell><Moment format="DD/MM/YYYY">{leaves.toDate}</Moment></TableCell>
                                    <TableCell>{leaves.leaveData.name}</TableCell>
                                    <TableCell>{leaves.reason}</TableCell>
                                    <TableCell>{leaves.Status}</TableCell>
                                    <TableCell align="right">
                                        <Button color="primary" onClick={() =>props.actionleaves({id:leaves._id,value:"Approved"})}>
                                            APPROVE
</Button>
                                        <Button color="secondary" onClick={() => props.actionleaves({ id: leaves._id, value: "Dispproved" })}>
                                            DISAPPROVE
</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* <Button disabled={skipvalue <= 0 ? true : false} onClick={e => prev()}>
                prev
      </Button>
            <Button
                disabled={skipvalue >= props.teamlen - 1 ? true : false}
                onClick={e => next()}
            >
                next
      </Button> */}
            </Paper>
        );
    } else {
        return "";
    }
}
const mapStateToProps = state => {
    console.log(state)
    return {
        leaveRequests: state.leaveRequest
    };
};

export default connect(mapStateToProps, { getLeaveRequest ,actionleaves})(LeaveRequests);