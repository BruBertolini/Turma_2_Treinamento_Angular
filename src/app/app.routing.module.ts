import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ListaContasComponent } from './lista-contas/lista-contas.component';

const rotas = [
  { path: '', component: HelloWorldComponent },
  { path: 'contas', component: ListaContasComponent,
  children: [
    { path: 'hello', component: HelloWorldComponent },
], },
];

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule],
})
export class AppRouterModule {}
