import React from 'react';
import axios from 'axios';
import Top from '../components/Top';
import FeedList from '../components/FeedList';


const Feed = () => {
    const [data, setData] = React.useState([]);
   
       React.useEffect(()=>{
        axios.get(`${process.env.PUBLIC_URL}/data/user.json`)
            .then((response) =>{
                setData(response.data);
            })
       }, [])
    
    
    console.log(data);
    
    return (
        <div>
            <Top />
            <FeedList user={data.user}/>
        </div>
    );
};

export default Feed;