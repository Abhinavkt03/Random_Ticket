import { useState } from "react";
import { generateRandom, sum } from "./GenerateRandom.js"

export default function Ticket() {
    let [ticket, setTicket] = useState([0, 0, 0]);

    let ticketButton = () => {
        setTicket(generateRandom(3));
    }

    let isWinning = sum(ticket) <= 6;
    return (
        <>
            <h3>Buying Ticket</h3>
            <div className="container">
                <div className="ticket" onClick={ticketButton} style={{cursor: "pointer",userSelect: "none"}}>
                    <span>{ticket[0]}</span>
                    <span>{ticket[1]}</span>
                    <span>{ticket[2]}</span>
                </div>
            </div>
            <h3>{isWinning && "Congrats, You Win!"}</h3>
        </>
    )
}