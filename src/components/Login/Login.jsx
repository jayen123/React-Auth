import { Link } from "react-router-dom";


export default function Login() {
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log("🚀 ~ handleLogin ~ email:", email)
    const password = e.target.password.value;
    console.log("🚀 ~ handleLogin ~ password:", password)
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>You don&apos;t have any account? Please <Link className="underline" to="/register">
              Register
            </Link>.</p>
          </form>
        </div>
      </div>
    </div>
  )
}
