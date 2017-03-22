import { Component } from '@angular/core';

import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html' //external template
})
export class AppComponent {
    //task1: Task = {
    //    content: "Learn to Code",
    //    completed: false        
   // }
   private tasksme = [
        new Task(
            "Buy a monkey",
            false
        ),
        new Task(
            "Walk the turtle",
            false
        )
   ]
 }