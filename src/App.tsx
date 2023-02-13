import "./App.scss";
import Footer from "./component/Footer/Footer";
import Hero_sect from "./component/Hero/Hero_sect";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Hero_sect />
      <Footer/>
    </div>
  );
}

export default App;
