import classes from './Meetupitem.module.css';
import Card from "../ui/Card";
import Favouritcontext from '../../store/favourite-context';
import {useContext} from 'react';

function Meetupitem(props){
    const favouritctx =useContext(Favouritcontext);
    const itemisfavourite = favouritctx.itemisfavourite(props.id);

    function togglefavourite(){
        if (itemisfavourite){
            favouritctx.removefavourite(props.id);
        }
        else{
            favouritctx.addfavourite({
                id:props.id,
                image:props.image,
                address:props.address,
                title:props.title,
                description:props.description,
            });
        }

    }
    return(
        <li className={classes.item}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.title}/>
            </div>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={togglefavourite}>{itemisfavourite ? 'remove from favourite' : 'To Favourite'}</button>
            </div>
            </Card>
        </li>
    );
}
export default Meetupitem;