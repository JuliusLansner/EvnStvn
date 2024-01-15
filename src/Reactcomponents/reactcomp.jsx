
//using react components to demonstrate its use
// displaying individual items
const Item = ({name}) => {
    return <li>{name}</li>
}
//displaying a list of items
const ListOfItems = ({items})=> {
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
         <ListOfItems items = {itemList} /> 
        </>
    )
}