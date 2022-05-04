import "./login.css";

export default function Homepage() {
  return (
    <div className="Main">
      <div className="sign">
        <b>Login</b>
        <hr className="hr" />
        <h4>Username :</h4>
        <input />

        <h4>Password :</h4>
        <div className="break">
          <input />
          <br />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}
