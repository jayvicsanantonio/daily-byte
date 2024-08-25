import { FormEvent } from "react";

const SUBMIT_URL = "http://localhost:5173/";

export default async function submitForm(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const form: HTMLFormElement = event.target as HTMLFormElement;

  try {
    if (form.action !== SUBMIT_URL) {
      alert("Incorrect form action value");
      return;
    }

    if (form.method.toLowerCase() !== "post") {
      alert("Incorrect form method value");
      return;
    }

    const formData = new FormData(form);
    const response = await fetch(SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    const text = await response.text();
    console.log(text);
    // alert(text);
  } catch (error) {
    console.error(error);
    alert("Error submitting form!");
  }
}
