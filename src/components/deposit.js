import React, { useState, useContext } from "react";
import { UserContext } from "./context";

function Deposit() {
    const [depositAmount, setDepositAmount] = useState();
    const ctx = useContext(UserContext);
    const activeUser = ctx.activeUser;

    function makeDeposit() {
        if (depositAmount >= 0) {
         
            const updatedBalance = activeUser.balance + depositAmount;
            ctx.setActiveUser({ ...activeUser, balance: updatedBalance });
            alert("The deposit was successfully received.");
        } else {
            alert("Deposit values cannot be negative.");
        }
        setDepositAmount();
    }

    return (
        <div
            className="withdraw-container"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                maxWidth: "100vw",
                backgroundImage: `url('https://wallpaperbat.com/img/359285-open-banking-psd2-gt-software-gt-software.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "80px",
                margin: "0",
                position: "relative",
            }}
        >
            <div
                className="login-container"
                style={{
                    position: "absolute",
                    bottom: "300px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "500px",
                    backgroundImage:
                        "url('https://i.pinimg.com/736x/15/3a/45/153a4535df6cf2d2b106a558b750c486.jpg')",
                    backgroundSize: "cover",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
                    animation: "glow 1.5s infinite alternate",
                }}
            >
                <div className="container">
                   
                    <h2>Deposit</h2>
                    <p>Account Balance: ${activeUser ? activeUser.balance : "--"}</p>
                    <label htmlFor="deposit">Deposit Amount</label>
                    <br />
                    <input
                        type="number"
                        className="form-control"
                        id="deposit"
                        placeholder="Enter amount"
                        onChange={(e) =>
                            setDepositAmount(Number(e.currentTarget.value))
                        }
                    />
                    <br />
                    <button
                        type="submit"
                        className="btn btn-light"
                        onClick={makeDeposit}
                        // disabled={depositAmount <= 0}
                        style={{ 
                            backgroundColor: "skyblue",
                            color: "#ffffff",
                            border: "none",
                            padding: "10px 20px",
                            cursor: "pointer",
                        }}
                        onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#0056b3")
                        }
                        onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "skyblue")
                        }
                    >
                        Deposit
                    </button>
                   
                </div>
            </div>
        </div>
    );
}

export default Deposit;
