import React, { useContext } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../../contexts/AuthProvider";
import { Grid } from '@mui/material';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";

const Register = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if(loading){
    return <progress></progress>
  }

  const onSubmit = data => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name)
      .then(() => {
        console.log("Account created successfully")
        reset()
        Swal.fire({
          position: "center",
          icon: 'success',
          title: 'Account created successfully',
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/');
      })
      .catch(error => console.log(error))
    })
  };

  return (
    <Box>
      <Container component="main" maxWidth="xs" sx={{ py: "60px" }}>
        <Box
          sx={{
            alignItems: "center",
            mt: 3,
            backgroundColor: "white",
            p: 3,
            borderRadius: 2,
            filter: "drop-shadow(0 0 0.20rem gray)",
          }}
        >
          <Typography component="h1" variant="h6" sx={{ pb: 2 }}>
            Create your Matricolive account
          </Typography>
          <form component="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="fullName"
                  {...register("fullName")}
                  required
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  {...register("email")}
                  autoComplete="email"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phone"
                  label="Phone"
                  name="phone"
                  {...register("phone")}
                  autoComplete="phone"
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  {...register("password", {minLength: 6,
                    maxLength: 16,})}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
                {errors.password?.type === 'minLength' && <Typography variant="body2">Passwords must be at least 6 characters.</Typography>}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Box>
              <Typography variant="body2">
                Already have an account?
                <Link
                  href="login"
                  variant="body2"
                  style={{ marginLeft: 10, textDecoration: "none" }}
                >
                  Login
                </Link>
              </Typography>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;







// import { useContext } from "react";
// import { Helmet } from "react-helmet-async";
// import { useForm } from "react-hook-form";
// import { AuthContext } from "../../providers/AuthProvider";
// import { Link, useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'
// import SocialLogin from "../Shared/SocialLogin/SocialLogin";

// const SignUp = () => {

//     const { register, handleSubmit, reset, formState: { errors } } = useForm();
//     const { createUser, updateUserProfile } = useContext(AuthContext);
//     const navigate = useNavigate();

//     const onSubmit = data => {

//         createUser(data.email, data.password)
//             .then(result => {

//                 const loggedUser = result.user;
//                 console.log(loggedUser);

//                 updateUserProfile(data.name, data.photoURL)
//                     .then(() => {
//                         const saveUser = { name: data.name, email: data.email }
//                         fetch('https://bistro-boss-server-fawn.vercel.app/users', {
//                             method: 'POST',
//                             headers: {
//                                 'content-type': 'application/json'
//                             },
//                             body: JSON.stringify(saveUser)
//                         })
//                             .then(res => res.json())
//                             .then(data => {
//                                 if (data.insertedId) {
//                                     reset();
//                                     Swal.fire({
//                                         position: 'top-end',
//                                         icon: 'success',
//                                         title: 'User created successfully.',
//                                         showConfirmButton: false,
//                                         timer: 1500
//                                     });
//                                     navigate('/');
//                                 }
//                             })



//                     })
//                     .catch(error => console.log(error))
//             })
//     };

//     return (
//         <>
//             <Helmet>
//                 <title>Bistro Boss | Sign Up</title>
//             </Helmet>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row-reverse">
//                     <div className="text-center lg:text-left">
//                         <h1 className="text-5xl font-bold">Sign up now!</h1>
//                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     </div>
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Name</span>
//                                 </label>
//                                 <input type="text"  {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
//                                 {errors.name && <span className="text-red-600">Name is required</span>}
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Photo URL</span>
//                                 </label>
//                                 <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
//                                 {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
//                                 {errors.email && <span className="text-red-600">Email is required</span>}
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password"  {...register("password", {
//                                     required: true,
//                                     minLength: 6,
//                                     maxLength: 20,
//                                     pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
//                                 })} placeholder="password" className="input input-bordered" />
//                                 {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
//                                 {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
//                                 {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
//                                 {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="form-control mt-6">
//                                 <input className="btn btn-primary" type="submit" value="Sign Up" />
//                             </div>
//                         </form>
//                         <p><small>Already have an account <Link to="/login">Login</Link></small></p>
//                         <SocialLogin></SocialLogin>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default SignUp;