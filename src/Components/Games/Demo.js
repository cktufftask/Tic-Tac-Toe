import React,{useState} from 'react'
import { useSelector } from "react-redux";


function Demo() {
    const [mat,setMat]= useState(Array(9).fill(null));
    const matrix = useSelector((state) => state.matrix);
    const order = useSelector((state) => state.order);
    const onClickHandler=(e)=>{
        let x= parseInt(e.target.value);
        let matCopy = [...mat];
        matCopy[x] = matrix[x];
        console.log(matCopy);
        setMat(matCopy );
    }
const btn= order.map((x,index) =>  
     (<button className="slider" key={index+'-btn-demo'} value={x} onClick={(e)=>onClickHandler(e)}>{''}</button>)
);
const list = mat.map((i, index) => <div   className="btn btn-default game-fonts"
 key={index+'-box-demo'} >{i}</div>);
    return (
        <div className="demo">
            <div className="btn-group btn-matrix">
                {list}
            </div>
            <div>
                {btn}
            </div>
        </div>
    )
}



export default Demo

