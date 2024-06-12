import Header from "./components/header";
import Footer from "./components/footer";
import AppRoutes from "./routes";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
