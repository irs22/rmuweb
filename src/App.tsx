import "./App.scss";
import Blog_home from "./component/Blog_home/Blog_home";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Hero_sect from "./component/Hero/Hero_sect";
import Sidebar from "./component/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <main className="main" id="main">
        <Hero_sect />
        <Blog_home />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
