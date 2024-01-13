function ParentComp(){
const handleParentClick = () => {
    console.log("clicked");
}
return (
<div onClick =  {handleParentClick}>
parent
<ChildComponent />
</div>)
}


function ChildComponent(){
    const handleChildClick = (e) => {
        //e.stopPropagation();
        console.log("child clicked");
    }
    return <button onClick={handleChildClick}></button>
}
export default ParentComp;