import React, { useContext } from "react";
import { UserContext } from "./context";
// import "./alldata.css";
function AllData(){
    const ctx=useContext(UserContext);

    let users = ctx.users
   

    return(
        <div className="container">
            <h1>All Data</h1>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Balance</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.balance}</td>
                    </tr>
                    ))}
                    </tbody>
                </table>
    </div>
    );
}

export default AllData;