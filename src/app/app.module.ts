import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MovieComponent } from './movies/movies.component';

import { AuthService } from './auth.service';
import { FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    MovieComponent
    
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
