import './App.css'
import './Custom.css';
import Avatar from './components/Avatar';
import CityItem from './components/CityItem';

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
          <div className="col-md-3">

            <h3>Explicit conditional (multiline)</h3>
            <ul className="list-group">

              {
                /* Change property using explicit conditional. */
                cities.map(city => {
                  if (city == 'New york') {
                    return <li key={city} className="bg-success list-group-item"> Next Sweet Home: {city} </li>
                  } else {
                    return <li key={city} className="list-group-item"> {city} </li>
                  }
                })
              }

            </ul>

          </div>

          <div className="col-md-3">

            <h3>Ternay (? operator)</h3>
            <ul className="list-group">

              {
                /* Change property using Ternary (operator ? in the same line) */
                cities.map((city) =>
                  <li key={city}
                    className={city == 'Tokio' ? "bg-primary list-group-item" : "list-group-item"}>
                    {city}
                  </li>)
              }

            </ul>

          </div>

          <div className="col-md-3">

            <h3>Using component</h3>
            <ul className="list-group">

              {
                /* Change property using component by parameter */
                cities.map(city => (
                  <CityItem key={city} cityItem={city} />
                ))
              }

            </ul>

          </div>

          <div className="col-md-3">
            <div> <Avatar /></div>
          </div>

        </div>
      </div>

    </ >
  )
}

export default App
