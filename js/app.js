/********************************************
 * app.js - Entry file, combines all components
 ********************************************/
const { HashRouter, Route, Switch, Redirect } = ReactRouterDOM;

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route path="/attractions" render={() => <Attractions />} />
                    <Route path="/food" render={() => <Food />} />
                    <Route path="/hotels" render={() => <Hotels />} />
                    <Route path="/contact" render={() => <Contact />} />
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </div>
        </HashRouter>
    );
}

// Use new createRoot API
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
  