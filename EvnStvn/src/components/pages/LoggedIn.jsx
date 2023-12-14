import {useState, useEffect} from 'react';
function LoggedIn({facade}) {
    const [data,setData] = useState('... ...');

    useEffect(() => {
        facade.fetchData('hotels','GET').then((data) => setData(data));
    }, []);
    return (<div>
        welcome
    </div>  );
}

export default LoggedIn;