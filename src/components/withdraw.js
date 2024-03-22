import React, { useState, useContext } from "react";
import { UserContext } from "./context";
// import "./withdraw.css";

function Withdraw() {
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const ctx = useContext(UserContext);
    let activeUser = ctx.activeUser;

    // onclick update balance in user context
    function makeWithdraw() {
        if (!activeUser) {
            alert("Please log in to make a withdrawal.");
            return;
        }

        if (0 < withdrawAmount && withdrawAmount <= activeUser.balance) {
            activeUser.balance -= withdrawAmount;
            alert("The withdrawal was processed.");
            setWithdrawAmount(0);
            document.getElementById("withdraw").value = "";
        } else if (0 > withdrawAmount) {
            alert("Enter a positive number.");
        } else {
            alert("Insufficient funds.");
        }
    }

    return (
        <div
            className="withdraw-container"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                maxWidth: "100vw", // Adjusted maxWidth to fit the viewport width
                backgroundImage: `url('https://wallpaperbat.com/img/359285-open-banking-psd2-gt-software-gt-software.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "80px",
                margin: "0",
                position: "relative",
            }}
        >
            <div
                style={{
                    width: "500px",
                    padding: "20px",
                    borderRadius: "10px",
                    boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
                    animation: "glow 1.5s infinite alternate",
                    backgroundImage: "url('https://i.pinimg.com/736x/15/3a/45/153a4535df6cf2d2b106a558b750c486.jpg')", 
                    backgroundColor: "rgba(255, 255, 255, 0.8)", // Added a semi-transparent white background
                }}
            >
                {activeUser ? (
                    <>
                        <h2>Withdraw</h2>
                        <p>Account Balance: ${activeUser.balance}</p>
                        <label htmlFor="withdraw">Withdraw Amount</label>
                        <br />
                        <input
                            type="number"
                            className="form-control"
                            id="withdraw"
                            placeholder="Enter amount"
                            onChange={(e) =>
                                setWithdrawAmount(
                                    Number(e.currentTarget.value)
                                )
                            }
                        />
                        <br />
                        <button
                            type="submit"
                            className="btn btn-light"
                            onClick={makeWithdraw}
                            disabled={withdrawAmount ? false : true}
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
                                (e.target.style.backgroundColor = "#007bff")
                            }
                        >
                            Withdraw
                        </button>
                    </>
                ) : (
                    <p>Please log in to make a withdrawal.</p>
                )}
            </div>
        </div>
    );
}

export default Withdraw;
