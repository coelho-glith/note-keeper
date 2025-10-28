import { Component, inject } from '@angular/core';
import { CategoryService } from '../category.service';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-list-categories',
  imports: [MatButtonModule, MatIconModule, MatCardModule, RouterLink, AsyncPipe],
  templateUrl: './list-categories.html',
})
export class ListCategories {
  protected readonly categoryService = inject(CategoryService);

  protected readonly categories$ = this.categoryService.selecionarTodas();
}
