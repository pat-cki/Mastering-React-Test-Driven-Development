import React from 'react'
import ReactDOM from 'react-dom'

import {AppointmentsDayVie, AppointmentsDayView} from'./Appointment';
import{sampleAppointments} from './sampleData'

ReactDOM.render(
  <AppointmentsDayView appointments={sampleAppointments} />,
  document.getElementById('root')
)