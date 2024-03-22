import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "./context";

function Login() {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [showForm, setShowForm] = useState(false); // State to control form visibility
    const ctx = useContext(UserContext);

    useEffect(() => {
        // Delay the form animation on initial render
        const timeout = setTimeout(() => {
            setShowForm(true);
        }, 500);
        return () => clearTimeout(timeout);
    }, []);

    function findUser() {
        let data = ctx.users;
        let matchingUser = data.find(user => loginEmail === user.email && loginPassword === user.password);
        ctx.setActiveUser(matchingUser);
        if (matchingUser === undefined) {
            alert('User not found.');
        };
    }

    const logoutUser = () => {
        ctx.setActiveUser(null);
        setLoginEmail('');
        setLoginPassword('');
    };

    return (
        <div className="login-container" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundImage: `url('https://wallpaperbat.com/img/359285-open-banking-psd2-gt-software-gt-software.jpg')`, // Replace with your image URL
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            {/* Conditionally render form container based on showForm state */}
            {showForm && (
                <div className="form-container" style={formContainerStyle}>
                    <form onSubmit={(e) => { e.preventDefault(); findUser(); }}>
                        {!ctx.activeUser ? (
                            <>
                                <h2>Login</h2>
                                <label htmlFor="email">Email address</label><br />
                                <input type="email" className="form-control" id="email" placeholder="Enter email" value={loginEmail} onChange={e => setLoginEmail(e.currentTarget.value)} /><br />
                                <label htmlFor="password">Password</label><br />
                                <input type="password" className="form-control" id="password" placeholder="Enter password" value={loginPassword} onChange={e => setLoginPassword(e.currentTarget.value)} /><br />
                                <button type="submit" className="btn btn-primary">Login</button>
                            </>
                        ) : (
                            <>
                                <h2>Welcome {ctx.activeUser.name}!</h2><br />
                                <button type="button" className="btn btn-light" onClick={logoutUser}>Logout</button>
                            </>
                        )}
                    </form>
                </div>
            )}
        </div>
    );
}

// Define CSS styles directly in your component
const formContainerStyle = {
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff',
    backgroundImage: "url('https://i.pinimg.com/736x/15/3a/45/153a4535df6cf2d2b106a558b750c486.jpg')", 
    animation: 'glow 1.5s infinite alternate', // Apply glowing animation using keyframes
    maxWidth: '400px', // Reduce container size
    width: '100%', // Take full width of the parent container
    margin: '0 auto', // Center align horizontally
};

// Define CSS keyframes as a string
const keyframes = `
    @keyframes glow {
        from {
            box-shadow: 0 0 10px rgba(0, 255, 0, 0.5); /* Start with a green glow */
        }
        to {
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.8); /* Transition to a brighter green glow */
        }
    }
`;

// Inject keyframes into the global style tag
const styleTag = document.createElement('style');
styleTag.type = 'text/css';
styleTag.appendChild(document.createTextNode(keyframes));
document.head.appendChild(styleTag);

export default Login;
