import { useRef } from "react";
import classes from "./Newmeetupform.module.css";
import Card from "../ui/Card";

function Newmeetupform() {
  const titleinputref = useRef();
  const imageinputref = useRef();
  const addressinputref = useRef();
  const descriptioninputref = useRef();

  function submithandler(event) {
    event.preventDefault();

    const enteredtitle = titleinputref.current.value;
    const enteredimage = imageinputref.current.value;
    const enteredaddress = addressinputref.current.value;
    const entereddescription = descriptioninputref.current.value;

    const meetupdata = {
      title: enteredtitle,
      image: enteredimage,
      address: enteredaddress,
      description: entereddescription,
    };
    console.log(meetupdata);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submithandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleinputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageinputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressinputref} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptioninputref}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default Newmeetupform;
