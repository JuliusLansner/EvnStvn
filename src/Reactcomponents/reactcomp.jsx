
//using react components to demonstrate its use
// displaying individual items
const item = ({name}) => {
    return <li>{name}</li>
}
//displaying a list of items
const listOfItems = ({items}){
    return ( 
        <ul>
        {items.map((item,index)=> (
            <Item key={index} name={item}/>
        ))}
        </ul>
    )
};

//main app component
const App = () =>{
    const itemList = ["1","2","3"];
    
    return (
        <>
         <h1> My React App</h1>  
         <List items = {itemsList} /> 
        </>
    )
}