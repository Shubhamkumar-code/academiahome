import React from "react"



function List(props){

    return(
        <div id = {props.id} className="li-container">
            <div><li className="new-li">{props.children}</li></div>
            
            <div><button className="edit-btn">edit</button></div>
            <div><button className="del-btn" onClick={props.delEvent}>delete</button></div>
        </div>
    )

}

export default List