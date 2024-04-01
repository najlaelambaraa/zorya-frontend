"use client";
import { useState } from 'react';
import { Facebook,Twitter,TypescriptEx } from "@medusajs/icons"
export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const subscribe = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      alert("Veuillez entrer une adresse e-mail.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:9000/mailchimp/subscribe", {
        method: "POST",
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Abonné avec succès !");
        setEmail("");
      } else {
        throw new Error(data.message || "Une erreur est survenue lors de l'abonnement.");
      }
    } catch (e) {
      console.error(e);
      // alert(e.message);
    }
  };

  return (
    <div className="flex items-center justify-center p-12 bg-lime-500">
      <form onSubmit={subscribe} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block tracking-wide text-black text-xs mb-2"
              htmlFor="email"
            >
              Abonnez-vous à notre newsletter et soyez les premiers informés des nouveautés !
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="appearance-none block w-full bg-black text-black border border-black bg-lime-500 py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black"
              placeholder="Adresse e-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <button
              type="submit"
              className="mt-4 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 w-full"
            >
              S'inscrire
            </button>
          </div>
          <div className="flex mt-4">
       
        <a href="#" className="text-white mx-2"><Facebook/></a>
        <a href="#" className="text-white mx-2"><Twitter/></a>
        <a href="#" className="text-white mx-2"><TypescriptEx/></a>
      </div>
      </div>
      </form>
    </div>
  );
}
