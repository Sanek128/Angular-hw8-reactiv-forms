import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  @Input()
  postList: Post[];
    
  constructor(private activatedRoute: ActivatedRoute,
              private postService:PostService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.postService.getAllPosts(value.id).subscribe(value => {
        this.postList = value;
      })
    })
  }
}
