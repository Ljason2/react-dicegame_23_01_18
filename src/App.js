import Button from "./Button";
// import Dics from "./Dics";
import { useState } from "react";
import Border from "./Border"

import './App.css';

function App(){
    
    
    // const [num,setNum] =useState(1);
    // const [sum,setSum] =useState(0);
    const [myHistory,setMyHistory]= useState([]);
    const [otherHistory,setOtherHistory]= useState([]);



    function random(n){
        return Math.ceil(Math.random()*n)
    }


    function handleClick(){
        // console.log('1')
        const nextMyNum = random(6);
        const nextOtherNum = random(6);
        setMyHistory([...myHistory,nextMyNum]);
        setOtherHistory([...otherHistory,nextOtherNum]);
    }


    function resetClick(){
        setMyHistory([])
        setOtherHistory([])
    }
    return(
        <div id="box">
            <div id="btn">
                <Button
                onClick={handleClick}
                >start</Button>
                <Button
                onClick={resetClick}
                >reset</Button>

            </div>

            <div id="container">
                <Border 
                name="A팀" color="blue" gameHistory={myHistory}/>
                <Border 
                name="B팀" color="red" gameHistory={otherHistory}/>
            </div>
        </div>
    );
}


export default App;


