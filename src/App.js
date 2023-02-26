import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import store from "./store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Provider store={store}>
            <Main></Main>
          </Provider>
        }
      ></Route>
    </Routes>
  );
}
export default App;
