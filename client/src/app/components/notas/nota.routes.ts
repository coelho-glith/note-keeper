import { Routes } from '@angular/router';
import { NotaService } from './nota.service';
import { ListarNotas } from './listar/listar-notas';
import { inject } from '@angular/core';
import { CategoriaService } from '../categorias/categoria.service';
import { CadastrarNota } from './cadastrar/cadastrar-nota';

const listagemNotasResolver = () => {
  const notaService = inject(NotaService);

  return notaService.selecionarTodas();
};

const listagemCategoriasResolver = () => {
  const categoriaService = inject(CategoriaService);

  return categoriaService.selecionarTodas();
};

export const notaRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ListarNotas, resolve: { notas: listagemNotasResolver } },
      {
        path: 'cadastrar',
        component: CadastrarNota,
        resolve: { categorias: listagemCategoriasResolver },
      },
    ],
    providers: [NotaService, CategoriaService],
  },
];
