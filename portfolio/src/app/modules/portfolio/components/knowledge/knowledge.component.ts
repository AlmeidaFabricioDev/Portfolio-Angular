import { Component, OnInit } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {


  public arrayKnowledge = <IKnowledge[]> ([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'ícone de conhecimento de html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'ícone de conhecimento de css3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'ícone de conhecimento de javascript',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'ícone de conhecimento de angular',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'ícone de conhecimento de nodejs',
    }
  ])

  trackByFn(index: number, item: any) {
    return index;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
