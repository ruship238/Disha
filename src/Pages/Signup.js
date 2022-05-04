import "./login.css"

export default function Signup(){
return(
<>
<div className="Main">
      <div className="sign">
        <b>New User? Signup now.. :)</b>
        <hr className="hr" />
        <h4>Username :</h4>
        <input placeholder="Enter your username"/>
      <h4>Email :</h4>
        <input placeholder="Enter your Email"/>
        <h4>Password :</h4>
        <div className="break">
          <input placeholder="Enter Password"/>
          <br />
          <button>SignUp</button>
        </div>
      </div>
    </div>


</>
	)



}