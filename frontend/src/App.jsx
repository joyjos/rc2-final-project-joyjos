import "./App.css";
import { AppRouter } from "./middleware/router/AppRouter";
import { PostProvider } from "./middleware/context/PostContext";
import { PrimeReactProvider } from "primereact/api";
import { UserProvider } from "./middleware/context/UserContext";
import "primereact/resources/themes/lara-light-indigo/theme.css";

function App() {
  return (
    <UserProvider>
      <PrimeReactProvider>
        <PostProvider>
          <AppRouter />
        </PostProvider>
      </PrimeReactProvider>
    </UserProvider>
  );
}

export default App;
