import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';
import { PaginatorComponent } from './paginator/paginator.component';
import {ClienteService} from './clientes/cliente.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import localeES from '@angular/common/locales/es-CO';
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';
//Esta fuinción sirve para modificar el lenguaje
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { RegisterComponent } from './register/register.component';
registerLocaleData(localeES, 'es-CO');

  const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch: 'full'},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'directivas',component: DirectivaComponent},
  {path:'clientes',component: ClientesComponent},
  {path:'clientes/page/:page',component: ClientesComponent},
  {path: 'clientes/form',component: FormComponent},
  {path: 'clientes/form/:id',component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      FooterComponent,
      DirectivaComponent,
      ClientesComponent,
      FormComponent,
      PaginatorComponent,
      LoginComponent,
      RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [ClienteService,{provide: LOCALE_ID, useValue: 'es-CO' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
