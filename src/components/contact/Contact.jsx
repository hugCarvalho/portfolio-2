"use client";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors }} = useForm();

  const [isLoading, setIsLoading] = React.useState(false);

  const sendEmail = (params) => {
    setIsLoading(true);
    const toastId = null

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 5000, // limits sending email: no more than 1 email per 5 seconds
          },
        }
      )
      .then(
        () => {
          console.log("SUCCESS")
          setIsLoading(false);
          toast.success(
            "Message sent, I will get back to you soon!",
            {
              id: toastId,
            }
          );
        },
        (error) => {
          setIsLoading(false);
          toast.error(
            "There was an error sending your message, please try again later.",
            {
              id: toastId,
            }
          );
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    sendEmail(templateParams);
  };
  return (
    <>
      <Toaster richColors={true} />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.h1
          initial="hidden"
          animate="show"
          variants={item}
          className="pb-6 text-accent font-semibold text-center text-5xl capitalize"
        >
          Contact Me
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="show"
          variants={item}
          className="flex font-semibold"
        >
          <Mail className="pr-2" strokeWidth={.7}/>
          <a href="mailto:hugo.berlinlife@gmail.com?subject=contact">hugo.berlinlife@gmail.com</a>
        </motion.p>
        <motion.p
          initial="hidden"
          animate="show"
          variants={item}
          className="flex font-semibold"
        >
          <Phone className="pr-1" strokeWidth={.7}/>
          <a href="tel:+4917678293187">+49 176 7829 3187</a>
        </motion.p>
        <motion.p
          initial="hidden"
          animate="show"
          variants={item}
          className="pt-6 flex items-center text-accent font-semibold text-center: "
        >
          Or write a message below:
        </motion.p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
        >
          <motion.input
            variants={item}
            type="text"
            placeholder="name and/or company"
            {...register("name", {
              required: "This field is required!",
            })}
            className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          />
          {errors.name && (
            <span className="inline-block self-start text-accent">
              {errors.name.message}
            </span>
          )}
          <motion.input
            variants={item}
            type="email"
            placeholder="email"
            {...register("email", { required: "This field is required!" })}
            className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          />
          {errors.email && (
            <span className="inline-block self-start text-accent">
              {errors.email.message}
            </span>
          )}
          <motion.textarea
            variants={item}
            placeholder="message"
            {...register("message", {
              required: "This field is required!",
              maxLength: {
                value: 500,
                message: "Message should be less than 500 characters",
              },
              minLength: {
                value: 10,
                message: "Message should be more than 10 characters",
              },
            })}
            className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          />
          {errors.message && (
            <span className="inline-block self-start text-accent">
              {errors.message.message}
            </span>
          )}
          <motion.button
            disabled={isLoading}
            variants={item}
            className="min-w-[233px] px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
              hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize
            "
            type="submit"
          >
            {`${isLoading ? "⏳" : "Send your message"}`}
          </motion.button>
        </form>
      </motion.div>
    </>
  );
}
