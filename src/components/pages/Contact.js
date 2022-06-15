import { useState } from "react";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");

  return (
    <form onSubmit={handleSubmit((data) => setResult(JSON.stringify(data)))}>
      {/* <Header /> */}
      <input {...register("firstName")} placeholder="First name" />
      <br/>
      <input {...register("lastName")} placeholder="Last name" />
      <br/>
      <input {...register("email")} placeholder="email" />
      <br/>
      <input {...register("message")} placeholder="Message..." />
      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}

export default Contact;