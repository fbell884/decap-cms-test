"use client";
import { sendContactForm } from "@/lib/api";
import { useState } from "react";
// import { sendContactForm } from "../lib/api";

const initValues = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const initState = { values: initValues };

export default function Contact() {
  const [state, setState] = useState(initState);
  const { values } = state;

  const handleChange = ({ target }) =>
    setState(prev => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value
      }
    }));

  const onSubmit = async e => {
    e.preventDefault();
    setState(prev => ({
      ...prev
    }));
    console.log(state);
    try {
      await sendContactForm(values);
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: error.message
      }));
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="text-center">Contact Us!</h1>
        {state.error && <p>{state.error}</p>}
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" name="name" className="form-control" id="name" value={values.name} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={values.email} onChange={handleChange} />
            <div id="emailHelp" className="form-text">
              We&apos;ll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input type="text" className="form-control" id="subject" name="subject" value={values.subject} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea type="text" className="form-control" id="message" name="message" value={values.message} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={onSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
