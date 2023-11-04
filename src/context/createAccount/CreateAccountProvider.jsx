import { useState } from "react";
import { CreateAccountContext } from "./CreateAccountContext";
import PropTypes from "prop-types";

export const CreateAccountProvider = ({ children }) => {
  const [createAccount, setCreateAccount] = useState(false);
  const [steps, setSteps] = useState("");
  return (
    <CreateAccountContext.Provider
      value={{ createAccount, setCreateAccount, steps, setSteps }}
    >
      {children}
    </CreateAccountContext.Provider>
  );
};

CreateAccountProvider.propTypes = {
  children: PropTypes.any,
};
