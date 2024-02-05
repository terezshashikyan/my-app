import { store } from "./store";
import { Provider } from "react-redux";
import { Home } from "./containers";

function App() {

  
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  );
}

export default App;
