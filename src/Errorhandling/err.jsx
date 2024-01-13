import React, {useState, useEffect} from 'react';
const ErrorBoundary = ({children}) =>{
    const [hasError, setHasError] = useState(false);
    useEffect(()=> {
        const handleError =(error,info) => {
            console.error(error,info);
            setHasError(true);
        }
        window.addEventListener('error',handleError);
        return () => {
            window.removeEventListener('error',handleError);
        }
    },[])
    if(hasError){
        return <h1>somethign</h1>
    }
    return children;
}
const myComp = () =>{
    return (
        <ErrorBoundary>
            
        </ErrorBoundary>
    )
}