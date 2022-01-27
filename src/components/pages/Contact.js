import './Contact.css';
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
      <textarea rows="10" cols="80"{...register("message")} placeholder="Message..." />
      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}

{/* <input
    type="text"
    value={this.state.email}
    onChange={event => this.setState({email: event.target.value})
    onBlur={() => this.setState({
        emailIsValid: isValidEmailAddress(this.state.email)
    })
/> */}

// function Contact() {
//   return (
//     <div className="Contact div">
//       <p>Name</p>
//       <p>email</p>
//       <p>message</p>
//     </div>
//   );
// }

export default Contact;