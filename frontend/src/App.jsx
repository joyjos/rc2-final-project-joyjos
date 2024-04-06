import "./App.css";
import { AppRouter } from "./middleware/router/AppRouter";
import { PostProvider } from "./middleware/context/PostContext";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css";

function App() {
  return (
    <PrimeReactProvider>
      <PostProvider>
        <AppRouter />
      </PostProvider>
    </PrimeReactProvider>
  );
}

export default App;
