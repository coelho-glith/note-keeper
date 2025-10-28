import { Routes } from '@angular/router';

import { ListCategories } from './list/list-categories';
import { CadastrarCategory } from './cadastrar/cadastrar-category';

export const categoriesRoutes: Routes = [
  { path: '', component: ListCategories },
  { path: 'cadastrar', component: CadastrarCategory },
];
