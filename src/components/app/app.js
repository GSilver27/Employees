import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

import { Component } from 'react';

function App() {
    const data = [
        {name:'Marty M.', salary: 3500, increase: false, id: 1},
        {name:'Daniel T.', salary: 2000, increase: true, id: 2},
        {name:'Sebastian M.', salary: 5000, increase: false, id: 3},
        {name:'Maxim K.', salary: 4000, increase: false, id: 4},
        {name:'Kaleb D.', salary: 3900, increase: true, id: 5},
    ];

    return (
        <div className="app">
            <AppInfo />
            
            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>
            
            <EmployeesList data={data}/>
            <EmployeesAddForm />
        </div>
    )
}

export default App;