import React, {Component} from "react";
import {FormGroup, FormControl, ControlLabel, Row, Col,Checkbox, Grid} from "react-bootstrap";
import DateHelper from "../../services/DateHelper"

export default class General extends Component{
    constructor(props){
        super(props);
        this.state = {...props};
    }

    componentWillReceiveProps(props) {
        this.setState({ acc: props.acc });
      }

    render(){
        const {acc} = this.state;
        const updateDate = DateHelper.format(acc.lastUpdate)
        const createDate = DateHelper.format(acc.createDate)
        const activityDate = DateHelper.format(acc.lastPosnActivity)

        return(
            <Grid>
                <Row>
                    <Col md={12}>
                    <FormGroup>
                            <ControlLabel>Account</ControlLabel>
                            <FormControl type="text" value={acc.acc} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                    <FormGroup>
                            <ControlLabel>Short Name</ControlLabel>
                            <FormControl type="text" value={acc.accName} />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <FormGroup>
                            <ControlLabel>Status</ControlLabel>
                            <FormControl type="text" value={acc.accStat.codeDesc} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Account Type</ControlLabel>
                            <FormControl type="text" value={acc.accType.accType} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Currency</ControlLabel>
                            <FormControl type="text" value={acc.cur.cur} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Currency Conversion</ControlLabel>
                            <FormControl type="text" value={acc.curConv == 0 ? "No":"Yes"} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Risk Profile</ControlLabel>
                            <FormControl type="text" value={acc.riskProfile.profileDesc} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Adviser Group</ControlLabel>
                            <FormControl type="text" value={acc.advisors.length == 1 ? acc.advisors[0].grpName : ""} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Associated Group</ControlLabel>
                            <FormControl type="text" value={acc.associateds.length == 1 ? acc.associateds[0].grpName : ""} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Coporate</ControlLabel>
                            <FormControl type="text" value={acc.corporate.corpName} />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                            <ControlLabel>Company No</ControlLabel>
                            <FormControl type="text" value={acc.companyNum} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>ABN</ControlLabel>
                            <FormControl type="text" value={acc.abn} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Staff</ControlLabel>
                            <FormControl type="text" value={acc.staff ? "Yes":"No"} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Account opened on</ControlLabel>
                            <FormControl type="date" value={createDate} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Account details last updated on</ControlLabel>
                            <FormControl type="date" value={updateDate} />
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Last positions activity occured on</ControlLabel>
                            <FormControl type={activityDate == "" ? "text": "date"} value={activityDate} />
                        </FormGroup>
                    </Col>
                </Row>
            </Grid>
        )
    }
}