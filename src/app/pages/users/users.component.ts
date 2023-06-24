import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import { SearchInputComponent } from 'src/app/shared/search-input/search-input.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, SearchInputComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{

  ngOnInit(): void {
    this.search.valueChanges.subscribe({
      next:(res)=> this.handleSearch(res)
    })
  }

  search = new FormControl('');


  handleSearch(term:string | null){
    console.log(term);
    
  }

}
