import Auth from "../../../layout/Auth";
import logo from "../../../assets/imgs/airCasita_logo.png";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "formdata");
  };
  // state for password
  const navigate = (url) => {
    router.push(url);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="container mx-auto mt-10 flex justify-center items-center w-full">
        <div className="w-full max-w-xl m-0">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-center">
              <div className="flex justify-center">
                <img src={logo.src} className="w-2/4" />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 font-Montserrat"
                for="username"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none input-border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-Montserrat"
                id="usernumber"
                type="number"
                placeholder="0123456789"
              />
            </div>

            <div>
              <button
                className="bg-primary text-text_light w-full  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline font-Montserrat "
                type="button"
                onClick={() => {
                  navigate("/");
                }}
              >
                Log In
              </button>
            </div>

            <div className="flex justify-center mt-4 font-Montserrat">
              <p className="pr-2 text-sm">
                Don't have an acount ?
                <a href="/auth/register" className="text-primary pl-1">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

Login.Layout = Auth;

