import { useState, useEffect } from "react";
import Sawo from "sawo";
import "./Newlogin.css"


const API_KEY = process.env.REACT_APP_API_KEY;

const Newlogin = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [payload, setPayload] = useState({});

  useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: API_KEY,
      onSuccess: (payload) => {
        console.log("Payload : " + JSON.stringify(payload));
        setUserLoggedIn(true);
        setPayload(payload);
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  return (
    <div className="containerStyle">
      <section>
        <h2 className="title">Login now :) using sawo authentication</h2>
        <h2 className="title">User Logged In : {isUserLoggedIn.toString()}</h2>

        {!isUserLoggedIn ? (
          <div className="formContainer" id="sawo-container"></div>
        ) : (
          <div className="loggedin">
            <h2>User Successfully Login</h2>
            <div>UserId: {payload.user_id}</div>
            <div>Verification Token: {payload.verification_token}</div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Newlogin;