import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name:'Marty M.', salary: 3500, increase: false, promote: true, id: 1},
                {name:'Daniel T.', salary: 2000, increase: true, promote: false, id: 2},
                {name:'Sebastian M.', salary: 5000, increase: false, promote: true, id: 3},
                {name:'Maxim K.', salary: 4200, increase: false, promote: false, id: 4},
                {name:'Kaleb D.', salary: 3900, increase: true, promote: false, id: 5},
            ],
            term: '',
            filter: 'all',
        }
        this.maxId = 5;
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId + 1,
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            }) 
        }))
    }

    searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1; 
        });
    }

    onUpdateSearchApp = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'promote':
                return items.filter(item => item.promote);

            case 'moreThenThousand':
                return items.filter(item => item.salary > 4000);

            default:
                return items;
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state
        const employeesN = this.state.data.length;
        const employeesInc = this.state.data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmployee(data, term), filter);

        return (
            <div className = "app">
                <AppInfo employeesN = {employeesN} employeesInc={employeesInc} />
                
                <div className = "search-panel">
                    <SearchPanel onUpdateSearchApp = {this.onUpdateSearchApp}/>
                    <AppFilter filter = {filter} 
                        onFilterSelect = {this.onFilterSelect} />
                </div>
                
                <EmployeesList 
                    data = {visibleData}  
                    onDelete = {this.deleteItem}
                    onToggleProp = {this.onToggleProp}/>
                <EmployeesAddForm onAdd = {this.addItem} />
            </div>
        )
    }
}

export default App;