import { Component, OnInit } from '@angular/core';
import { GeralService } from '../geral.service';

@Component({
  selector: 'app-uploadfilesiga',
  templateUrl: './uploadfilesiga.component.html',
  styleUrls: ['./uploadfilesiga.component.css']
})
export class UploadfilesigaComponent implements OnInit {
  upload:any=0;
  constructor(public servico:GeralService) { }

  ngOnInit() {
  }


  private UploadFileSiga(){
    this.upload = -1;
    this.upload = this.servico.UploadFileSiga();
  }

}
