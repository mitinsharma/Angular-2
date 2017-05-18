import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
//also import http in app.module.ts
import 'rxjs/add/operator/map'

@Injectable()
export class PostService{
  constructor(private http: Http){
    console.log('Service initialized...');

  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());

  }
}
