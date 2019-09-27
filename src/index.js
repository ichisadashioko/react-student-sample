import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';
import { RIEToggle, RIEInput, RIETextArea, RIENumber, RIETags, RIESelect } from 'riek';
import validator from 'validator';

if (localStorage.getItem('studentData')) {
    localStorage.setItem('studentData', JSON.stringify([
        { id: 4, firstName: 'Segars', lastName: 'Retha', age: 21 },
        { id: 5, firstName: 'Wilbert', lastName: 'Fava', age: 20 },
        { id: 6, firstName: 'Marleen', lastName: 'Rusch', age: 16 },
        { id: 7, firstName: 'Kennith', lastName: 'Rusch', age: 15 },
        { id: 8, firstName: 'Larea', lastName: 'Griffery', age: 18 },
        { id: 0, firstName: 'Patrick', lastName: 'Escudero', age: 20 },
        { id: 1, firstName: 'Loralle', lastName: 'Amaker', age: 22 },
        { id: 2, firstName: 'Kennith', lastName: 'Rusch', age: 15 },
        { id: 3, firstName: 'Raisa', lastName: 'Padgett', age: 17 },
    ]));
}

class Student {
    constructor(id, firstName, lastName, age) {
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

class StudentRow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            student: {
                id: props.id,
                firstName: props.firstName,
                lastName: props.lastName,
                age: props.age
            }
        }
    }
    httpChangeCallback() {
        console.log('this:')
        console.log(this)
        console.log('arguments:')
        console.log(arguments)
        console.log(`arguments.length: ${arguments.length}`)
    }
    render() {
        return (
            <tr key={this.state.student.id}>
                <td>{this.state.student.id}</td>
                <td><RIEInput
                    value={this.state.student.firstName}
                    propName='firstName'
                    change={this.httpChangeCallback}
                /></td>
                <td><RIEInput
                    value={this.state.student.lastName}
                    propName='lastName'
                    change={this.httpChangeCallback}
                /></td>
                <td><RIEInput
                    value={this.state.student.age}
                    change={this.httpChangeCallback}
                    propName='age'
                    validate={validator.isNumeric}
                /></td>
                <td>
                    <Button variant="danger" size="sm" block>Delete</Button>
                </td>
            </tr>
        );
    }
}

class StudentTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        let localData = JSON.parse(localStorage.getItem('studentData'));
        for (let i = 0; i < localData.length; i++) {
            let e = localData[i];
            console.log(e)
            this.state.data.push(new Student(
                e.id,
                e.firstName,
                e.lastName,
                e.age,
            ));
        }
        console.log(typeof this.state.data);
        console.log(this.state.data);
    }
    renderTableData() {
        // console.log(i)
        return this.state.data.map((std) => {
            return <StudentRow
                id={std.id}
                firstName={std.firstName}
                lastName={std.lastName}
                age={std.age}
            />
        })
    }
    render() {
        return (
            <Table hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderTableData()}
                </tbody>
            </Table>
        );
    }
}

ReactDOM.render(
    <StudentTable />,
    document.getElementById('root')
)