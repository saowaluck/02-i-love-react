import React, {Component} from 'react'
import {DisplayItem} from './displayItem'
import {CreateItem} from './createItem'
class App extends Component{
    state = {
        items:['akvfg']
    }

    newItem = (item) => {
        this.setState(prevState => ({
            items:[
                ...prevState.items,
                item
            ]
        }))
    }


    render(){
        return(
            <div>
                <CreateItem newItem ={this.newItem}/>
                <DisplayItem items={this.state.items}/>
            </div>
        )
    }
}
export default App