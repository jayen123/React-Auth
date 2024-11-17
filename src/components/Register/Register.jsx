import { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

export default function Register() {
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((user) => {
        console.log("User created successfully:", user.user);
        e.target.reset();
        // Redirect to home page
        navigate("/");
      })
      .catch((error) => {
        console.error("Error creating user:", error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <p>
              Already have an account? Please{" "}
              <Link className="underline" to="/login">
                Login
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
