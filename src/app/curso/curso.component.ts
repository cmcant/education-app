import { Component, OnInit } from '@angular/core';
import { GeralService } from '../geral.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  cursos:any;

  constructor(
    public servico:GeralService
  ) {}

  ngOnInit() {
    this.GetCursos();
  }

private GetCursos(){
this.servico.AuthClient('110922296089930600159');
 let link = 'https://classroom.googleapis.com/v1/courses';
 this.servico.GetDados(link);
}

}
