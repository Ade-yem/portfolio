"use server";
import emailjs from "@emailjs/browser";
import { RefObject } from "react";

export const sendMessage = async (form: RefObject<HTMLFormElement>) => {
  const publicKey = process.env.NEXT_PUBLIC_KEY as string;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
  if (form.current) {
    const data = await emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
    console.log(data);
  } else {
    console.log('Form is not available');
  }
};
