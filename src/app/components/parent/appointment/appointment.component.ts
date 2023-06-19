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
    timeZone: 'PST',
    allDaySlot: false,
    initialView: 'resourceTimeGridDay',
    slotMinTime: "08:00:00",
    eventBackgroundColor: "#ffffff",
    eventBorderColor: "#ffffff",
    eventClassNames: 'test',
    eventTextColor: "#192252",
    contentHeight: 'auto',
    headerToolbar: {
      left: 'prev,next today',
      right: ''
    },
    resources: [
      { id: 'a', title: 'Abril Lewis' },
      { id: 'b', title: 'Allan Hicks' },
      { id: 'c', title: 'Bianca Heath' },
      { id: 'd', title: 'Emmy Massey' },
    ],
    events:
      [
        {
          "resourceId": "a",
          "title": "Robert Fox",
          "start": "2023-06-19T08:00:00+00:00",
          "end": "2023-06-19T10:00:00+00:00",
          className: "border_6"

        },
        {
          "resourceId": "a",
          "title": "Cody Fisher",
          "start": "2023-06-19T10:30:00+00:00",
          "end": "2023-06-19T12:30:00+00:00",
          className: "border_4"
        },
        {
          "resourceId": "a",
          "title": "Annette Black",
          "start": "2023-06-19T15:30:00+00:00",
          "end": "2023-06-19T17:30:00+00:00",
          className: "border_5"
        },
        {
          "resourceId": "a",
          "title": "Kathryn Murphy",
          "start": "2023-06-19T13:30:00+00:00",
          "end": "2023-06-19T14:30:00+00:00"
        },
        {
          "resourceId": "b",
          "title": "Robert Fox",
          "start": "2023-06-19T08:00:00+00:00",
          "end": "2023-06-20T10:00:00+00:00",
          className: "border_6"

        },
        {
          "resourceId": "b",
          "title": "Cody Fisher",
          "start": "2023-06-20T16:30:00+00:00",
          "end": "2023-06-20T18:30:00+00:00",
          className: "border_4"
        },
        {
          "resourceId": "b",
          "title": "Annette Black",
          "start": "2023-06-20T15:30:00+00:00",
          "end": "2023-06-20T17:30:00+00:00",
          className: "border_5"
        },
        {
          "resourceId": "b",
          "title": "Kathryn Murphy",
          "start": "2023-06-20T13:30:00+00:00",
          "end": "2023-06-20T14:30:00+00:00"
        },
        {
          "resourceId": "c",
          "title": "Robert Fox",
          "start": "2023-06-20T20:00:00+00:00",
          "end": "2023-06-20T121:00:00+00:00",
          className: "border_6"

        },
        {
          "resourceId": "c",
          "title": "Cody Fisher",
          "start": "2023-06-20T10:30:00+00:00",
          "end": "2023-06-20T12:30:00+00:00",
          className: "border_4"
        },
        {
          "resourceId": "c",
          "title": "Annette Black",
          "start": "2023-06-20T15:30:00+00:00",
          "end": "2023-06-20T16:30:00+00:00",
          className: "border_5"
        },
        {
          "resourceId": "c",
          "title": "Kathryn Murphy",
          "start": "2023-06-20T12:30:00+00:00",
          "end": "2023-06-20T16:30:00+00:00"
        },
        {
          "resourceId": "d",
          "title": "Robert Fox",
          "start": "2023-06-20T09:00:00+00:00",
          "end": "2023-06-20T10:00:00+00:00",
          className: "border_6"

        },
        {
          "resourceId": "d",
          "title": "Cody Fisher",
          "start": "2023-06-20T11:30:00+00:00",
          "end": "2023-06-20T12:30:00+00:00",
          className: "border_4"
        },
        {
          "resourceId": "d",
          "title": "Annette Black",
          "start": "2023-06-20T15:30:00+00:00",
          "end": "2023-06-20T17:30:00+00:00",
          className: "border_5"
        },
        {
          "resourceId": "d",
          "title": "Kathryn Murphy",
          "start": "2023-06-20T13:30:00+00:00",
          "end": "2023-06-20T14:30:00+00:00"
        },
      ],
    weekends: false
  };
  ngOnInit(): void {
    console.log(new Date().setHours(8, 0, 0, 0));

  }
  randomcolor() {
    var colors = ["#12BDB2", "#8239BC", "#54A0CA", "#FBB500"]
    var random_color = colors[Math.floor(Math.random() * colors.length)];
    return random_color;
  }
}
