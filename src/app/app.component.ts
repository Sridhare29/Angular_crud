import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-information-app';
}
