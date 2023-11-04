import { useContext } from "react";
import { Login } from "./Pages/Login";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import { CreateAccountContext } from "./context/createAccount/CreateAccountContext";
import { CreateAccountProvider } from "./context/createAccount/CreateAccountProvider";

function TwitterApp() {
  const { createAccount } = useContext(CreateAccountContext);
  return (
    <div className="h-screen w-screen bg-neutral-1000 font-inter text-neutral-50">
      {createAccount ? <CreateAccount /> : <Login />}
    </div>
  );
}
function App() {
  return (
    <div className="h-screen overflow-auto w-screen bg-neutral-1000 font-inter text-neutral-50">
      <CreateAccountProvider>
        <TwitterApp />
      </CreateAccountProvider>
    </div>
  );
}

export default App;
