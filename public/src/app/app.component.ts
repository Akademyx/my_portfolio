import { Component } from '@angular/core';
// import { trigger, state, style, transition, animate } from '@angular/'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[],
  // styles:[`
  // *{
  //   margin: 0;
  // }
  //   h1 {
  //     margin: 10px;
  //     text-align: center;
  //   }
  // `] *note, do this in the future instead.
})
export class AppComponent {
  title = 'app';
  words = ["a lot of fun", "about not giving up", "challenging and empowering", "creative expression"];
  word_counter = 0;
  character_counter = 0;
  msg = ''

  updateText = () => {
     this.msg = this.words[this.word_counter][this.character_counter]
    if((this.character_counter) == (this.words[this.word_counter].length + 1))
    {
      this.word_counter++; 	//choose a different word
      this.character_counter = 0;	//start over with the first character of the word
      this.msg =  '';  //set the html to be blank
      //if we're displaying the last word, go back to the first word
      if (this.word_counter == this.words.length)
        this.word_counter = 0;
      }
    }
  }
  // $interval(this.updateText,200)
