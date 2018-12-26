
import{ Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', 
   // template: '<h2>{{title}}</h2>'
   template: `

        <button  (click)="onSave($event)">Save</button>
        <input [(ngModel)]= "email" (keyup.enter) = " onKeyUp()"/>
        {{title |summary:10  }}
        
   `
})
export class CoursesComponent {
    isActive=true;
    title ="List of courses";   
    imageUrl="http://lorempixel.com/400/200";
    colSpan =2; 
    email="abdalla@gmail.com"
    onKeyUp(){
        console.log(this.email);

    }
    onSave($event){
        console.log("button save clicked" ,$event);

    }

}