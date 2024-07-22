import React from "react";
import BackgroundScreen from "../../components/ui/bg-screen";
import LoginForm from "../../components/form/login-form";
import Drawer from "../../components/ui/drawer";
const Login = () => {
  return (
    <BackgroundScreen>
      <Drawer>
        <LoginForm />
      </Drawer>
    </BackgroundScreen>
  );
};

export default Login;
