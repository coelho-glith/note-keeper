import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { CategoriaService } from '../categoria.service';
import { delay, filter, map } from 'rxjs';
import { ListagemCategoriasModel } from '../categoria.models';

@Component({
  selector: 'app-listar-categorias',
  imports: [MatButtonModule, MatIconModule, MatCardModule, RouterLink, AsyncPipe],
  templateUrl: './listar-categorias.html',
})
export class ListarCategorias {
  protected readonly route = inject(ActivatedRoute);
  protected readonly categoriaService = inject(CategoriaService);

  protected readonly categorias$ = this.route.data.pipe(
    filter((data) => data['categorias']),
    map((data) => data['categorias'] as ListagemCategoriasModel[])
  );
}
