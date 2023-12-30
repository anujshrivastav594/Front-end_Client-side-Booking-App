import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"
import { AuthContext } from "../../context/AuthContext";

const Login = ()=>{
   const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined
   });

   const {user, loading, error, dispatch } = useContext(AuthContext);

   const navigate = useNavigate()

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("https://anuj-booking-app-backend.onrender.com/api/auth/login", credentials);
      await dispatch({ type: "LOGIN_SUCCESS", payload: res.data });//here i added await to console user after dispattch  function completed its work
    //   console.log(user)
      navigate("/")
    } catch (err) {//catch method never executes when res.status is in range of 200 to 299
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

   return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
   )
}

export default Login;