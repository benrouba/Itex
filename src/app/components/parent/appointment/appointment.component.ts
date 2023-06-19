import { Component, OnInit } from '@angular/core';
import { CalendarOptions, Calendar } from '@fullcalendar/core';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    plugins: [resourceTimeGridPlugin],
    initialView: 'resourceTimeGridDay',
    resources: [
      {
        id: 'a', title: 'Abril Lewis', eventColor: 'blue', eventTextColor: 'white', businessHours: { startTime: '10:00', endTime: '18:00' }, textColor: 'white', eventData: {
          location: 'Room A',
          description: 'This is a cool event',
          title: "hello",
          duration: '02:00'
        }
      },
      { id: 'b', title: 'Allan Hicks', eventColor: 'green' },
      { id: 'c', title: 'Bianca Heath', eventColor: 'orange' },
      { id: 'd', title: 'Emmy Massey', eventColor: 'red' }

    ],
    weekends: true,
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };
  ngOnInit(): void {

  }
}
