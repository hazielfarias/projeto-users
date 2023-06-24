import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { SearchInputComponent } from 'src/app/shared/search-input/search-input.component';
import { JsonApiService } from 'src/app/services/json-api/json-api.service';
import { User } from 'src/app/models/user.model';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersCardListComponent } from './components/users-card-list/users-card-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, SearchInputComponent, UsersTableComponent, UsersCardListComponent, UserDetailComponent, MatDialogModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private jsonApiService: JsonApiService, private dialog: MatDialog) { }

  columns = ['name', 'email', 'phone', 'website'];

  data: User[] = [];
  displayedData = this.data;
  search = new FormControl('');
  windowWidth = window.innerWidth

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.reponsiveCallback()
  }

  reponsiveCallback() {
    this.windowWidth = window.innerWidth
    if (window.innerWidth <= 992) {
      this.columns = ['name', 'email'];
      return;
    }
    this.columns = ['name', 'email', 'phone', 'website'];
  }

  ngOnInit(): void {
    this.reponsiveCallback()
    this.jsonApiService.getAllUsers().subscribe(
      {
        next: (res) => {
          this.data = res;
          this.displayedData = res;
        }
      }
    )

    this.search.valueChanges.subscribe({
      next: (res) => this.handleSearch(res)
    })
  }

  handleSearch(term: string | null) {
    if (term) {
      this.displayedData = this.data.filter(
        (item) => item.name.toLowerCase().includes(term.toLowerCase())
      )
      return
    }
    this.displayedData = this.data;
  }

  showDetail(user: User) {
    
    this.dialog.open(UserDetailComponent,{data: user})
  }
}
