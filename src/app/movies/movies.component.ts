import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { IMovie } from './movie';
import { MovieService } from './movie.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MovieComponent {
  welcome: string = ` 
    Here you can find many classics of the movie repertoire. 
    Can't make a choice on which one you would like to start after reading the descriptions below ? 
    Check the ratings !!! As simple as eating popcorn on a couch while watching, by a rainy day. Enjoy !
      `;
  imageWidth: number = 50;
  imageMargin: number = 2;
  submited: boolean = false;
  username: string = '';
  movies: IMovie[] = [];

  constructor(private MovieService: MovieService, private Auth: AuthService) { }

  ngOnInit(): void {
    this.MovieService.getMovies().subscribe(data =>{ 
    this.movies = data;
    console.log(this.movies);
  });
  }

  onSubmit(form: NgForm): void {
    this.username = form.value.username;
    this.submited = true;
    this.Auth.getUserDetails(form.value.username, form.value.password).subscribe(data => {

      if (data.success) {
        this.Auth.setLoggedIn(true)

      } else {
        window.alert("invalid")
      }

    })
  }
}