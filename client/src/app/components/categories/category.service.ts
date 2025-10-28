import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  CadastrarCategoryModel,
  CadastrarCategoryResponseModel,
  CategoriesListingApiResponse,
  CategoriesListingModel,
} from './category.models';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private readonly http = inject(HttpClient);

  private readonly apiUrl = environment.apiUrl + '/categories';

  cadastrar(categoryModel: CadastrarCategoryModel): Observable<CadastrarCategoryResponseModel> {
    return this.http.post<CadastrarCategoryResponseModel>(this.apiUrl, categoryModel);
  }

  public selecionarTodas(): Observable<CategoriesListingModel[]> {
    return this.http.get<CategoriesListingApiResponse>(this.apiUrl).pipe(map((res) => res.records));
  }
}
