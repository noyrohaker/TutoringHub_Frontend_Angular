import { Component, OnInit } from '@angular/core';
// import { AppModule } from 'src/app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor() {}

  title = 'angular-text-search-highlight';
  searchText = '';

  teachersArray = [
    {
      teacherName: 'Noy Rohaker',
      city: 'Kiryat Ono',
      classType: 'Math',
      ageRange: '16-20',
    },
    {
      teacherName: 'Gal Blond',
      city: 'Tel Aviv',
      classType: 'Math',
      ageRange: '10-20',
    },
    {
      teacherName: 'Adi Hahamov',
      city: 'Holon',
      classType: 'Math',
      ageRange: '14-21',
    },
    {
      teacherName: 'Alona Haimov',
      city: 'Ashdod',
      classType: 'Math',
      ageRange: '17-20',
    },
  ];
}
