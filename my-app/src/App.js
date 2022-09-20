import './App.css'
import React, {useState, useEffect} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'

export default function UsersData() {
  const [data, setData] = useState([])

  const apiGet = () => {
    fetch('https://api.staging.bsport.io/api/v1/offer/?min_date=2022-09-10&max_date=2022-09-11&company=6')
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        setData(response.results)
      })
  }

  return (
    <div>
      Bsport Get API <br />
      <button onClick={apiGet}>Fetch API</button>
      <br />
      <div>
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.id},{item.activity},{item.coach},{item.date_start}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
/**export default function App() {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
  return (
        <>
          <Calendar 
          value={dateState}
          onChange={changeDate}
          />
        <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>  
        </>
      );
}*/