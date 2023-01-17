import Blue01 from "./assets/blue1.svg"
import Blue02 from "./assets/blue2.svg"
import Blue03 from "./assets/blue3.svg"
import Blue04 from "./assets/blue4.svg"
import Blue05 from "./assets/blue5.svg"
import Blue06 from "./assets/blue6.svg"
import Red01 from "./assets/red1.svg"
import Red02 from "./assets/red2.svg"
import Red03 from "./assets/red3.svg"
import Red04 from "./assets/red4.svg"
import Red05 from "./assets/red5.svg"
import Red06 from "./assets/red6.svg"
import './Dics.css';


const diceImg ={
    blue:[Blue01,Blue02,Blue03,Blue04,Blue05,Blue06],
    red:[Red01,Red02,Red03,Red04,Red05,Red06]
}


function Dics({color,num=1}){
    // const diceImg=color ==='red' ? Red01: Blue01;
    const src= diceImg[color][num-1];
    const alt= `${color}${num}`;
    return(
        <img src={src} alt={alt}/>
    )
}





export default Dics;