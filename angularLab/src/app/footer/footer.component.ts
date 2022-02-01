import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }
  footerClass = {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "grey",
    color: "white"
    }
  ngOnInit(): void {
  }

}
