import { Component, OnInit } from '@angular/core';
import { HelperService } from '../services/helper.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  questionData: any[];

  constructor(public helperService:HelperService) { }

  ngOnInit() {
    this.getQuestion();
  }

  getQuestion(){
    this.helperService.getQuestions().subscribe(response => this.questionData = response);
  }

}
