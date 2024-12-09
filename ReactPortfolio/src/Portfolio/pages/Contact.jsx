import { useState } from "react";
export default function Contact() {
  const [pressed, setPressed] = useState(false);

  function contactSubmit(e) {
    e.preventDefault();
    e.target.email.value = "";
    e.target.text.value = "";
  }

  return (
    <div className="contactMain">
      <h1 className="contactPageTitle">Contact Me</h1>
      <form action="" className="contactForm" onSubmit={contactSubmit}>
        <div className="w-75 mx-auto">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              name="email"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <textarea
              type="text"
              style={{ height: 400 }}
              className="form-control"
              name="text"
              id="floatingPassword"
              placeholder="Text"
            ></textarea>
            <label htmlFor="floatingPassword">Enter Text</label>
          </div>
          <div className="contactBtnDiv">
            <button
              type="submit"
              className="contactBtn"
              onMouseDown={() => setPressed(true)}
              onMouseUp={() => setPressed(false)}
            >
              {pressed ? (
                <img
                  src="/assets/button_down.png"
                  className="contactBtnImg"
                  alt="button"
                />
              ) : (
                <img
                  src="/assets/button.png"
                  className="contactBtnImg"
                  alt="button"
                />
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
