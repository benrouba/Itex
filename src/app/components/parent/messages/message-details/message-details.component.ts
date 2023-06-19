import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.scss']
})
export class MessageDetailsComponent implements OnInit {
  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router) { }
  user: any
  ngOnInit(): void {
    this.getPatientDetails()
  }
  getPatientDetails() {
    this.route.params.subscribe(params => {
      this.http.get("users/" + params['id']).subscribe((res: any) => {
        if (res.status == 200) {
          this.user = res.body
        }
      })
    })

  }
}
