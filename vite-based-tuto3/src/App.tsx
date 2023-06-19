import './App.css'
import './Custom.css';
import Avatar from './components/Avatar';

function App() {

  const cities = [
    'New york',
    'San francisco',
    'Tokio'
  ]

  return (
    <>

      <div className="container">
        <div className="row">
          <div className="col-md-6">

            <h1>List</h1>
            <ul className="list-group">
              {cities.map((city) => <li key={city} className="list-group-item"> {city} </li>)}
            </ul>

          </div>
          <div className="col-md-6">
            <div> <Avatar /></div>
          </div>
        </div>
      </div>

    </ >
  )
}

export default App
