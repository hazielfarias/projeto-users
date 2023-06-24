import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-card-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './users-card-list.component.html',
  styleUrls: ['./users-card-list.component.scss']
})
export class UsersCardListComponent {

  @Input({ required: true }) dataSource!: User[];
  @Output() clickRow = new EventEmitter<User>()

  showDetail(user: User) {
    this.clickRow.emit(user);
  }

}
