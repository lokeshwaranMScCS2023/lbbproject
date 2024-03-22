import React, { useState, useContext } from "react";
import { UserContext } from "./context";

function CreateAccount() {
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);

    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label + ' required');
            setTimeout(() => setStatus(''), 3000);
            return false; // Removed the extra backtick here
        }
        if (field === password && field.length < 8) {
            alert('Password must be 8 or more characters long');
            return false;
        }
        if (field === email) {
            var emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if (field.match(emailFormat)) {
                return true;
            } else {
                alert('Enter a valid email address');
                return false;
            }
        }
        return true;
    }

    function handleCreate() {
        if (!validate(name, 'name')) return;
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        ctx.setUsers((existingState) => [
            ...existingState,
            { name, email, password, balance: 0 },
        ]);
        alert('Successfully created account!');
        setShow(false);
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    function handleNameChange(event) {
        const inputValue = event.currentTarget.value.replace(/[^a-zA-Z]/g, ''); // Only allow alphabets
        setName(inputValue);
        if (event.currentTarget.value.match(/[0-9]/)) {
            setStatus('Name can only contain alphabets');
        } else {
            setStatus('');
        }
    }

    return (
        <div className="container" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            maxWidth: "500vh",
            backgroundImage: `url('https://wallpaperbat.com/img/359285-open-banking-psd2-gt-software-gt-software.jpg')`, // Replace with your image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "80px",
            margin: "0",
            position: "relative", 
        }}>
            <div className="card" style={{
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
                animation: 'glow 1.5s infinite alternate',
                maxWidth: '400px',
                width: '100%',
                backgroundImage: "url('https://i.pinimg.com/736x/15/3a/45/153a4535df6cf2d2b106a558b750c486.jpg')",
                margin: '0 auto',
            }}>
                <div className="card-body">
                    <h5 className="card-title">Create Account</h5>
                    {show ? (
                        <>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={handleNameChange} />
                                {status && <div className="error" style={{ color: 'red' }}>{status}</div>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={handleCreate} disabled={name || email || password ? false : true}>Create Account</button>
                        </>
                    ) : (
                        <>
                            <h5>Success</h5>
                            <button type="submit" className="btn btn-primary" onClick={clearForm}>Add another account</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CreateAccount;
