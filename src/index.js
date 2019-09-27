import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';

// class Student {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
// }

// new Student('Kennith', 'Rusch', 15),
// new Student('Raisa', 'Padgett', 17),
// new Student('Segars', 'Retha', 21),
// new Student('Wilbert', 'Fava', 20),
// new Student('Marleen', 'Rusch', 16),
// new Student('Kennith', 'Rusch', 15),
// new Student('Larea', 'Griffery', 18),
// new Student('Patrick', 'Escudero', 20),
// new Student('Loralle', 'Amaker', 22),
// { firstName: 'Kennith', lastName: 'Rusch', age: 15 },
// { firstName: 'Raisa', lastName: 'Padgett', age: 17 },
// { firstName: 'Segars', lastName: 'Retha', age: 21 },
// { firstName: 'Wilbert', lastName: 'Fava', age: 20 },
// { firstName: 'Marleen', lastName: 'Rusch', age: 16 },
// { firstName: 'Kennith', lastName: 'Rusch', age: 15 },
// { firstName: 'Larea', lastName: 'Griffery', age: 18 },
// { firstName: 'Patrick', lastName: 'Escudero', age: 20 },
// { firstName: 'Loralle', lastName: 'Amaker', age: 22 },

if (!localStorage.getItem('studentData')) {
    localStorage.setItem('studentData', JSON.stringify([
        { firstName: 'Patrick', lastName: 'Escudero', age: 20 },
        { firstName: 'Loralle', lastName: 'Amaker', age: 22 },
        { firstName: 'Kennith', lastName: 'Rusch', age: 15 },
        { firstName: 'Raisa', lastName: 'Padgett', age: 17 },
        { firstName: 'Segars', lastName: 'Retha', age: 21 },
        { firstName: 'Wilbert', lastName: 'Fava', age: 20 },
        { firstName: 'Marleen', lastName: 'Rusch', age: 16 },
        { firstName: 'Kennith', lastName: 'Rusch', age: 15 },
        { firstName: 'Larea', lastName: 'Griffery', age: 18 },
    ]));
}

class StudentTable extends React.Component {
    constructor(props) {
        super(props);
        this.data = JSON.parse(localStorage.getItem('studentData'));
        console.log(typeof this.data)
        console.log(this.data)
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
                    </tr>
                </thead>
                <tbody>
                    {this.data.map((value, index) => {
                        return (
                            <tr>
                                <td>{index}</td>
                                <td>{value.firstName}</td>
                                <td>{value.lastName}</td>
                                <td>{value.age}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }
}

ReactDOM.render(
    <StudentTable />,
    document.getElementById('root')
)