import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Search =({textChanged})=>{
    const onChangeHandler =(e)=>{
        const text = e.target.value;
        textChanged(text);
    }
   /*  const onClickHandler =()=>{
        const text = e.target.value;
        textChanged(text);
    } */
return(
        <div className="searchtext-anim">
            Music Search
            <div className="bar">
                <FontAwesomeIcon icon={faSearch}/>
                <input type="text" defaultValue="Search Songs..." onKeyUp={(e)=>onChangeHandler(e)} className="searchbar"/>
            </div>
            
            {/* <button onClick={onClickHandler}><FontAwesomeIcon icon={faSearch}/></button> */}
        </div>
)
}
export default Search;