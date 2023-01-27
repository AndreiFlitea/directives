import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;

  checkWindowIndex(index:number) {
     return Math.abs(this.currentPage - index) < 4;
  }
  
  prevPage(): void {
    if(this.currentPage === 0) 
      this.currentPage === 0;
    else
      this.currentPage--;           
  }

  nextPage() {
    if(this.currentPage === this.slides.length -1) 
      this.currentPage === this.slides.length-1;
    else
      this.currentPage++;       
  }
  

  slides = [
    {
      number: 1,
      title: 'Biking',
      url: 'assets/biking.jpg'
    },
    {
      number: 2,
      title: 'Cycling',
      url: 'assets/cyclist.jpg'
    },
    {
      number: 3,
      title: 'Enjoy the view',
      url: 'assets/landscape.jpg'
    },
    {
      number: 4,
      title: 'Just a guy',
      url: 'assets/man.jpg'
    },
    {
      number: 5,
      title: 'Mountain',
      url: 'assets/mountain.jpg'
    },
    {
      number: 1,
      title: 'Biking',
      url: 'assets/biking.jpg'
    },
    {
      number: 2,
      title: 'Cycling',
      url: 'assets/cyclist.jpg'
    },
    {
      number: 3,
      title: 'Enjoy the view',
      url: 'assets/landscape.jpg'
    },
    {
      number: 4,
      title: 'Just a guy',
      url: 'assets/man.jpg'
    },
    {
      number: 5,
      title: 'Mountain',
      url: 'assets/mountain.jpg'
    },
    {
      number: 1,
      title: 'Biking',
      url: 'assets/biking.jpg'
    },
    {
      number: 2,
      title: 'Cycling',
      url: 'assets/cyclist.jpg'
    },
    {
      number: 3,
      title: 'Enjoy the view',
      url: 'assets/landscape.jpg'
    },
    {
      number: 4,
      title: 'Just a guy',
      url: 'assets/man.jpg'
    },
    {
      number: 5,
      title: 'Mountain',
      url: 'assets/mountain.jpg'
    },
    {
      number: 1,
      title: 'Biking',
      url: 'assets/biking.jpg'
    },
    {
      number: 2,
      title: 'Cycling',
      url: 'assets/cyclist.jpg'
    },
    {
      number: 3,
      title: 'Enjoy the view',
      url: 'assets/landscape.jpg'
    },
    {
      number: 4,
      title: 'Just a guy',
      url: 'assets/man.jpg'
    },
    {
      number: 5,
      title: 'Mountain',
      url: 'assets/mountain.jpg'
    },
    {
      number: 1,
      title: 'Biking',
      url: 'assets/biking.jpg'
    },
    {
      number: 2,
      title: 'Cycling',
      url: 'assets/cyclist.jpg'
    },
    {
      number: 3,
      title: 'Enjoy the view',
      url: 'assets/landscape.jpg'
    },
    {
      number: 4,
      title: 'Just a guy',
      url: 'assets/man.jpg'
    },
    {
      number: 5,
      title: 'Mountain',
      url: 'assets/mountain.jpg'
    },
  ];

  
}
