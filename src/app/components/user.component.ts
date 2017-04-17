import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service'

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})

export class UserComponent {
  name: string;
  email: string;
  favorite_snack: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Post[];

  constructor(private postsService: PostsService) {
    this.name = 'Ann Cascarano';
    this.email = 'ann@ann.com';
    this.favorite_snack = 'beer';
    this.address = {
      street: '47 7th Avenue',
      city: 'Pincourt',
      province: 'QC'
    }
    this.hobbies = ['Music', 'Reading', 'Dog Walking'];
    this.showHobbies = false;

    this.postsService.getPosts().subscribe(posts => {
      //console.log(posts);
      this.posts = posts;
    });
  }

  toggleHobbies() {
    this.showHobbies = this.showHobbies ? false : true;
  }

  addHobby(hobby) {
    this.hobbies.push(hobby);
  }

  deleteHobby(i) {
    this.hobbies.splice(i, 1);
  }

}

interface address {
  street: string;
  city: string;
  province: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}