import React,{Component} from 'react'

export class CreateItem extends Component{
    state = {
        text: ''
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleClick = () =>{
        const {newItem} = this.props
        newItem(this.state.text)
        this.setState({
            text: ''
        })
       
    }

    render(){
        return(
            <div>
                <input type="text"  value ={this.state.text} onChange = {this.handleChange} />
                <button onClick ={this.handleClick}>Add</button>
            </div>
        )
    }
}