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
  private arr: { key: string; value: any }[] = [];

  constructor(private checklistService: ChecklistService){

  }

  ngOnInit(): void {
   this.checklistService.getChecklist().subscribe({
    next: (data) => {
      this.fields = data.fields;
    },
    error: (error) => {

    },
    complete: () => {
      this.getValueChanges();
    }
   });
  }

  getValueChanges() {
    this.form.valueChanges.subscribe({
      next: (data) => {
        console.log(this.form.value);
        for (let control in this.form.controls) {
            this.arr.push({ key: control.toString(), value: (this.form.get(control).value === null) ? '' : this.form.get(control).value });
        }
        console.log(this.arr);
      }
    })
  }
}
