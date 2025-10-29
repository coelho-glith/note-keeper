import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';
import { ListagemNotasModel } from '../nota.models';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-listar-notas',
  imports: [MatButtonModule, MatIconModule, MatCardModule, MatChipsModule, RouterLink, AsyncPipe],
  templateUrl: './listar-notas.html',
})
export class ListarNotas {
  protected readonly route = inject(ActivatedRoute);

  protected readonly notas$ = this.route.data.pipe(
    filter((data) => data['notas']),
    map((data) => data['notas'] as ListagemNotasModel[])
  );
}
