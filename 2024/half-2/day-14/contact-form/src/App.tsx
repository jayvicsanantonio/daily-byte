import submitForm from "./submitForm";

export default function App() {
  return (
    <form
      method="post"
      action="https://www.greatfrontend.com/questions/user-interface/contact-form"
      onSubmit={submitForm}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
