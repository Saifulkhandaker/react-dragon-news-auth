import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const {signIn} = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.log(error);
        })
    }

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col border rounded-lg border-green-200">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Login your account!</h1>
            <hr className="mt-5" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center mb-4">Don't Have a account!!! <Link className="text-red-500 font-medium" to="/register">Register</Link></p> 
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
