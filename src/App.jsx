import Header from "./components/header";
import Footer from "./components/footer";
import AppRoutes from "./routes";
import "./App.css";
import { UserStorage } from "./context/userContext";

function App() {
  return (
    <div className="App">
      <UserStorage>
        <Header />
        <main className="AppBody">
          <AppRoutes />
        </main>
        <Footer />
      </UserStorage>
    </div>
  );
}

export default App;
