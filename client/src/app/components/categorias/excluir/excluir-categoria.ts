import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NotificacaoService } from '../../shell/notificacao/notificacao.service';
import { CategoriaService } from '../categoria.service';
import { filter, map, switchMap, tap, shareReplay, take, Observer } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DetalhesCategoriaModel } from '../categoria.models';

@Component({
  selector: 'app-excluir-categoria',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe,
    RouterLink,
    FormsModule,
  ],
  templateUrl: './excluir-categoria.html',
})
export class ExcluirCategoria {
  protected readonly route = inject(ActivatedRoute);
  protected readonly router = inject(Router);
  protected readonly categoriaService = inject(CategoriaService);
  protected readonly notificacaoService = inject(NotificacaoService);

  protected readonly categoria$ = this.route.data.pipe(
    filter((data) => data['categoria']),
    map((data) => data['categoria'] as DetalhesCategoriaModel),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  public excluir() {
    const exclusaoObserver: Observer<null> = {
      next: () => this.notificacaoService.sucesso(`O registro foi excluído com sucesso!`),
      error: (err) => this.notificacaoService.erro(err.message),
      complete: () => this.router.navigate(['/categorias']),
    };

    this.categoria$
      .pipe(
        take(1),
        switchMap((categoria) => this.categoriaService.excluir(categoria.id))
      )
      .subscribe(exclusaoObserver);
  }
}
