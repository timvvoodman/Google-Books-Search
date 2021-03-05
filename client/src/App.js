import React from "react";
import "./style.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBooks from "./components/pages/SearchBooks";
import TopNav from "./components/TopNav";
import SavedBooks from "./components/pages/SavedBooks";

function App() {
  return (
    <Router>
      <div>
        <TopNav />
        <Route exact path="/" component={SearchBooks} />
        <Route exact path="/saved" component={SavedBooks} />
      </div>
    </Router>
  );
}

export default App;
