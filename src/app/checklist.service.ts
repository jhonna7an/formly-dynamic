import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChecklistViewModel } from './checklist.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  constructor(private http: HttpClient) { }

  getChecklist(): Observable<ChecklistViewModel>{
    return this.http.get<ChecklistViewModel>('https://localhost:44322/workshop/ChecklistConcept?ChecklistId=1');
  }
}
