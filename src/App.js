import "./assets/styles/index.css";
import "./components/Section/data";
// import Header from "./components/Header/UserCard";
import Footer from "./components/Footer/Footer";
import { Section } from "./components/Section/Section";

const App = () => {
  return (
    <div className="container all">
      {/* <Header /> */}
      <div className="main-sect ">
        <Section />;
        <Footer/>
      </div>

    </div>
  );
};
export default App;
