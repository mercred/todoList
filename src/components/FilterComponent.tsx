import React from 'react'
import "../App.css"
interface IState {
    toggledKey:number,
    toggledKeyOld:number
}
interface IProps {
    filterTodo: (filterStateParam:number)=>void
}


export default class FilterComponent extends React.Component<IProps,IState> {
    state={
        toggledKey:0,
        toggledKeyOld:0
    }
    handleOnClick=async(event:any)=>{
        await this.setState({toggledKey:event.target.id})
        this.props.filterTodo(this.state.toggledKey)
        const myElement=document.getElementById(String(this.state.toggledKey))
        const myOldElement=document.getElementById(String(this.state.toggledKeyOld))
        if(myElement&&myOldElement){
            myElement.className="btn btn-primary active";
            myOldElement.className="btn btn-primary notActive";
            this.state.toggledKeyOld=this.state.toggledKey;
        }



    }
    render() {
        return (

            <div id="radioBtn" className="btn-group-vertical btn-group-lg" onClick={this.handleOnClick}>
                <a className="btn btn-primary active" id='0'>All</a>
                <a className="btn btn-primary notActive" id='1'>Completed</a>
                <a className="btn btn-primary notActive" id='2'>In-Progress</a>
            </div>

        );
    }
}