import details from "@/services/details.json";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [submit, setSubmit] = useState<boolean>(false);
  const [message, setMessage] = useState<
    "Send Message" | "Sending" | "Success" | "Failed"
  >("Send Message");
  const form = useRef<HTMLFormElement>(null);
  const publicKey = process.env.NEXT_PUBLIC_KEY as string;
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmit(true);
    setMessage("Sending");

    if (form.current) {
      emailjs
        .sendForm(serviceId, templateId, form.current, publicKey)
        .then(
          () => {
            setSubmit(false);
            setMessage("Success");
          },
          (error) => {
            setSubmit(false);
            setMessage("Failed");
            console.error(error);
          }
        )
        .finally(() => {
          setSubmit(false);
          setMessage("Send Message");
          form.current?.reset();
        });
    }
  };
  return (
    <div className="flex justify-center items-center w-full">
      <div className="container mx-auto my-4 px-4 lg:px-20">
        <form
          onSubmit={(e) => handleSubmit(e)}
          ref={form}
          id="form"
          className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-md card"
        >
          <div className="flex">
            <h1 className="text-xl text-deep-green dark:text-custom-green animate-pulse">
              Let&lsquo;s connect
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              id="email"
              placeholder="Email*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone*"
            />
          </div>
          <div className="my-4">
            <textarea
              placeholder="Message*"
              name="message"
              id="message"
              className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="my-2">
            <button
              type="submit"
              className="text-sm dm-mono-regular tracking-wide text-black dark:text-custom-white hover:bg-opacity-25 hover:translate-x-1
                focus:outline-none focus:shadow-outline inline-flex"
            >
              {!submit ? (
                <div className="inline-flex space-x-1">
                  <span>{message}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>{" "}
                </div>
              ) : (
                <div>
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="inline w-6 h-6 text-custom-red animate-spin dark:text-custom-orange fill-gray-600 dark:fill-gray-300"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">{message}</span>
                  </div>
                </div>
              )}
            </button>
          </div>
        </form>

        <div className="w-full lg:-mt-96 lg:w-fit px-2 py-12 ml-auto bg-white dark:bg-dark-bg rounded-md card">
          <div className="flex flex-col space-y-3 p-2 text-white">
            <a
              href={`mailto:${details.email}`}
              className="flex justify-start space-x-3 items-center min-h-fit"
            >
              <div className="p-2 border border-slate-600">
                <svg
                  className="text-gray-800 dark:text-white fill-deep-green dark:fill-custom-green"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                  <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                </svg>
              </div>
              <div className="inline-block space-y-1">
                <span className=" text-gray-600 dark:text-gray-300">Email</span>
                <p className="text-gray-600 dm-mono-light-italic dark:text-white">
                  {details.email}
                </p>
              </div>
            </a>
            <a
              href={`tel:${details.phone}`}
              className="flex justify-start space-x-3 items-center min-h-fit"
            >
              <div className="p-2 border border-slate-600">
                <svg
                  className="text-gray-800 dark:text-white fill-deep-green dark:fill-custom-green"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
                </svg>
              </div>
              <div className="inline-block space-y-2">
                <span className=" text-gray-600 dark:text-gray-300">
                  Telephone
                </span>
                <p className="text-gray-600 dm-mono-light-italic dark:text-white">
                  {details.phone}
                </p>
              </div>
            </a>
            <a
              href={details.whatsapp}
              className="flex justify-start space-x-3 items-center min-h-fit"
            >
              <div className="p-2 border border-slate-600">
                <svg
                  className="text-deep-green dark:text-custom-green"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
                  />
                </svg>
              </div>
              <div className="inline-block space-y-2">
                <span className=" text-gray-600 dark:text-gray-300">
                  Whatsapp
                </span>
                <p className="text-gray-600 dm-mono-light-italic dark:text-white">
                  {details.whatsapp}
                </p>
              </div>
            </a>
            <a
              href={details.github}
              className="flex justify-start space-x-3 items-center min-h-fit"
            >
              <div className="p-4 border border-slate-600">
                <svg
                  className="text-gray-800 dark:text-white fill-deep-green dark:fill-custom-green"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="inline-block space-y-2">
                <span className=" text-gray-600 dark:text-gray-300">
                  Github
                </span>
                <p className="text-gray-600 dm-mono-light-italic dark:text-white">
                  {details.github}
                </p>
              </div>
            </a>
            <a
              href={details.linkedin}
              className="flex justify-start space-x-3 items-center min-h-fit"
            >
              <div className="p-4 border border-slate-600">
                <svg
                  className="text-gray-800 dark:text-white fill-deep-green dark:fill-custom-green"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clipRule="evenodd"
                  />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
              </div>
              <div className="inline-block space-y-2">
                <span className=" text-gray-600 dark:text-gray-300">
                  Linkedin
                </span>
                <p className="text-gray-600 dm-mono-light-italic dark:text-white">
                  {"Adeyemi Adejumo"}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
