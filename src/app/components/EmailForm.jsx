"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "../context/LanguageContext";
import toast, { Toaster } from "react-hot-toast";

export default function EmailForm() {
  const form = useRef();
  const { language } = useLanguage();

  const texts = {
    EN: {
      placeholder: "Enter your email",
      success: "Email sent successfully! Thank you for connecting.",
      error: "Failed to send email. Please try again later.",
    },
    ID: {
      placeholder: "Masukkan email anda",
      success: "Email berhasil dikirim! Terima kasih telah terhubung.",
      error: "Gagal mengirim email. Silakan coba lagi nanti.",
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_46whamk",
        "template_84iw93k",
        form.current,
        "yavcax2urV4Zx71yC"
      )
      .then(
        () => {
          toast.success(texts[language].success);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          toast.error(texts[language].error);
        }
      );
  };

  return (
    <div className="w-full px-4 max-w-xl mx-auto">
      <Toaster position="top-center" reverseOrder={false} />

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col sm:flex-row bg-white text-black rounded-3xl shadow-md overflow-hidden sm:overflow-visible transition-all duration-200"
      >
        {/* Input */}
        <input
          type="email"
          name="user_email"
          placeholder={texts[language].placeholder}
          className="w-full px-5 py-4 text-base focus:outline-none rounded-t-3xl sm:rounded-t-none sm:rounded-l-3xl"
          required
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-primary text-white px-6 py-4 text-base font-semibold hover:brightness-110 transition sm:w-auto sm:rounded-r-3xl cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
