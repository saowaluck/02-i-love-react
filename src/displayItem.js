import React,{Component} from 'react'

export class DisplayItem extends Component{
    render(){
        const {items} = this.props
        return(
            <ul>
                {
                    items.map((item, i) =>( 
                        <li key={i}>{item}</li>))
                }
            </ul>
        )
    }
}