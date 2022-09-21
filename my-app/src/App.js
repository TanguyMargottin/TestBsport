import './App.css'
import React, {useState, useEffect} from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import moment from 'moment'


export default function UsersData() {

  const [offer, setOffer] = useState([])
  const [activity, setActivity] = useState([])
  const apiGetOffer = () => {
    //Get offer from company 6 on the 2022-09-10
    fetch('https://api.staging.bsport.io/api/v1/offer/?min_date=2022-09-10&max_date=2022-09-10&company=6')
      .then((response) => response.json())
      .then((response) => {
        setOffer(response.results)
      }) 
    }
  const apiGetActivity = (id) => {
    //Get meta-activity from id
    fetch('https://api.staging.bsport.io/api/v1/meta-activity/'+id+'/')
      .then((response) => response.json())
      .then((response) => {
        setActivity(response)
      })
  }
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }

  return (
    <div>
      Bsport Get API <br />
      <button onClick={apiGetOffer}>Fetch API offer</button>
      <br />
      <div>
        <ul>
          {offer.map((item) => (
            <li key={item.id}>
              {item.date_start},{item.meta_activity},{item.coach},{item.establishment}
            </li>
          ))}
        </ul>
      </div>
      <>
          <Calendar 
          value={dateState}
          onChange={changeDate}
          />
        <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>  
        </>
    </div>
  )
}