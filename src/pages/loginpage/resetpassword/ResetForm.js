import React from "react";
import "./reset.scss";
import { Box, Grid, Typography, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { RiCloseCircleLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";


const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(`Email is required`),
});

const initialValues = {
  email: "",
};

export const ResetForm = () => {
  const [secondary, setSecondary] = React.useState(false);
  let navigate = useNavigate()

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={(values) => {
        console.log(values);
        navigate("/credential")
      }}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div>
            <Grid
              container
              spacing={0}
              justifyContent="center"
              className="login_form"
            >
              <Grid item xs={12} md={7}>
                <Form>
                  <Typography
                    varient="h4"
                    className="heading_text"
                    sx={{ paddingBottom: "26px" }}
                  >
                    Reset Password
                  </Typography>
                  <Box sx={{ padding: "10px 0 20px" }}>
                    <div className="form-row">
                      <label htmlFor="email">Email Address</label>
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        style={{ border: "none" }}
                        className={
                          errors.email && touched.email ? "input-error" : null
                        }
                      />
                      {}
                      <ErrorMessage
                        name="email"
                        component="span"
                        className="error"
                      />
                    </div>
                  </Box>
                  <Box
                    textAlign="center"
                    sx={{ paddingBottom: "130px", paddingTop: "10px" }}
                  >
                    <Button variant="contained" type="submit" className="lightblue_btn">
                      Reset My Password
                    </Button>
                  </Box>
                </Form>
              </Grid>
            </Grid>
          </div>
        );
      }}
    </Formik>
  );
};
