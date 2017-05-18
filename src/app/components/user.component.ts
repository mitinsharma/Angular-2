import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl: `user.component.html`,
  providers:[PostService]
})
export class UserComponent  {
    name: string;
    email: string;
    address: address; // here address is an interface defined below
    hobbies: string[];
    showHobbies: boolean;
    posts: Post[];

    constructor(private postService:PostService){

        console.log("Constructor Ran!");
        this.name = 'Mitin';
        this.email = 'mitinsharma01@gmail.com';
        this.address = {
            street: 'dutchess ave',
            city: 'Poughkepsie',
            state: 'New York'
        };
        this.hobbies= ['Music','Cricket','Movies','Dance'];
        this.showHobbies= true;

        this.postService.getPosts().subscribe(posts => {
          console.log(posts);
          this.posts = posts;
        });

    }

    toggleHobbies(){
        this.showHobbies = !this.showHobbies;
    }


    addHobby(hobby:string){
        console.log("add hobby");
        this.hobbies.push(hobby);
    }

    delHobby(i:number){
        console.log("delete hobby");
        this.hobbies.splice(i,1);
    }

}

interface address{
    street: string;
    city: string;
    state: string;
}
interface Post{
  id: number;
  title: string;
  body: string;
}


