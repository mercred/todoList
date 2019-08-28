import React from 'react'
import ListItemComponent from "./ListItemComponent";
import "../App.css"
import AddTodoComponent from "./AddTodoComponent";
interface IState {
    todos:Array<{toggled:boolean,text:string,id:number}>;
    todosFiltered:Array<{toggled:boolean,text:string,id:number}>;
    currentFilterState:number
}
interface IProps {
    currentFilter:number
}



export default class ListComponent extends React.Component<IProps,IState> {

    state={
        todos:[{toggled:false,text:"Skip-Jump 10000 times",id:2138947}],
        todosFiltered:[{toggled:false,text:"Skip-Jump 10000 times",id:2138947}],
        currentFilterState:this.props.currentFilter
    }
    addTodo= (todo: {toggled:boolean,text:string,id:number})=>{
        this.setState({todos:[todo,...this.state.todos]});

    }
    updateTodo= (todo: {toggled:boolean,text:string,id:number})=>{
        let todosTemp=this.state.todos.map(todoCurrent=>{
            if(todoCurrent.id===todo.id){
                let DummyTodo={toggled:false,text:"Skip-Jump 10000 times",id:2138947}
                DummyTodo.toggled=todo.toggled;
                DummyTodo.text=todo.text;
                DummyTodo.id=todo.id;
                return DummyTodo
            }else{
                return todoCurrent;
            }

        })
        this.setState({
            todos:todosTemp
        })
    }


    deleteTodo= (id:number)=>{
        this.setState({
                todos:this.state.todos.filter(todo=>todo.id!==id)
            }
        );
    }


    render() {
        {

            if(this.props.currentFilter==0){

                this.state.todosFiltered=this.state.todos;

            }else if(this.props.currentFilter==1){

                this.state.todosFiltered=this.state.todos.filter(todo=>todo.toggled);
            } else{

                this.state.todosFiltered=this.state.todos.filter(todo=>!todo.toggled);
            }
        }


        return (
            <div>
                <AddTodoComponent onSubmit={this.addTodo}/>

                <div>
                    <ul>
                        {this.state.todosFiltered.map(todo=>(
                            <li key={todo.id.toString()}><ListItemComponent id={todo.id} text={todo.text} toggled={todo.toggled} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/></li>
                        ))}

                    </ul>
                </div>
            </div>
        );
    }
}