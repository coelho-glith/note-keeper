import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterLink } from '@angular/router';
import { CategoryService } from '../category.service';
import { CadastrarCategoryModel } from '../category.models';
import { finalize } from 'rxjs';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-cadastrar-category',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterLink,
    MatInputModule,
  ],
  templateUrl: './cadastrar-category.html',
})
export class CadastrarCategory {
  protected readonly formBuilder = inject(FormBuilder);
  protected readonly categoryService = inject(CategoryService);
  protected readonly router = inject(Router);

  protected categoryForm = this.formBuilder.group({
    title: [''],
  });

  public cadastrar() {
    if (this.categoryForm.invalid) return;

    const categoryModel = this.categoryForm.value as CadastrarCategoryModel;

    this.categoryService
      .cadastrar(categoryModel)
      .pipe(finalize(() => this.router.navigate(['/categories'])))
      .subscribe((res) => console.log(res));
  }
}
