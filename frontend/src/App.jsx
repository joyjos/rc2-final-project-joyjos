import "./App.css";
import { AppRouter } from "./middleware/router/AppRouter";
import { PostProvider } from "./middleware/context/PostContext";
import { PrimeReactProvider } from "primereact/api";
import { UserProvider } from "./middleware/context/UserContext";

import "primereact/resources/themes/lara-light-indigo/theme.css";
import { AuthProvider } from "./middleware/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <PrimeReactProvider>
          <PostProvider>
            <AppRouter />
          </PostProvider>
        </PrimeReactProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
