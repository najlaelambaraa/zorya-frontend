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
    <div className="flex items-center justify-center p-10 bg-primary">
  <form onSubmit={subscribe} className="w-full max-w-lg">
    <div className="flex flex-col items-center">
      <label
        className="block tracking-wide text-black text-base mb-4 text-center"
        htmlFor="email"
      >
        Abonnez-vous à notre newsletter et soyez les premiers informés des nouveautés !
      </label>
      <div className="flex w-full mb-4">
        <input
          type="email"
          name="email"
          id="email"
          className="appearance-none block bg-black text-black border border-black bg-primary py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black w-full md:w-auto flex-1"
          placeholder="Adresse e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button
          type="submit"
          className="bg-black hover:bg-gray-700 text-white font-bold py-4 px-10 ml-4"
        >
          S'inscrire
        </button>
      </div>
    </div>
    <div className="flex justify-center mt-4">
      <a href="#" className="text-white mx-2"><Facebook/></a>
      <a href="#" className="text-white mx-2"><Twitter/></a>
      <a href="#" className="text-white mx-2"><TypescriptEx/></a>
    </div>
  </form>
</div>
  );
}
