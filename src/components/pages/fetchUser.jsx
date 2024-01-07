import { useState,useEffect } from "react";

function fetchUser({facade}) {

const [data,setData] = useState('...')



    useEffect(() => {
        facade.fetchData('hotels','GET').then((data) => setData(data))
    }, []);

    return (<div>
        {data}
    </div>  );
}

export default fetchUser;