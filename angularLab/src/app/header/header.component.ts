import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  photoSrc:string = '../assets/ldn9cko.jpg';
  imgStyle = {
    width: "100%",
    height: "auto"
  }
  ngOnInit(): void {
  }

}
