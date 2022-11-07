import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useFormik } from "formik";

import Button from "../../components/core/Button/Button";
import Input from "../../components/core/Input/Input";

import { adminValidationSchema } from "../../validation/adminValidation";

import styles from "../../styles/Login.module.css";

const Login = () => {
  const router = useRouter();

  const formData = {
    username: "",
    password: "",
  };

  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    setFieldTouched,
  } = useFormik({
    initialValues: formData,
    validationSchema: adminValidationSchema,
    validateOnMount: true,
  });

  const handleLogin = async () => {
    const { username, password } = values;

    try {
      await axios.post(
        "https://next-pizza-restaurant-tau.vercel.app/api/login",
        {
          username,
          password,
        }
      );

      router.push("/admin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Admin login</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/pizza.ico" />
      </Head>
      <div className={styles.container}>
        <h1>Admin dashboard</h1>
        <div className={styles.inputContainer}>
          <Input
            defaultStyle
            placeholder="username"
            value={values.username}
            onChange={handleChange("username")}
            error={errors.username}
            touched={touched.username}
            onBlur={() => {
              if (!touched.username) {
                setFieldTouched("username", true);
              }
              handleBlur("username");
            }}
          />
          <Input
            defaultStyle
            type="password"
            placeholder="password"
            value={values.password}
            onChange={handleChange("password")}
            error={errors.password}
            touched={touched.password}
            onBlur={() => {
              if (!touched.password) {
                setFieldTouched("password", true);
              }
              handleBlur("password");
            }}
          />
        </div>
        <Button
          simple
          isDisabled={!isValid}
          style={{ width: "100px", marginTop: "30px" }}
          name="Login"
          onClick={handleLogin}
        />
      </div>
    </>
  );
};

export default Login;
