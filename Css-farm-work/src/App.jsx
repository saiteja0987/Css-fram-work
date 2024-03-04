import "./App.css";
import Alert from "./components/Note";
import Button from "./components/Button";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar/>
      <Button />
      <Alert />
      <Card />
      <Footer />
    </div>
  );
}

export default App;