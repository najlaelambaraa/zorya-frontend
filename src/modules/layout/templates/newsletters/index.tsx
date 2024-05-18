"use client";
import Facebook from '@modules/common/icons/facebook';
import Linkedin from '@modules/common/icons/linkedin';
import Tiktok from '@modules/common/icons/tiktok';
import Twitter from '@modules/common/icons/twitter';
import { useState } from 'react';

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
      <h1 className="text-2xl font-bold mb-4">Rejoignez la Glowsphère ! </h1>
      <label
        className="block tracking-wide text-black text-base mb-4 text-center"
        htmlFor="email"
      >
        Abonnez-vous pour recevoir des nouveautés et astuces glowing chaque mois !      </label>
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
      <a href="#"><Facebook/></a>
      <a href="#"><Twitter/></a>
      <a href="#"><Tiktok/></a>
      <a href="#"><Linkedin/></a>
      {/* <a href="#"><Instagram/></a> */}
    </div>
  </form>
</div>
  );
}
