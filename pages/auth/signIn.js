import Auth from "../../layout/Auth";
import logo from "../../assets/imgs/airCasita_logo.png";
import { useState } from "react";
export default function Home() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

  return (
    <>
      <div class="container flex justify-center">
        <div class="w-full max-w-xl">
          <form
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div class="flex justify-center">
              <div class="flex justify-center">
                <img src={logo.src} class="w-2/4" />
              </div>
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                value={formData.email}
                type="email"
                placeholder="user email"
                onChange={handleInputChange}
              />
            </div>
            <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="******************"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <p class="text-primary text-xs italic">
                Please choose a password.
              </p>
            </div>
            <div>
              <button
                class="bg-secondary text-white w-full  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                type="button"
              >
                Sign In
              </button>
            </div>
            <div className="mt-3 mb-3">
              <a
                class="inline-block underline align-baseline font-bold text-sm text-primary hover:text-red-600"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
            <div class="flex">
              <p class="pr-2 text-sm">
                Don't have an acount ?
                <a href="/auth/signUp" class="text-primary pl-1">
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

Home.Layout = Auth;
