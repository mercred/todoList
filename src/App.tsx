import React from 'react';
import './App.css';
import FilterComponent from "./components/FilterComponent";
import HeaderComponent from "./components/HeaderComponent";
import AddTodoComponent from "./components/AddTodoComponent";
import ListComponent from "./components/ListComponent";
interface IState {
  nextId?: number;
  todos:Array<object>;
}

interface IProps {}




class App extends React.Component<IProps, IState>{
  constructor(props:any){
    super(props);

    this.state={
      todos:[
        {id:0, todoText:"Cook breakfast", completed: true },
        {id:1, todoText:"Study",completed: true},
        {id:2, todoText:"Cook lunch",completed: false},
        {id:3, todoText:"Work",completed: false},
        {id:4, todoText:"Cook Dinner",completed: false},

      ],
      nextId:5
    }
  }
  render(){
    return (
        <div className="container-fluid">
          <HeaderComponent/>
            <div className="row">
              <div className="col-lg-9">
                   <div className="container-fluid w-75 notepadContainer">
                     <AddTodoComponent/>
                     <ListComponent/>
                 </div>
                </div>
              <div className="col-lg-3">
                <FilterComponent/>
              </div>
            </div>
          </div>
    );
  }



}
export default App;
