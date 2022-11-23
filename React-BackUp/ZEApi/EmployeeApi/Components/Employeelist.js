import React, { Component } from "react";
import { Table, Button, Alert} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ApiUrl = "http://virtualsolution.adequateshop.com:168"

class Employeelist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            IsApiError: false
        }
    }

    componentDidMount() {
        fetch(ApiUrl + "/api/Employee/")
        .then( response => response.json())
        .then((result) => {
            this.setState({
                employees: result
            });
        }, (error) => {
            this.setState({ IsApiError: true});
        })
    }
    deleteEmployee(EmpId) {
        const { employees } = this.state;
        const apiUrl = ApiUrl +"/api/Employee?id="+EmpId

        fetch(apiUrl, {method: "DELETE"})
        .then(async response => {
            const data = await response.json();
            // check for error response
            if (!response.ok) {
                //get error message fron body or default tp response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            this.setState({
                employees: employees.filter(employee => employee.Id !== EmpId)
            });
            alert("Delete successful");
        })
        .catch(error => {
            alert("There was an error!");
            console.error("There was an error!",error);
        });
    }
        render() {
            var employeeslist = this.state.employees;
            if(employeeslist && employeeslist.length > 0 ) {
                return (<div>
                    <h2>Employees List</h2>
                    <Link variant="primary" to="/addemployee">Add Employee</Link>
                    <Table className="table">
                        <thead>
                            <tr>
                                <th>EmpID</th>
                                <th>Name</th>
                                <th>Salary</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeeslist.map(emp => (
                                <tr key={emp.Id}>
                                    <td>{emp.Id}</td>
                                    <td>{emp.EmployeeName}</td>
                                    <td>{emp.EmployeeSalary}</td>
                                    <td>{emp.Address}</td>
                                    <td>
                                        <Link variant="info" to={"/editemployee/"+emp.Id}>Edit</Link>
                                        {this.state.response.message && <Alert variant="info">{this.state.response.message}</Alert>}
                                        <Button variant="danger" onClick={() => this.deleteEmployee(emp.Id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>)
            }
            else {
                return (<div>No Record Found</div>)
            }
    }
}
export default Employeelist;