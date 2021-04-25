import { Suspense, lazy } from "react";
import { Route, HashRouter } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Profile = lazy(() => import("./pages/Profile"));

function App() {
  return (
    <Suspense fallback={<p>LOading...</p>}>
      <HashRouter>
        <Route path="/" exact component={Home} />
        <Route path="/profile/:name" component={Profile} />
      </HashRouter>
    </Suspense>
  );
}

export default App;
