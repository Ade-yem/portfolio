export const ContactMeTemplate = ({
  subject,
  message,
  firstName,
  lastName,
  phone,
  email,
}: {
  subject: string;
  message: string;
  firstName: string;
  phone: string;
  email: string;
  lastName: string;
}) => {
  return (
    <div className="leading-8 tracking-wide text-justify">
      <h1 className="text-xl">{subject}</h1>
      <h2>Hi there!</h2>
      <p>
        I am {firstName} {lastName}
      </p>
      <p className="leading-8 text-left">{message}</p>
      <p>Best Regards</p>
      <p>
        {firstName} {lastName}
      </p>
      <p>
        {email}
      </p>
      <p>
        {phone}
      </p>
    </div>
  );
};
