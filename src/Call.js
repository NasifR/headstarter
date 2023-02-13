import { useState } from "react";
import { Button } from "@material-ui/core";
import VideoCall from "./VideoCall";

function Call() {
    const [inCall, setInCall] = useState(false);

    return(
    <div className="Call" style={{ height: "100%" }}>
        <Button 
            variant="contained" 
            color="primary" 
            onClick={() => setInCall(true)}
            >
                Join Call
            </Button>
        { inCall ? <VideoCall setInCall={setInCall} /> : "Waiting to join"}
    </div>
    );
}

export default Call;