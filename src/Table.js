import React, { useState } from "react"
import './Table.css'
import data from "./mock-data.json";

const Table = () =>  {
    const [contacts, setCoontacts] = useState(data);
    return (
        <div className='app-container' >
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th> Last Name</th>
                        <th>Date Of Birth</th>
                        <th>Question & Answer</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>State You Live In</th>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>Eye Color</th>
                        <th>Natural Hair Color</th>
                        <th>Measurment</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contacts)=> (
                         <tr>
                         <td>{contacts.FirstName}</td>
                         <td>{contacts.LastName}</td>
                         <td>{contacts.DateOfBirth}</td>
                         <td>{contacts.QuestionandAnswer}</td>
                         <td>{contacts.Email}</td>
                         <td>{contacts.PhoneNumber}</td>
                         <td>{contacts.stateyoulivein}</td>
                         <td>{contacts.Height}</td>
                         <td>{contacts.weight}</td>
                         <td>{contacts.eyecolor}</td>
                         <td>{contacts.naturalhaircolor}</td>
                         <td>{contacts.measurment}</td>
                         <td>{contacts.Description}</td>
                     </tr>
                    ) )}
                   
                </tbody>
            </table>
        </div>
    )
}


export default Table;