import React from "react"
import "./Main.css"
import Data from "./Data"
import List from "./List"

class Main extends React.Component{
    constructor(props){
        super(props)

        this.state = { 
                        Data : Data
                    }

    }

    deleteUser = (index, e) => {
        const Year = Object.assign([], this.state.Data)
        Year.splice(index, 1)
        this.setState({Data : Year})
    }

    onAddItem = (e) => {
        e.preventDefault()

        const newYear = {Year:this.newYear.value}
        this.setState({
            Data:[...this.state.Data, newYear]
        })

        this.addform.reset()
    }

    render(){

        const eachYear = Data.map((item , index) => <List id = {item.id} 
                                                delEvent = {this.deleteUser.bind(this,index)}>
                                                {item.year}
                                                </List>)

        return(

            <div className="container">

                <div className="left">

                    <form onSubmit={(e) => {this.onAddItem(e)}} ref={input=> this.addform = input}>
                    <p className="p1">Academic Year</p>
                    <input type="text" placeholder="enter academic year" 
                                        ref={input => this.newYear = input}
                                        id="input-year"/><br/>
                    <button type="submit">Enter</button>
                    </form>

                </div>

                <div className="right">

                    <p className="p2">Your data is here</p>
                    <div className="list">

                        <ul>
                            {eachYear}
                        </ul>

                    </div>

                </div>

            </div>

        )

    }

}

export default Main