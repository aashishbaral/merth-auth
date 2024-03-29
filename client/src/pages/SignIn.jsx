import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);

      setLoading(false);
      if (data.success === false) {
        console.log(data.error);
        setError(true);
        return;
      }
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-bold my-7">Sign In</h1>;
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          required
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          className="bg-slate-700 text-white p-3 rounded-full uppercase hover:opacity-95 disabled:opacity-20  "
          disabled={loading}
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex justify-center mt-3 gap-2">
        <p className="font-semibold">Dont have an account ?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5"> {error && "Something went wrong"}</p>
    </div>
  );
};

export default SignIn;
