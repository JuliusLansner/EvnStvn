import { useState } from "react";  

export default function Page(){
    const [activePage, setActivePage] = useState(0);
    return (
        <>
            <h2> Pages to click</h2>
            <Panel
            title="first page"
            isActive={activePage === 0}
            onShow={() => setActivePage(0)}>
                This happens to be the first page
            </Panel>
            <Panel
            title="second page"
            isActive={activePage === 1}
            onShow={() => setActivePage(1)}>
            this happens to be the second page holy moly
            </Panel>


        </>
    );
}

function pagePanel({title,children,isActive,onShow}){
    return(
        <section className="page">
            <h3>{title}</h3>
            {isActive ? (<p>{children}</p>) :
            (<button onClick={onShow}>show</button>)}
        </section>
    )

}