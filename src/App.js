import "./App.css";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  auth,
  increment,
  decrement,
  loggedIn,
} from "./state_management/actions";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginScreen />
          </Route>
          <Route path="/counter" render={() => <CounterScreen />} />
        </Switch>
      </Router>
    </>
  );
}

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(auth(email, password));
    if (
      email === "rayhangamawanto@gmail.com" &&
      password.toString() === "123123"
    )
      history.push("/counter");
  };
  return (
    <div className="App">
      <Container maxWidth="xs">
        <Typography variant="h5" color="text.primary">
          Login Aplikasi Counter
        </Typography>
        <br />
        <form action="#">
          <TextField
            id="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <TextField
            id="password"
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />
          <br />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
}

function CounterScreen() {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const history = useHistory();

  const plus = () => {
    dispatch(increment());
  };

  const minus = () => {
    dispatch(decrement());
  };

  const logout = () => {
    dispatch(loggedIn(false));
    history.push("/");
  };

  return (
    <div className="App">
      <Typography variant="h4" color="initial">
        Counter Screen
      </Typography>
      <Container maxWidth="md">
        <br />
        <Typography variant="h6" color="initial">
          {number}
        </Typography>
        <br />
        <br />
        <ButtonGroup variant="contained" color="primary" aria-label="">
          <Button onClick={plus}>Increment (+)</Button>
          <Button onClick={minus}>Decrement (-)</Button>
        </ButtonGroup>
        <br />
        <br />
        <Button variant="text" color="secondary" onClick={logout}>
          Logout
        </Button>
      </Container>
    </div>
  );
}

export default App;
