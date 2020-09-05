import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Provider } from "react-redux";

import store from "./store/store";
import { addUsers } from "./actions/users";
import Header from "./components/Header";
import UserList from "./components/UserList";
import "./style.css";

class App extends Component {
  componentDidMount() {
    axios.get("http://localhost:3000/users").then((response) => {
      console.log(response.data);
      store.dispatch(addUsers(response.data.results));
    });
  }
  render() {
    return (
      <div>
        <Header />
        <UserList />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
