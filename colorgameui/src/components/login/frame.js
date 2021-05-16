import { useState } from "react";
import Loader from "../Loader/frame";

// imported form styles
import "./styles/form.scss";

// import api fetcher fuction
import loginUser from "./apiFetcher";

const lognInframe = () => {
  // declaring usename and password variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  return (
    //  declaring form with two text boxes and a button
    <div class="loginform">
      <h1>Login to play color carnival game</h1>
      <form>
        <input
          type="text"
          title="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          title="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          type="button"
          class="loginbtn"
          onClick={() => {
            loginUser(loader, setLoader, username, password);
          }}
        >
          Login
        </button>

        {/* loader acts on sending post log in request to backens */}
        {loader ? (
          <div class="loaderHolder">
            <Loader width={50} height={50} />
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default lognInframe;


