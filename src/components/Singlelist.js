import React from "react"

function Singlelist(props){
    return (
        <div className="li-container">
            <div><li className="new-li">{props.value}</li></div>
            <div><button className="del-btn">delete</button></div>
            <div><button className="edit-btn">edit</button></div>
        </div>
    )
}

class List extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            years : [],
            key : 'key-'.concat(Math.floor(Math.random()*100))
                        .concat(Math.floor(Math.random)*100)
        }

        this.setState([...this.state.years , newYear])
    }

    renderSinglelist(num){
        return(
            <Singlelist />
        )
    }

    render(){

        let newYear = window.prompt("enter year :")

        return(

            <div className="list">
                <ul>
                    {this.renderSinglelist()}
                </ul>
            </div>

        )
    }

}

export default List