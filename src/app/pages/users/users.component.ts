import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { SearchInputComponent } from 'src/app/shared/search-input/search-input.component';
import { JsonApiService } from 'src/app/services/json-api/json-api.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, SearchInputComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private jsonApiService: JsonApiService) { }

  data: User[] = [];
  displayedData = this.data;
  search = new FormControl('');

  ngOnInit(): void {
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
    if (term)
      this.displayedData = this.data.filter(
        (item) => item.name.toLowerCase().includes(term.toLowerCase())
      )
  }
}
