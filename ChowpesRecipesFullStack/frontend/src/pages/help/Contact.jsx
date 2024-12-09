import { useState, useContext } from "react";
import { UserContext } from "../../layout/RootLayout";

export default function Contact() {

  const { user, setUser } = useContext(UserContext);
  console.log(user);

  async function commentHandler(e) {
    e.preventDefault();
    console.log(e.target);
    const data = {
      comments: [
        ...user.comments,
        { email: commentEmail.value, comment: commentText.value },
      ],
    };
    console.log(data);

    const text = await fetch(`http://localhost:3000/users/${user._id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
    const result = await text.json();
    console.log(result);
    setUser(result);
    commentEmail.value = ''
    commentText.value = ''
  }

  return (
    <>
      <section className="contactMain container-fluid">
        <form
          className="form d-flex flex-column gap-4"
          onSubmit={commentHandler}
        >
          <h1 className="mt-5">Contact Us</h1>
          <input
            type="email"
            className="form-control contactInp"
            name="commentEmail"
            id="commentEmail"
            placeholder="name@example.com"
          />

          <textarea
            className="form-control contactInp"
            name="commentText"
            id="commentText"
            rows="3"
            placeholder="Comments"
          ></textarea>

          <button
            type="submit"
            className="contactSubBtn btnStyle mx-auto"
            disabled={user ? false : true}
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
