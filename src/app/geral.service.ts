import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GeralService {
  constructor(
    public http:HttpClient
  ) { }


public GetDados(url){
  console.log(url);
  return new Promise(resolve => {      
    this.http.get( url )
      .subscribe(data => {
          resolve(data);
          console.log(data);
          return data;
      });
  }).catch();    
}

public UploadFileSiga(){
  return 1
}

public AuthClient(client_id){
  
  let url = 'https://www.googleapis.com/auth/classroom.courses';
  return new Promise(resolve => {      
    this.http.get( url )
      .subscribe(data => {
          resolve(data);
          console.log(data);
          return data;
      });
  }).catch(err=>{
    console.log(err);
  });    

}


}
