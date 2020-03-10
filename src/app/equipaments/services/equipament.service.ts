import { Equipament } from '../model/equipament';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EquipamentService {

  // in case you have an API
  private readonly API_TASKS_URL = `http://localhost:3001/tasks`;

  private COUNT = 3;

  constructor(private http: HttpClient) { }

  load() {
     return this.http.get<Equipament[]>(this.API_TASKS_URL);
  }

  create(record: Equipament) {
     return this.http.post<Equipament>(this.API_TASKS_URL, record);
  }

  update(record: Equipament) {
     return this.http.put<Equipament>(`${this.API_TASKS_URL}/${record.id}`, record);
  }

  remove(id: string) {
     return this.http.delete<Equipament>(`${this.API_TASKS_URL}/${id}`);
  }
}