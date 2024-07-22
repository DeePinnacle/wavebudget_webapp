import React from "react";
import BackgroundScreen from "../../components/ui/bg-screen";
import RegForm from "../../components/form/reg-form";
import Drawer from '../../components/ui/drawer'

const Register = () => {
  return (
    <BackgroundScreen>
      <Drawer>
        <RegForm />
      </Drawer>
    </BackgroundScreen>
  );
};

export default Register;
