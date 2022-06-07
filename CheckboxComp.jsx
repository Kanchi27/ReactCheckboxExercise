import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [isSelectAllChecked,setSelectAll] = useState(false);
  const [isChecked,setChecked] = useState([false,false,false,false]);
  const toggleSelectAll = ({target : {checked :isCheck}}) => {
    // const isCheck = e.target.checked;
    setSelectAll(isCheck);
    setChecked(isChecked.map(() => isCheck))
  }

  const toggleIndividual = (e,index) => {
    const updateVal = isChecked.map((curr,i) => index===i ? e.target.checked : curr );
    updateVal.every((curr) => curr) ? setSelectAll(true) : setSelectAll(false);
    setChecked(updateVal)
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input type="checkbox" checked={isSelectAllChecked} onChange={toggleSelectAll}/>
      <h2>Start editing to see some magic happen!</h2>
      {[0,1,2,3].map(index => {
        return (
          <input key={index} type="checkbox" checked={isChecked[index]} onChange={(e)=> toggleIndividual(e,index)}/>
        )
      })}
    </div>
  );
}
