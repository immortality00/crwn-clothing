import React from "react";
import { SignInUpContainer } from "./Sign-in-up.styles";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

const SignInAndSignUpPage = () => (
  <SignInUpContainer>
    <SignIn />
    <SignUp />
  </SignInUpContainer>
);

export default SignInAndSignUpPage;
