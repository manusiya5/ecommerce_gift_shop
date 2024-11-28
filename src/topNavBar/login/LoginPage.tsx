import { useState } from "react";
import {
  LoginPageContainer,
  LoginContentContainer,
} from "../../styles/SignInStyles";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function LoginPage() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <LoginPageContainer>
      <LoginContentContainer>
        {
          isSignIn ? (
            <SignInForm toggleForm={toggleForm} />
          ) : (
            <SignUpForm toggleForm={toggleForm} />
          )
        }
      </LoginContentContainer>
    </LoginPageContainer>
  );
}

export default LoginPage;
