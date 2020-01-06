import { Component, OnInit } from '@angular/core';
import { Course } from "../model/course";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CoursesService } from '../services/courses.service';



@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    courses: Course[] = [];

    constructor(private coursesServices: CoursesService) {

    }

    ngOnInit() {
        this.coursesServices.getAll().subscribe(courses => {
            this.courses = courses;
        });
    }

}
