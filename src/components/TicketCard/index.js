import { Card } from "@mui/material";
import "./index.css";

export default function TicketCard({ content, issuedBy }) {
  return (
    <div className="ticket-container">
      <Card className="ticket-card" style={{backgroundColor : "pink" }}>
        <div className="ticket-content">
          <span className="issued-task">
            {(content = "Before React 16.8, Class components were the only way to track state and lifecycle on a React component. Function components were considered")}
          </span>
          <div className="assigner">{(issuedBy = "some developer")}</div>
        </div>
      </Card>
    </div>
  );
}
