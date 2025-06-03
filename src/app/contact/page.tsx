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
      <main className="container px:4 md:px-12 w-[30rem] mx-auto pb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl dark:text-white">Contact Us</h1>
        <form action={action} className="w-full mt-6 space-y-4">
            <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Name
            </label>
            <input name="name" type="text" className="dark:text-white text-black w-full mt-1 p-2 border border-gray-300 rounded-md" />
            </div>
           
            <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Email
            </label>
            <input name="email" type="email" className="dark:text-white text-black w-full mt-1 p-2 border border-gray-300 rounded-md" />
            </div>
            <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-white">
                Message
            </label>
            <textarea name="message" className="dark:text-white h-[10rem] text-black w-full mt-1 p-2 border border-gray-300 rounded-md"></textarea>
            </div>
            <button type="submit" className="cursor-pointer w-full mt-6 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Send</button>
        </form>
      </main>
      <Footer />
      </div>
    );
};

export default ContactPage;