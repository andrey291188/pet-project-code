import FormRegister from "../../../components/FormRegistered/FormRegistered";
import FormResendVerify from "../../../components/FormResendVerify/FormResendVerify";
import { useState } from "react";
import VerifyLink from "../../../components/VerifyLink/VerifyLink";
import { Loader } from "../../../components/Loader/Loader";

const Register = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [loader, setLoader] = useState(false);
  const [linkVerify, setLinkVerify] = useState("");

  return (
    <>
      {loader && <Loader />}
      {!loader && linkVerify.length > 0 && <VerifyLink linkVerify={linkVerify} />}
      {!loader && linkVerify.length === 0 &&
        (formVisible ? (
          <FormResendVerify
            setFormVisible={setFormVisible}
            setLinkVerify={setLinkVerify}
            setLoader={setLoader}
          />
        ) : (
          <FormRegister
            setFormVisible={setFormVisible}
            setLinkVerify={setLinkVerify}
            setLoader={setLoader}
          />
        ))}
    </>
  );
};

export default Register;
