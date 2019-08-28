import React from 'react'
import "../App.css"
interface IState {
    toggled:boolean,
    text:string
}
interface IProps {
    updateTodo: (todo:{toggled:boolean,text:string,id:number})=>void
    deleteTodo: (id:number)=>void
    toggled:boolean,
    text:string,
    id:number
}
export default class ListItemComponent extends React.Component<IProps,IState> {
    constructor(props:IProps){
        super(props);
        this.state.text=props.text;
        this.state.toggled=props.toggled;
    }
    state={
        text:"",
        toggled:false

    }
    handleToggleUpdate= async(event:any)=>{

        await this.setState({toggled:!this.state.toggled})
        this.props.updateTodo({
            toggled:this.state.toggled,
            text:this.state.text,
            id:this.props.id})

    }
    handleTextUpdate= async(event:any)=>{
        await this.setState({text:event.target.value})
        this.props.updateTodo({
            toggled:this.state.toggled,
            text:this.state.text,
            id:this.props.id})
    }
    handleDelete=async(event:any)=>{
        this.props.deleteTodo(this.props.id)
    }

    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"
                               className="my_checkbox" checked={this.state.toggled} onChange={this.handleToggleUpdate}></input>
                    </div>
                </div>
                <input type="text" className="form-control todoTextInput" aria-label="Text input with checkbox"
                       value={this.state.text} id={String(this.props.id)} onChange={this.handleTextUpdate}></input>
                <div className="input-group-append">
                    <button type="button" className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        );
    }
}