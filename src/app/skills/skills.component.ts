import { CommonModule, NgFor, NgTemplateOutlet } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, NgFor, NgTemplateOutlet],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  schemas: [NO_ERRORS_SCHEMA],
})
export class SkillsComponent {
  skills = [
    'Python',
    'Java',
    'JavaScript',
    'TypeScript',
    'Html5',
    'Css3',
    'Angular',
    'React',
    'Bootstrap',
    'Tailwind CSS',
    'Spring Boot',
    'Node JS',
    'Scrum',
    'WordPress',
  ];

  getRandom(){
    let randomVal = (Math.random() * 20) - 10;
    return `rotate(${randomVal}deg)`
  }

}
