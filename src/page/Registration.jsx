import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username  , setUsername] = useState("");
  const [password  , setpassword] = useState("");


  //form sumit
  const handleSubmit = (e) => {
    e.preventDefault(); 
    axios.post("http://localhost:1000/api/new", { username, password })
      .then(() => {
        console.log("Données envoyées avec succès !");
      })
      .catch((err) => {
        console.error("Erreur lors de l'envoi des données :", err);
      });
  };
  



  //return 
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-semibold">
            <label htmlFor="username">Username</label>

            <input
            onChange={(e)=>setUsername(e.target.value)}
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="border-1 border-blue-600 border p-3 rounded-md"
            />
            <label htmlFor="password">Password</label>
            <input
                        onChange={(e)=>setpassword(e.target.value)}

              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="border-1 border-blue-600 border p-3 rounded-md"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white p-3 rounded-md hover:bg-purple-700 transition-all"
            >
              Envoyer
            </button>
            <p
              className=" font-normal text-purple-500 text-center cursor-pointer"
              onClick={() => navigate("/")}
            >
              deja un compte : Se connecter
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
