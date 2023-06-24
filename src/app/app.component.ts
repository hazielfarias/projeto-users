import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { JsonApiService } from './services/json-api/json-api.service';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatButtonModule, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private jsonApiService: JsonApiService) { }
  
  ngOnInit() {
    this.jsonApiService.getAllUsers().subscribe({
      next: (res: any) => {
        console.log(res);

      },
      error: () => { }
    })
  }
  title = 'projeto-users';
}
