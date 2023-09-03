import React, { useContext } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../../contexts/AuthProvider";
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
          const user = result.user;
          console.log(user);
          Swal.fire({
            position: "center",
            icon: 'success',
            title: 'LogIn successfully',
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from, { replace: true });
      })
  };

  return (
    <Box>
      <Container component="main" maxWidth="xs" sx={{ py: "100px" }}>
         <Box
          sx={{
            alignItems: "center",
            mt: 1,
            backgroundColor: "white",
            p: 3,
            borderRadius: 2,
            filter: "drop-shadow(0 0 0.20rem gray)",
          }}
        >
          <Typography component="h1" variant="h6">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Box style={{ textAlign: "left" }}>
              <Link href="#" variant="body2" style={{ textDecoration: "none" }}>
                Forgot password?
              </Link>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Box>
              <Typography variant="body2">
                Don't have an account?
                <Link
                  href="register"
                  variant="body2"
                  style={{ marginLeft: 10, textDecoration: "none" }}
                >
                  Register
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;














// import { useContext, useEffect, useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import { AuthContext } from '../../providers/AuthProvider';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Helmet } from 'react-helmet-async';
// import Swal from 'sweetalert2'
// import SocialLogin from '../Shared/SocialLogin/SocialLogin';

// const Login = () => {
//     const [disabled, setDisabled] = useState(true);
//     const { signIn } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location.state?.from?.pathname || "/";

//     useEffect(() => {
//         loadCaptchaEnginge(6);
//     }, [])

//     const handleLogin = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);
//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user);
//                 Swal.fire({
//                     title: 'User Login Successful.',
//                     showClass: {
//                         popup: 'animate__animated animate__fadeInDown'
//                     },
//                     hideClass: {
//                         popup: 'animate__animated animate__fadeOutUp'
//                     }
//                 });
//                 navigate(from, { replace: true });
//             })
//     }

//     const handleValidateCaptcha = (e) => {
//         const user_captcha_value = e.target.value;
//         if (validateCaptcha(user_captcha_value)) {
//             setDisabled(false);
//         }
//         else {
//             setDisabled(true)
//         }
//     }

//     return (
//         <>
//             <Helmet>
//                 <title>Bistro Boss | Login</title>
//             </Helmet>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col md:flex-row-reverse">
//                     <div className="text-center md:w-1/2 lg:text-left">
//                         <h1 className="text-5xl font-bold">Login now!</h1>
//                         <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     </div>
//                     <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
//                         <form onSubmit={handleLogin} className="card-body">
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Email</span>
//                                 </label>
//                                 <input type="email" name="email" placeholder="email" className="input input-bordered" />
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <span className="label-text">Password</span>
//                                 </label>
//                                 <input type="password" name="password" placeholder="password" className="input input-bordered" />
//                                 <label className="label">
//                                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                 </label>
//                             </div>
//                             <div className="form-control">
//                                 <label className="label">
//                                     <LoadCanvasTemplate />
//                                 </label>
//                                 <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />

//                             </div>
//                             {/* TODO: make button disabled for captcha */}
//                             <div className="form-control mt-6">
//                                 <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
//                             </div>
//                         </form>
//                         <p><small>New Here? <Link to="/signup">Create an account</Link> </small></p>
//                         <SocialLogin></SocialLogin>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Login;

