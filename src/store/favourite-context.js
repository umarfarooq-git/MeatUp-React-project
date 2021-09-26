import{useState} from 'react';
import React from 'react';

const Favouritcontext = React.createContext({
    favourits:[],
    totalfavourits: 0,
    addfavourite: (favouritemeetup) => {},
    removefavourite: (meetupid) => {},
    itemisfavourite:(meetupid) => {}
});
export function Favouritecontextprovider(props){
    const [userfavourits, setuserfavourits] = useState([]);

    function addfavouritehandler(favouritemeetup){
        setuserfavourits((prevuserfavourits) => {
            return prevuserfavourits.concat(favouritemeetup);

        });
    } 

    function removefavourithandler(meetupid){
        setuserfavourits(prevuserfavourits =>{
            return prevuserfavourits.filter(meetup => meetup.id !== meetupid);
        });
    }

    function itemisfavourithandler(meetupid){
        return userfavourits.some(meetup => meetup.id === meetupid);
    }

    const context ={ 
        favourits: userfavourits,
        totalfavourits: userfavourits.length,
        addfavourite: addfavouritehandler,
        removefavourite: removefavourithandler,
        itemisfavourite: itemisfavourithandler 
         
    };

    return (
        <Favouritcontext.Provider value={context}>
            {props.children}
        </Favouritcontext.Provider>
    );

}

export default Favouritcontext;