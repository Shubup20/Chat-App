import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-200">
        <h1 className="flex gap-2 text-3xl font-semibold text-center text-slate-700">
          <p> Login to</p>
          <span className="text-blue-700"> Chat Application</span>
        </h1>

        <form>
          <div>
            <label className="label p-2 ">
              <span className="text-base label-text ">Email</span>
            </label>

            <input
              type="text"
              placeholder="shub@gmail.com"
              className="w-full input input-bordered
            h-10"
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-base label-text ">Password</span>
            </label>

            <input
              type="text"
              placeholder="Enter Password"
              className="w-full input input-bordered
            h-10"
            />
          </div>

          <div>
            <button className="btn btn-block btn-sm hover:bg-sky-700  mt-5 bg-blue-700 font-bold text-white">
              Login
            </button>
          </div>

          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-blue-600 mt-2  inline-block"
          >{`Don't have an account? signup`}</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
