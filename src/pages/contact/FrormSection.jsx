import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";

const posters = [
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740754773/Danish%20IT/pyzurauiaiwzajv851bo.gif",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740754778/Danish%20IT/r63hxml6py8ztnvorky3.gif",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740754745/Danish%20IT/gp8swx7sq6xeuiszo7js.gif",
  //   "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740754740/Danish%20IT/oux39aycjqwue796oqmf.gif"
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740755600/Danish%20IT/hy2u2zbrxuvhd1cwynpl.gif",
  "https://res.cloudinary.com/dfyfvcrkd/image/upload/v1740755601/Danish%20IT/x7h07bszobvqfontkrye.gif",
];

const servicesList = [
  "Software Development",
  "Android & iOS App Development",
  "Advertising Company",
  "Business Profile Creation",
  "Logo Designs",
  "Website Development & Designing",
  "Cloud Services",
  "YouTube Monetization",
  "SEO for Websites & Blogs",
  "E-commerce Marketing",
];

const onSubmit = (data) => {
  console.log("Form Data:", data);
};
function FrormSection() {
  const [index, setIndex] = useState(0);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % posters.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section
      className="relative  py-9 md:py-0 bg-black contact-form-section min-h-screen h-auto bg-cover bg-center bg-no-repeat md:flex-row flex-col  flex justify-start items-center transition-all duration-500"
      style={{
        backgroundImage: `url(${posters[index]})`,
      }}
    >
      {/* Text / Headings  */}
      <div className="md:h-full h-1/2 md:w-1/2 w-[90%] flex-col flex justify-around items-center">
        <div className="md:w-[60%] w-full  backdrop-blur-lg rounded-lg p-4 shadow-sm shadow-white text-white">
          <h1 className="md:text-4xl text-3xl font-bold">
            We are here to help
          </h1>
          <p className="md:text-lg text-sm">
            Let's get this conversation started. Tell us a bit about yourself,
            and we'll get in touch as soon as we can.
          </p>
        </div>
        {/* Desktop -- career Apply */}
        <div className="w-[70%] backdrop-blur-lg  shadow-sm shadow-white mt-10  hidden md:block rounded-lg p-4 text-white">
          <h1 className="text-4xl  font-bold">
            Looking to learn about careers at DTH?
          </h1>
          <p className="text-lg">
            We do not accept applications via this form. To apply for roles,
            please review our portal here.
          </p>
          <button
            disabled
            className="bg-appOrange py-2 text-sm px-4 rounded-lg mt-5"
          >
            Apply
          </button>
        </div>
      </div>
      {/* Form */}
      {/* Form Section */}

      <div className="md:h-full h-1/2 md:w-1/2 w-[90%] flex-col py-10 flex justify-around items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-auto md:w-[80%] w-full rounded-lg backdrop-blur-lg border text-white md:p-6 p-3 space-y-4"
        >
          {/* Name Fields */}

          <div className="flex w-full md:flex-row flex-col  items-center gap-1">

            <div className="md:w-1/2 w-full" >
              <label className="block">
                First Name <span className="text-appOrange">*</span>
              </label>
              <input
                {...register("firstName", {
                  required: "First name is required",
                })}
                className="bg-transparent border-[2px] border-[#ffffff5b]  w-full focus:border-white py-[2px] pl-1 rounded-md outline-none"
                // placeholder="John"
              />
              {errors.firstName && (
                <p className="text-appOrange backdrop-blur-2xl">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className="md:w-1/2 w-full" >
              <label className="block">
                Last Name <span className="text-appOrange">*</span>
              </label>
              <input
                {...register("lastName", {
                  required: "Last name is required",
                })}
                type="text"
                className="bg-transparent w-full border-[2px] border-[#ffffff5b]  focus:border-white py-[2px] pl-1 rounded-md outline-none"
                // placeholder="d"
              />
              {errors.lastName && (
                <p className="text-appOrange backdrop-blur-2xl">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>

          {/* Email & Company */}
          <div className="flex w-full md:flex-row flex-col  items-center gap-1">
            <div className="md:w-1/2 w-full">
              <label className="block">
                Work email address <span className="text-appOrange">*</span>
              </label>
              <input
                {...register("email", {
                  required: "Email address is required",
                })}
                className="bg-transparent border-[2px] w-full border-[#ffffff5b]  focus:border-white py-[2px] pl-1 rounded-md outline-none"
                type="email"
              />
              {errors.email && (
                <p className="text-appOrange backdrop-blur-2xl">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="md:w-1/2 w-full" >
              <label className="block">
                Company Name <span className="text-appOrange">*</span>
              </label>
              <input
                {...register("companyName", {
                  required: "Company name is required",
                })}
                className="bg-transparent w-full border-[2px] border-[#ffffff5b]  focus:border-white py-[2px] pl-1 rounded-md outline-none"
                type="text"
              />
              {errors.companyName && (
                <p className="text-appOrange backdrop-blur-2xl">
                  {errors.companyName.message}
                </p>
              )}
            </div>
          </div>

          {/* Country Selection */}

          <CountrySelector
            register={register}
            errors={errors}
            setValue={setValue}
          />

          {/* Help Message */}
          <div>
            <label className="block">
              How can we help? <span className="text-appOrange">*</span>
            </label>
            <textarea
              {...register("help", { required: "This field is required" })}
              className="input-field h-24 bg-transparent w-full border-[2px] border-[#ffffff82] placeholder:text-white mt-1 focus:border-white rounded-md p-2 outline-none resize-none"
              placeholder="Describe your needs..."
            />
            {errors.help && (
              <p className="text-appOrange">{errors.help.message}</p>
            )}
          </div>
          {/* Services Checkboxes */}
          <div>
            <label className="block">
              Products/Services <span className="text-appOrange">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {servicesList.map((service, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    {...register("services")}
                    value={service}
                    className="accent-orange-500"
                  />
                  <span>{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default FrormSection;

const CountrySelector = ({ register, errors, setValue }) => {
  
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const formattedCountries = data.map((country) => ({
          value: country.name.common,
          label: (
            <div className="flex items-center gap-2">
              <img
                src={country.flags.svg}
                alt={country.name.common}
                className="w-5 h-5 rounded-full"
              />
              {country.name.common}
            </div>
          ),
        }));
        setCountries(formattedCountries);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return (
    <div className="bg-transparent  p-2">
      <label className="block text-white">
        Country <span className="text-appOrange">*</span>
      </label>
      <Select
        {...register("country")}
        options={countries}
        className="mt-1 bg-transparent placeholder:text-white text-white"
        placeholder="Choose a country"
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "transparent", // Transparent background
            borderColor: "white", // White border
            color: "white", // White text
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "orange", // Orange dropdown background
            backdropFilter: "blur(10px)",
          }),
          menuList: (base) => ({
            ...base,
            backgroundColor: "orange", // Ensures dropdown background stays orange
          }),
          option: (base, { isFocused, isSelected }) => ({
            ...base,
            backgroundColor: isSelected
              ? "white"
              : isFocused
              ? "white"
              : "orange", // White on hover/selected
            color: isSelected ? "orange" : isFocused ? "orange" : "white", // Orange text on hover/selected
          }),
          singleValue: (base) => ({
            ...base,
            color: "white", // White text for selected value
          }),
          placeholder: (base) => ({
            ...base,
            color: "white", // Slightly faded placeholder
          }),
          input: (base) => ({
            ...base,
            color: "white",
          }),
          noOptionsMessage: (base) => ({
            ...base,
            backgroundColor: "orange",
            color: "white", // White text
            padding: "10px", // Padding for better visibility
            textAlign: "center", // Center text
            fontWeight: "bold",
          }),
        }}
        onChange={(selected) => setValue("country", selected.value)}
      />
      {errors.country && (
        <p className="text-appOrange">{errors.country.message}</p>
      )}
    </div>
  );
};
