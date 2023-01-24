import "./assets/styles/index.css";
import Aside from "./components/Aside/data";
import { Header } from "./components/Header/UserCard";
import { Section } from "./components/Section/Section";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Aside />
      <Header />
      <Section />
      <Footer />
    </div>
  );
};
export default App;
