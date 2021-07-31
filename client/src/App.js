import Router from './routers/Router';
import AuthContext from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthContext>
        <Router />
      </AuthContext>
    </div>
  );
};

export default App;

/* import './App.css';
import Router from './router/Router';
import AuthContext from "./context/AuthContext";

export default function App() {
  return (
    <div>
      <AuthContext>
        <Router />
      </AuthContext>
    </div>
  )
} */