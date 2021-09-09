import Meetupitem from "./Meetupitem";
import classes from "./Meetuplist.module.css";

function Meetuplist(props) {
    return (
        <ul className={classes.list}>
            {props.meetups.map((item) =>(
                <Meetupitem 
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                address={item.address}
                description={item.description}
                />

            ))
            }

        </ul>
    )
}
export default Meetuplist;