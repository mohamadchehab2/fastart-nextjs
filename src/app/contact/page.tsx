'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer"
import { useActionState } from "react";
import submitInquiry from "./actions";
import { useEffect } from "react";
import { Toaster, toast } from "sonner";
const ContactPage = () => {
    const [state, action] = useActionState(submitInquiry, null);

    useEffect(() => {
        if (state?.success) {
            toast.success("Your inquiry was submitted successfully!");
        }
    }, [state?.success]);

    return (
    <div className="flex flex-col min-h-screen text-white font-sans">
      <Toaster />
      <Header />
      <main className="min-h-screen mx-auto w-[350px] items-center justify-center py-0">
        <div className="w-full max-w-md bg-transparent p-0 rounded-lg">
          <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl dark:text-white text-center mb-6">Contact Us</h1>
          <form action={action} className="w-full space-y-4">
            <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Name
            </label>
            <input name="name" type="text" className="dark:text-white text-black w-full mt-1 p-2 border border-gray-300 rounded-md" required />
            </div>
           
            <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Email
            </label>
            <input name="email" type="email" className="dark:text-white text-black w-full mt-1 p-2 border border-gray-300 rounded-md" required />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Message
            </label>
            <textarea name="message" className="dark:text-white h-[10rem] text-black w-full mt-1 p-2 border border-gray-300 rounded-md" required></textarea>
            </div>
            <button type="submit" className="cursor-pointer w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Send</button>
        </form>
        </div>
      </main>
      <Footer />
      </div>
    );
};

export default ContactPage;