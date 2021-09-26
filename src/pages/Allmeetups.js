import Meetuplist from "../components/meetups/Meetuplist";
import { useState, useEffect } from "react";
import Meetupitem from "../components/meetups/Meetupitem";

/*const DUMMY_DATA = [
    {
      id: 'm1',
      title: 'This is a first meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
    {
      id: 'm2',
      title: 'This is a second meetup',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
      address: 'Meetupstreet 5, 12345 Meetup City',
      description:
        'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
    },
  ]; */
function Allmeetups() {
  const [isloading, setisloading] = useState(true);
  const [loadedmeetups, setloadedmeetups] = useState([]);
  useEffect(
    () => {
      setisloading(true);

      fetch(
        "https://react-meetup-30bd5-default-rtdb.firebaseio.com/meetups.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const meetups = [];

          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key],
            };
            meetups.push(meetup);
          }
          setisloading(false);
          setloadedmeetups(meetups);
        });
    },
    [
      /*here we add extrenal dependencies like props other than state functions function but here is not any.*/
    ]
  );
  if (isloading) {
    return (
      <section>
        <h3>Loading...</h3>
      </section>
    );
  }

  return (
    <section>
      <h1>All meetups</h1>
      <Meetuplist meetups={loadedmeetups} />
    </section>
  );
}

export default Allmeetups;
