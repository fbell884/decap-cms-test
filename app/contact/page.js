"use client";
import { sendContactForm } from "@/lib/api";
import { useState } from "react";
import Banner from "@/components/Banner";
import { Button } from "react-bootstrap";

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
    <>
      <Banner bgColor="lightBlueBg" h1Text="Contact Us!" subheadingText="We usually respond within 24-48hrs." />
      <div className="container py-5">
        <div className="row justify-content-center">
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
            <Button className="turquoiseBg" onClick={onSubmit}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
