import Newmeetupform from '../components/meetups/Newmeetupform';
import {useHistory} from'react-router-dom';
function Newmeetups()
{
    const history = useHistory();
    function addmeetuphandler(meetupdata){
        fetch(
            'https://react-meetup-30bd5-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body: JSON.stringify(meetupdata),
                headers: {
                    'content-type':'application/json'
                }
            }
        ).then(() => {
            history.replace('/'); //replace is to go previous page. to go on a new page history.push() is used.
        });
    }
    return <section>
        <h1>Add New Mettup</h1>
        <Newmeetupform onaddmeetup={addmeetuphandler}/>
    </section>;
}

export default Newmeetups;