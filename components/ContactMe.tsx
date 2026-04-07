import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PageInfo } from "@/typings";
import { motion } from "framer-motion";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  mobile: number;
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
          theme: "dark",
        });
        reset(); 
      } else {
        toast.error("Failed to send message.", { theme: "dark" });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message.", { theme: "dark" });
    }
  };

  const handlePhoneNumberClick = () => {
    if (pageInfo.phoneNumber) {
      window.location.href = `tel:${pageInfo.phoneNumber}`;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative min-h-screen text-center md:text-left max-w-7xl px-6 mx-auto items-center justify-center pt-32 pb-32"
    >
      <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-[#D4AF37]/80 text-xl md:text-2xl mb-16 md:mb-20 font-bold text-center drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
        Contract Me
      </h3>

      <div className="flex flex-col space-y-10 w-full max-w-2xl mx-auto z-10 relative">
        {/* Glow backdrop */}
        <div className="absolute inset-0 bg-[#8A0303]/10 blur-[100px] rounded-full -z-10" />

        <div className="flex flex-col space-y-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 justify-center text-[#D4AF37] cursor-pointer hover:underline underline-offset-8 decoration-[#8A0303]/80 decoration-2 transition-all"
            onClick={handlePhoneNumberClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-pulse">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
            </svg>
            <p className="text-xl md:text-3xl font-light tracking-wider">
              {pageInfo.phoneNumber}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-4 w-full p-8 md:p-10 bg-[#0a0a0a]/80 backdrop-blur-xl border-y border-[#D4AF37]/20 rounded-md shadow-[0_0_40px_rgba(138,3,3,0.15)]"
            >
              <div className="flex flex-col md:flex-row gap-4">
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
              
              <input
                type="text"
                placeholder="Mobile"
                className="contactInput"
                {...register("mobile", { required: true })}
              />
              
              <input
                type="text"
                placeholder="Subject"
                className="contactInput"
                {...register("subject", { required: true })}
              />

              <textarea
                placeholder="Message"
                rows={5}
                className="contactInput"
                {...register("message", { required: true })}
              ></textarea>
              
              <button
                type="submit"
                className="group relative w-full bg-transparent overflow-hidden text-[#D4AF37] border border-[#D4AF37] border-opacity-50 hover:border-transparent py-4 rounded-sm font-bold uppercase tracking-widest text-sm transition-all duration-300 mt-2 shadow-[0_0_15px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(138,3,3,0.4)]"
              >
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#8A0303] to-[#8A0303]/80 transition-all duration-500 ease-out group-hover:w-full" />
                <span className="relative group-hover:text-white transition-colors duration-300">
                  Accept Contract
                </span>
              </button>
            </form>
          </motion.div>
          
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
    </motion.div>
  );
}

export default ContactMe;
