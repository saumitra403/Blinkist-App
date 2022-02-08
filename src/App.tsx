import Template from "./components/Templates";
import { useAuth0 } from "@auth0/auth0-react";
import CircularProgress from "@mui/material/CircularProgress";
function App() {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  if (isLoading) {
    return (
      <CircularProgress
        sx={{ position: "absolute", top: "48vh", left: "48vw" }}
      />
    );
  }
  return (
    <div>
      <Template />
    </div>
  );
}
export default App;
