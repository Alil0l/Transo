import Dashbored from "./components/Dashboard/Dashbored";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    // TODO: remember to reset the imgs for vite before rebuilding
    <div className="app">
      <div className="appContainer">
        <Sidebar />
        <Dashbored />
      </div>
    </div>
  );
}

export default App;
