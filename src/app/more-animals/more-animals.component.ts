import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-more-animals',
  templateUrl: './more-animals.component.html',
  styleUrls: ['./more-animals.component.css']
})
export class MoreAnimalsComponent implements OnInit {
  currentRace = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.currentRace = params.race;
    });
  }

}
