import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import LeftPanel from "./leftPanel";
import RightPanel from "./rightPanel";
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <div className="container">
      <main className="primary-structure">
        <Header />
        <div className="row">
          <LeftPanel />
          <RightPanel />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
