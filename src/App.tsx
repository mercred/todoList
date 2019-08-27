import React from 'react';
import './App.css';
import FilterComponent from "./components/FilterComponent";
import NotepadComponent from "./components/NotepadComponent";
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
          <div className="row" id="headerDiv">
            <div className="col-lg-12" id="headerCol">
              <h2 id="headerH2">ToDo List</h2>

            </div>
          </div>
            <div className="row">
              <div className="col-lg-9">
                   <div className="container-fluid w-75 notepadContainer">
                     <div className="row">
                       <div className="input-group mb-3 input-group-lg">
                         <input type="text" className="form-control" placeholder="Enter new ToDo"></input>
                         <div className="input-group-append">
                          <button type="button" className="btn btn-success">+</button>
                         </div>
                         </div>

                     </div>
                     <div className="input-group mb-3">
                       <div className="input-group-prepend">
                         <div className="input-group-text">
                           <input type="checkbox" aria-label="Checkbox for following text input"
                                  className="my_checkbox"></input>
                         </div>
                       </div>
                       <input type="text" className="form-control todoTextInput" aria-label="Text input with checkbox"
                              value="Jump from the bridge" ></input>
                         <div className="input-group-append">
                           <button type="button" className="btn btn-danger">Delete</button>
                         </div>
                     </div>
                 </div>
                </div>
              <div className="col-lg-3">
                  <div id="radioBtn" className="btn-group-vertical btn-group-lg">
                    <a className="btn btn-primary active" id='all'>All</a>
                    <a className="btn btn-primary notActive" id='completed'>Completed</a>
                    <a className="btn btn-primary notActive" id='inProgress'>In-Progress</a>
                  </div>
                </div>
            </div>
          </div>
    );
  }



}
export default App;
