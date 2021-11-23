import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import "./styles.css";

export const Registrar = () => {
  const apiOrigin = "http://localhost:3001/api";

  const postUser = async (
    name,
    email,
    password,
    age,
    career,
    university,
    semester
  ) => {
    try {
      const resp = await fetch(`${apiOrigin}/users`, {
        method: "POST",
        body: JSON.stringify({
          username: name,
          email: email,
          password: password,
          age: age,
          career: career,
          pic_url:
            "https://www.expohip.com/app/uploads/sites/2/2021/01/fake-232.jpg",
          university: university,
          semester: semester,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return resp.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container__login">
      <div className="login__titulo">
        <h1>Registro</h1>
      </div>
      <div className="registrar__card">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            age: "",
            career: "",
            university: "",
            semester: "",
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();
            const { name, email, password, age, career, university, semester } =
              valores;
            postUser(name, email, password, age, career, university, semester);
            console.log("Formulario enviado");
          }}
        >
          {({ errors }) => (
            <Form className="formulario">
              <div>
                <label htmlFor="name">Nombre</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Juan Perez"
                />
              </div>
              <div>
                <label htmlFor="email">Correo</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="juan@uniappto.com"
                />
              </div>
              <div>
                <label htmlFor="password">Contraseña</label>
                <Field type="password" id="password" name="password" />
              </div>
              <div>
                <label htmlFor="age">Edad</label>
                <Field type="number" id="age" name="age" placeholder="19" />
              </div>
              <div>
                <label htmlFor="university">Universidad</label>
                <Field
                  type="university"
                  id="university"
                  name="university"
                  placeholder="Universidad de los Andes"
                />
              </div>
              <div>
                <label htmlFor="career">Carrera</label>
                <Field
                  type="career"
                  id="career"
                  name="career"
                  placeholder="Ingeniería Industrial"
                />
              </div>
              <div>
                <label htmlFor="semester">Semestre</label>
                <Field
                  type="semester"
                  id="semester"
                  name="semester"
                  placeholder="Primer Semestre"
                />
              </div>
              <button className="login__button" type="submit">
                Registrarse
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
