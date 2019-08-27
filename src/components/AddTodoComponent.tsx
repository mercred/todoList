 import React from 'react'
 import "../App.css"

 interface IState {
     text: string
 }
 interface IProps {
     onSubmit: (todo:object)=>void
 }

export default class AddTodoComponent extends React.Component<IProps,IState> {

    state={
        text:""
    }
    handleChange=(event:any)=>{
        this.setState({text:event.target.value})
    }
    handleFormSubmit=(event:any)=>{
        event.preventDefault()//prevents default form handling
        this.setState({text:""})
        const todoText=this.state.text;
        const id='id_'+String(new Date().getTime())
        this.props.onSubmit({
            toggled:false,
            todoText:todoText,
            todoId:id})

    }
    render() {
        return (

            <div className="row" >
                <form onSubmit={this.handleFormSubmit} id="myForm"></form>
                <div className="input-group mb-3 input-group-lg ">
                    <input type="text"
                               id="TodoTextInput"
                               className="form-control"
                               value={this.state.text}
                               placeholder="Enter new ToDo"
                               onChange={this.handleChange}
                           form="myForm"
                        ></input>
                    <div className="input-group-append">
                        <button type="submit" form="myForm" className="btn btn-success">+</button>
                    </div>
                </div>
            </div>
        );
    }
}