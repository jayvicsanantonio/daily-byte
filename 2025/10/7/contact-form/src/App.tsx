import submitForm from './submitForm.ts';

export default function App() {
  return (
    <form
      onSubmit={submitForm}
      action="https://questions.greatfrontend.com/api/questions/contact-form"
      method="post"
    >
      <div>
        <label htmlFor="name-input">Name</label>
        <input id="name-input" type="text" name="name" />
      </div>
      <div>
        <label htmlFor="email-input">Email</label>
        <input id="email-input" type="email" name="email" />
      </div>
      <div>
        <label htmlFor="message-input">Message</label>
        <textarea id="message-input" name="message" />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
