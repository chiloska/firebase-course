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
    coursesBeginner$: Observable<Course[]>;
    coursesAdvanced$: Observable<Course[]>;

    constructor(private coursesServices: CoursesService) {

    }

    ngOnInit() {
        this.coursesBeginner$ = this.coursesServices.getAll().pipe(
            map(courses => courses.filter(course => course.categories.includes('BEGINNER')))
        );
        this.coursesAdvanced$ = this.coursesServices.getAll().pipe(
            map(courses => courses.filter(course => course.categories.includes('ADVANCED')))
        );
    }

}
