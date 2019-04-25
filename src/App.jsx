import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import PageFooter from "./components/PageFooter";

import PageHome from "./pages/Home";
import PageCatalog from "./pages/Catalog";
import PageBrand from "./pages/Brand";
import PageLocalStores from "./pages/LocalStores";
import PageLookBook from "./pages/LookBook";
import "./sass/app.sass";

function App() {
  return (
    <Router>
      <header className="page-header">
        <Topbar />
        <Navbar />
      </header>

      <main className="page-content">
        <Route exact path="/" component={PageHome} />
        <Route path="/catalog" component={PageCatalog} />
        <Route path="/brand" component={PageBrand} />
        <Route path="/local-stores" component={PageLocalStores} />
        <Route path="/look-book" component={PageLookBook} />
      </main>

      <PageFooter />
    </Router>
  );
}

export default App;
