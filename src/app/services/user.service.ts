import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import {Ticket} from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>('/api/users');
  }

  getById(id: number) {
    return this.http.get('/api/users/' + id);
  }

  create(user: User) {
    return this.http.post('/api/users', user);
  }

  createTicket(ticket: Ticket) {
    return this.http.post('/api/ticket', ticket);
  }

  updateTicket(user: User) {
    return this.http.put('/api/users/' + user.id, user);
  }

  // delete(id: number) {
  //   return this.http.delete('/api/users/' + id);
  // }
}
