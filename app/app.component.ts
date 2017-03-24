import { Component } from '@angular/core';

import { Task } from './model/task';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html', //external template
    styleUrls: [ 'app.component.css' ]
})
export class AppComponent {
    //task1: Task = {
    //    content: "Learn to Code",
    //    completed: false        
   // }

     private tasksme: Task[] = [];
//   private tasksme = [      //--- removed at the end to polish the "app" ---
//        new Task(         
//            "Buy a monkey",
//            false
//        ),
//        new Task(
//            "Walk the turtle",
//            false
//        )
//   ]
   private currentTask = new Task(null, false);   //new component property. Initialization of the object

   // creating a new function or method
   addTask()  {
       let task = new Task(this.currentTask.content, this.currentTask.completed);  // creating a new task values
       this.tasksme.push(task);         // adding to the task array
       this.currentTask.content = null;
   } 
 }