import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { PageInfo } from "@/typings";

type Props = { pageInfo: PageInfo };

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit = (formData: Inputs) => {
    const emailBody = `Hi, my name is ${formData.name}. ${formData.message}\n(${formData.email})`;
    window.location.href = `mailto:ajay.dev2103@gmail.com?subject=${formData.subject}&body=${emailBody}`;
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
        {/* <h4 className="text-lg  sm:text-3xl md:text-4xl xl:text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="underline decoration-[#1da1f2]">Lets Talk </span>
        </h4> */}

        <div className="flex flex-col space-y-5">
          <div
            className="flex items-center space-x-3 justify-center"
            onClick={handlePhoneNumberClick}
          >
            {/* <PhoneIcon className="text-sky-400 h-4 w-4 animate-pulse" /> */}
            <p className="text-sm md:text-xl xl:text-lg">
              {pageInfo.phoneNumber}
            </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-sky-400 h-4 w-4 animate-pulse" />
            <p className="text-sm md:text-xl xl:text-lg">{pageInfo.email}</p>
          </div>

          {/* <div className="flex items-center space-x-3 justify-center">
            <MapPinIcon className="text-sky-400 h-4 w-4 animate-pulse" />
            <p className="text-sm md:text-xl xl:text-lg">{pageInfo.address}</p>
          </div> */}
        </div>

        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col  w-fit space-y-1 lg:space-y-3 lg:w-fit"
        >
          <div className="flex space-x-1 lg:space-x-3">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="text"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-sky-400 py-3 px-3 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form> */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md mx-auto mt-8 p-4 shadow-md rounded-md"
        >
          <div className="grid grid-cols-2 gap-1 mb-4">
            <input
              type="text"
              name="name"
              // value={formValues.name}
              // onChange={handleChange}
              placeholder="Name"
              className="contactInput"
              required
            />
            <input
              type="email"
              name="email"
              // value={formValues.email}
              // onChange={handleChange}
              placeholder="Email"
              className="contactInput"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="subject"
              // value={formValues.subject}
              // onChange={handleChange}
              placeholder="Subject"
              className="contactInput"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              // value={formValues.message}
              // onChange={handleChange}
              placeholder="Message"
              rows={4}
              className="contactInput"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
