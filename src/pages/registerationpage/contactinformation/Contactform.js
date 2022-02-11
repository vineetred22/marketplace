// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { Grid, Checkbox, Link, Button, Typography, Box } from "@mui/material";
// import * as Yup from "yup";
// import PhoneInput from "react-phone-input-2";
// import { BiCheck, BiUserCheck } from 'react-icons/bi';
// import "react-phone-input-2/lib/style.css";

// const signInSchema = Yup.object().shape({
//   // phoneNumber: Yup.string().required("Phone Number is required"),
//   email: Yup.string().email().required("Email is required"),
//   password: Yup.string()
//     .required("Password is required")
//     .min(4, "Password is too short - should be 4 chars min"),
//   confirmPassword: Yup.string()
//      .oneOf([Yup.ref('password'), null], 'Passwords must match')
// });

// const initialValues = {
//   // phoneNumber: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

// export const Contactform = (props) => {

//   const onContinueButton = (values) => {
//     console.log(values);

//     console.log("submit");
//     props.handleNext();
//   };

//   return (
//     <Formik
//     initialValues={initialValues}
//     validationSchema={signInSchema}
//     onSubmit={onContinueButton}
//     >
//       {(formik) => {
//         const { errors, touched, isValid, dirty } = formik;
//         return (
//           <div className="container">
//             <Form>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} md={6}>
//                   <div className="form-row">
//                     <label htmlFor="email">Email</label>
//                     <Field
//                       type="email"
//                       name="email"
//                       id="email"
//                       className={
//                         errors.email && touched.email ? "input-error" : null
//                       }
//                     />
//                     <ErrorMessage
//                       name="email"
//                       component="span"
//                       className="error"
//                     />
//                   </div>
//                 </Grid>

//                 <Grid item xs={12} md={6}>
//                   <div className="form-row">
//                     {/* <label htmlFor="phoneNumber"className="PhonMargin">Phone number</label> */}
//                     {/* <PhoneInput
//                       country={"us"}

//                       value={formik.values.phoneNumber}
//           onChange={e =>formik.setFieldValue("phoneNumber", e)}
//           onBlur={formik.handleBlur("phoneNumber")}

//                          className={
//                         errors.phoneNumber && touched.phoneNumber ? "input-error" : null
//                       }
//                       // onChange={(phone) => setState({ phone })}
//                     />
//                     <ErrorMessage
//                       name="phoneNumber"
//                       component="span"
//                       className="error"
//                     /> */}
//                   </div>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <div className="form-row">
//                     <label htmlFor="password">Password</label>
//                     <Field
//                       type="password"
//                       name="password"
//                       id="password"
//                       className={
//                         errors.password && touched.password
//                           ? "input-error"
//                           : null
//                       }
//                     />
//                     <ErrorMessage
//                       name="password"
//                       component="span"
//                       className="error"
//                     />
//                   </div>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <div className="form-row">
//                     <label htmlFor="password">Confirm Password</label>
//                     <Field
//                       type="password"
//                       name="confirmPassword"
//                       id="confirmPassword"
//                       className={
//                         errors.confirmPassword && touched.confirmPassword
//                           ? "input-error"
//                           : null
//                       }
//                     />
//                     <ErrorMessage
//                       name="confirmPassword"
//                       component="span"
//                       className="error"
//                     />
//                   </div>
//                 </Grid>
//               </Grid>
//             </Form>
//             <Box
//               sx={{
//                 textAlign: "center",
//                 marginTop: "20px",
//               }}
//             >
//               <Button
//                  variant="contained"
//               type="submit"
//                  className="lightblue_btn"
//               >
//                 Continue
//               </Button>
//               <Typography
//                 variant="subtitle2"
//                 component="div"
//                 sx={{ display: 'flex',}}
//               >
//                 <Checkbox />
//                 <Typography variant="body1"
//                 className="contact_form">By creating an account, I agree to the{" "}
//                 <Link href="#" underline="none">
//                  Terms of Use
//                 </Link>{" "}
//                 and acknowledge that I have read the{" "}
//                 <Link href="#" underline="none">
//                   Privacy Policy
//                 </Link>
//                 .</Typography>
//               </Typography>
//             </Box>
//           </div>
//         );
//       }}
//     </Formik>
//   );
// };
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Grid, Checkbox, Link, Button, Typography, Box } from "@mui/material";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import { BiCheck, BiUserCheck } from "react-icons/bi";
import "react-phone-input-2/lib/style.css";

const signInSchema = Yup.object().shape({
  email: Yup.string().required("Email  is required"),
  phone: Yup.string().required("Phone  is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password is too short - should be 4 chars min"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

const initialValues = {
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export const Contactform = (props) => {
  const onContinueButton = (values) => {
    console.log(values);
    props.handleNext();
    console.log("submit");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={signInSchema}
      onSubmit={onContinueButton}
    >
      {(formik) => {
        const { errors, touched, isValid, dirty } = formik;
        return (
          <div className="container">
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="email">email</label>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className={
                        errors.email && touched.email ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>

                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="phone" className="PhonMargin">
                      Phone Number
                    </label>
                    <PhoneInput
                      country={"us"}
                      value={formik.values.phoneNumber}
                      onChange={(e) => formik.setFieldValue("phone", e)}
                      onBlur={formik.handleBlur("phone")}
                      className={
                        errors.phone && touched.phone ? "input-error" : null
                      }
                    />
                    <ErrorMessage
                      name="phone"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>

                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      className={
                        errors.password && touched.password
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
                <Grid item xs={12} md={6}>
                  <div className="form-row">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      className={
                        errors.confirmPassword && touched.confirmPassword
                          ? "input-error"
                          : null
                      }
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="span"
                      className="error"
                    />
                  </div>
                </Grid>
              </Grid>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  type="submit"
                  className="lightblue_btn"
                >
                  Continue
                </Button>
                <Typography
                  variant="subtitle2"
                  component="div"
                  sx={{ display: "flex" }}
                >
                  <Checkbox />
                  <Typography variant="body1" className="contact_form">
                    By creating an account, I agree to the{" "}
                    <Link href="#" underline="none">
                      Terms of Use
                    </Link>{" "}
                    and acknowledge that I have read the{" "}
                    <Link href="#" underline="none">
                      Privacy Policy
                    </Link>
                    .
                  </Typography>
                </Typography>
              </Box>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};
