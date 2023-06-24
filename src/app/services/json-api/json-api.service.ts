import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  private apiUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(this.apiUrl)
  }

  getUserById(id: number) {
    return this.http.get<User>(this.apiUrl + `/${id}`)
  }

}
