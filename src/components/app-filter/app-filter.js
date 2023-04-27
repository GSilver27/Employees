import './app-filter.css';

const AppFilter = (props) => {
    const buttonData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'promote', label: 'На повышение'},
        {name: 'moreThenThousand', label: 'З/П больше 4000$'},
    ];

    const buttons = buttonData.map(({name, label}) => {
        const active = props.filter === name; // tricks
        const style = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type = "button"
                    className = {`btn ${style}`}
                    key = {name}
                    onClick = {() => props.onFilterSelect(name)} >
                    {label}
            </button>
        )
    })

    return (
        <div className = "btn-group">
            {buttons} 
        </div>
    );
}

export default AppFilter;