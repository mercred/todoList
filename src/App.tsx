import React from 'react';
import './App.css';
import FilterComponent from "./components/FilterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListComponent from "./components/ListComponent";
interface IState {
    //0 is show all, 1 is show completed,2 is show in progress
    filterStateCode: number;
}

interface IProps {}
class App extends React.Component<IProps, IState>{
    constructor(props:any){
        super(props);

        this.state={
            filterStateCode:0
        }
    }
    filterTodo= async(filterStateParam:number)=>{
        await this.setState({
                filterStateCode:filterStateParam
            }
        );

    }
    render(){
        return (
            <div className="container-fluid">
                <HeaderComponent/>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="container-fluid w-75 notepadContainer">
                            <ListComponent currentFilter={this.state.filterStateCode} />
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <FilterComponent filterTodo={this.filterTodo}/>
                    </div>
                </div>
            </div>
        );
    }



}
export default App;
