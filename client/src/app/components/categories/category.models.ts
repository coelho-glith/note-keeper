export interface CategoriesListingApiResponse {
  records: CategoriesListingModel[];
}

export interface CategoriesListingModel {
  id: string;
  title: string;
}

export interface CadastrarCategoryModel {
  title: string;
}

export interface CadastrarCategoryResponseModel {
  id: string;
}
