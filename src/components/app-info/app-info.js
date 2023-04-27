import './app-info.css';

const AppInfo = ({employeesN, employeesInc}) => {
    return (
        <div className = "app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {employeesN}</h2>
            <h2>Премию получат: {employeesInc}</h2>
        </div>
    )
};

export default AppInfo;