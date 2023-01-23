import "./assets/styles/index.css";
import Aside from "./components/Aside/data";
import { Header } from "./components/Header/UserCard";
import { Footer } from "./components/Footer/Todo";
import { Section } from "./components/Section/Section";

const App = () => {
  return (
    <>
      <Header />
      <Aside />
      <Footer />
      <Section />
    </>
  );
};
export default App;
