import {useContext} from 'react';
import Favouritcontext from '../store/favourite-context';
import Meetuplist from '../components/meetups/Meetuplist';
import Meetupitem from '../components/meetups/Meetupitem';
function Favourits()
{
    const favouritctx = useContext(Favouritcontext);
    
    let content;
    if (favouritctx.totalfavourits === 0) {
        content = <p>You Got No Favorits Yet, Add some!</p>
    }
    else{
        content = <Meetuplist meetups={favouritctx.favourits}/>
        
    }

    return <section>
        <h1>My Favourits</h1>
        {content}

    </section>;
}

export default Favourits;