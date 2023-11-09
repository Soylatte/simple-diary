import React,{useEffect, useState} from "react";

const UnmountTest = () => {

    useEffect(()=>{
        console.log("Mount!");
        return () => {
            console.log("Unmount!");
        }

    },[])
    return <div>Unmount Testing Component</div>
}

const Lifecycle = () => {
    const [isVisible, setiIsVisible] = useState(false);
    const toggle = () => setiIsVisible(isVisible);
    return (
        <div style={{padding: 20}}>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnmountTest />}

        </div>

    )
    }

}
export default Lifecycle;