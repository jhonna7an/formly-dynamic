import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ChecklistService } from './checklist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [];

  constructor(private checklistService: ChecklistService){

  }

  ngOnInit(): void {
   this.checklistService.getChecklist().subscribe(checklist => this.fields = checklist.fields);
   }
}
