// import Counter from "./components/Counter";
import { Provider } from "react-redux";
import store from "./redux/store";
// import HooksCounter from "./components/HooksCounter";
// import AgeCounter from "./components/AgeCounter";
import  PostContainer  from "./components/PostContainer";

function App() {
  return (
    <Provider store={store}>
      {/* <Counter />
      <HooksCounter />
      <AgeCounter/> */}
      <PostContainer/>
    </Provider>
  );
}

export default App;
