import "./App.scss";
import "bootstrap/scss/bootstrap.scss";
import CustomNavbar from "./components/CustomNavbar";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <MainSection />
    </div>
  );
}

export default App;
