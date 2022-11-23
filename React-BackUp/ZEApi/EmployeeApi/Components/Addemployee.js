import React, { Component } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ApiUrl = "http://virtualsolution.adequateshop.com:168";

class Addemployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeName: "",
            employeeSalary: "",
            employeeAddress: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    AddEmployee() {
        if (this.state.employeeName == "" || this.setState.employeeName == undefined) {
            alert("employee Name is required");
        } else if (this.state.employeeSalary == "" || this.setState.employeeSalary == undefined) {
            alert("employee Salary is required");
        } else if (this.state.employeeAddress == "" || this.setState.employeeAddress == undefined) {
            alert("employee Address is required");
        }

        let MeetingToken = Math.floor(Math.random() * 100000000 + 1);
        let body = {
            employeeName: this.state.employeeName,
            employeeSalary: this.state.employeeSalary,
            Address: this.state.employeeAddress
        };

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(body),
        };

        let url = ApiUrl + "/api/Employee/";
        fetch( url, requestOptions)
        .then((response) => {
            return response.json();
        })
        .then((results) => {
            if (results) {
                alert("Added successfully!");
                this.setState({
                    employeeName: "",
                    employeeSalary: "",
                    employeeAddress: ""
                })
            }
        })
        .catch((error) => {
            alert(error)
        });
    }
    
    render() {
        return (
            <div>
                <h1>Add Employee</h1>
                <Link variant="primary" to="/">View Employee list</Link>
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="employeeName">
                                <Form.Label>Employee Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="employeeName"
                                    value={this.state.employeeName}
                                    onChange={this.handleChange}
                                    placeholder="Employee Name" />
                            </Form.Group>
                            <Form.Group controlId="employeeSalary">
                                <Form.Label>Employee Salary</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="employeeSalary"
                                    value={this.state.employeeSalary}
                                    onChange={this.handleChange}
                                    placeholder="Employee Salary" />
                            </Form.Group>
                            <Form.Group controlId="employeeAddress">
                                <Form.Label>Employee Address</Form.Label>
                                <Form.Control
                                    type="address"
                                    name="employeeAddress"
                                    value={this.state.employeeAddress}
                                    onChange={this.handleChange}
                                    placeholder="Address" />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="success" onClick={() => this.AddEmployee()}>Save</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default Addemployee;