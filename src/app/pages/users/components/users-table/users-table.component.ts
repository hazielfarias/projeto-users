import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {
  @Input({required: true}) displayedColumns!: string[];
  @Input({required: true}) dataSource!: User[];
}
