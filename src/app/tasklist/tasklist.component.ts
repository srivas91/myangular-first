import { Component } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [MatBadgeModule,MatIconModule,MatButtonModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {
   itemcount:number=0;
   incValue(){
        this.itemcount=this.itemcount+1;
   }
}
