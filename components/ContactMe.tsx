import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PageInfo } from "@/typings";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit, reset } = useForm<Inputs>();

  const onSubmit = async (formData: Inputs) => {
    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        reset(); // Reset form after successful submission
      } else {
        toast.error("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message.");
    }
  };

  const handlePhoneNumberClick = () => {
    if (pageInfo.phoneNumber) {
      window.location.href = `tel:${pageInfo.phoneNumber}`;
    }
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly lg:mx-auto items-center">
      <h3 className="absolute ml-6 lg:ml-10 top-24 uppercase tracking-[20px] text-md text-gray-500">
        Contact
      </h3>

      <div className="flex flex-col space-y-6 mt-32">
        <div className="flex flex-col space-y-5">
          <div
            className="flex items-center space-x-3 justify-center"
            onClick={handlePhoneNumberClick}
          >
            <p className="text-sm md:text-xl xl:text-lg">
              {pageInfo.phoneNumber}
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto mt-8 p-4 shadow-md rounded-md"
          >
            <div className="grid grid-cols-2 gap-1 mb-4">
              <input
                type="text"
                placeholder="Name"
                className="contactInput"
                {...register("name", { required: true })}
              />
              <input
                type="email"
                placeholder="Email"
                className="contactInput"
                {...register("email", { required: true })}
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Subject"
                className="contactInput"
                {...register("subject", { required: true })}
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                rows={4}
                className="contactInput"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
            >
              Submit
            </button>
          </form>
          {/* Toast Container for react-toastify */}
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
