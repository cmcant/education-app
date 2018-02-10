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

public AuthClient(){

  let urlget = 'https://classroom.googleapis.com/v1/courses';
  return new Promise(resolve => {      
    this.http.get( urlget, {
      headers: {'Authorization': 'Bearer ya29.GlteBQ6_YPASKOj-6a_x2VGnVe0YlN3W81l9xdPOfDP3T7OFwQZ9vvLjCbQarmnmlTc7NxAi8KNIGk5XjnhZERDDBws0MH9DX9BSP77VekkBaYcN52C3otGyaP2H'}
    })
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
