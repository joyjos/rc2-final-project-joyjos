import "./App.css";
import { AppRouter } from "./middleware/router/AppRouter";
import { PostProvider } from "./middleware/context/PostContext";

function App() {
  return (
    <PostProvider>
      <AppRouter />
    </PostProvider>
  );
}

export default App;
