import { Component, OnInit } from '@angular/core';
import studentsData from '../../assets/students.json';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  students: any[] = [];

  ngOnInit(): void {
    this.students = studentsData;
  
  }
}

