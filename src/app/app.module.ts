import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//prividers
import { GeralService } from './geral.service';
import { HttpClientModule } from '@angular/common/http';

//Pages
import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';
import { ProfessorComponent } from './professor/professor.component';
import { AlunoComponent } from './aluno/aluno.component';
import { SobreComponent } from './sobre/sobre.component';
import { UtilitarioComponent } from './utilitario/utilitario.component';
import { UploadfilesigaComponent } from './uploadfilesiga/uploadfilesiga.component';

// Rotas
const appRoutes: Routes = [
  { path: 'curso', component: CursoComponent },
  { path: 'professor', component: ProfessorComponent },
  { path: 'aluno', component: AlunoComponent },
  { path: 'utilitario', component: UtilitarioComponent },
  { path: 'upload', component: UploadfilesigaComponent },
  { path: 'sobre', component: SobreComponent }
];

 // Initialize Firebase
 const config = {
  apiKey: "AIzaSyB8PjzlIiQZOZzVNMJQlMUxHxn4OUJsTaA",
  authDomain: "foreducation-9b125.firebaseapp.com",
  databaseURL: "https://foreducation-9b125.firebaseio.com",
  projectId: "foreducation-9b125",
  storageBucket: "",
  messagingSenderId: "980149554075"
};

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent,
    ProfessorComponent,
    AlunoComponent,
    SobreComponent,
    UtilitarioComponent,
    UploadfilesigaComponent
  ],
  imports: [
  	RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
  ],
  providers: [GeralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
