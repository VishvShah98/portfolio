import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Form() {
  const [state, handleSubmit] = useForm("mpzerqww");
  if (state.succeeded) {
    return <p style={{ color: "#2ecc71" }}>Thank you!</p>;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#0F172A",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          maxWidth: "600px",
          padding: "30px",
          color: "#333",
          border: "1px solid #ccc",
          background: "#E6E6FA",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          fontFamily: "Open Sans, sans-serif",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            fontWeight: "600",
            fontSize: "1.5em",
            color: "black",
          }}
        >
          Get in touch!
        </h2>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Your email address"
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          style={{
            width: "100%",
            padding: "10px",
            height: "150px",
            marginBottom: "20px",
            resize: "none",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting}
          style={{
            width: "100%",
            padding: "10px",
            background: "#0F172A",
            color: "#fff",
            fontWeight: "700",
            borderRadius: "5px",
            fontFamily: "Arial, Helvetica, sans-serif",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
