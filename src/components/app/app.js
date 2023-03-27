import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function WhoAmI({name, surname, link}) {
    return (
        <div>
            <h1>My name is {name()},  surname - {surname}</h1>
            <a href={link}>My profile</a>
        </div>
    )
}

function App() {

    const data = [
        {name:'Marty M.', salary: 3500, increase: false},
        {name:'Daniel T.', salary: 2000, increase: true},
        {name:'Sebastian M.', salary: 5000, increase: false},
        {name:'Maxim K.', salary: 4000, increase: false},
        {name:'Kaleb D.', salary: 3900, increase: true},
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