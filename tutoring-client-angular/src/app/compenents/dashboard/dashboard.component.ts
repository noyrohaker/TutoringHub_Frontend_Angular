import { Component, OnInit } from '@angular/core';
// import { AppModule } from 'src/app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DockOutlined } from '@material-ui/icons';

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
  teachersFilteredArray = this.teachersArray;

  onSearchChange(searchValue: string, id: string): void {
    if (!searchValue) {
      this.teachersFilteredArray = this.teachersArray;
    }

    searchValue = searchValue.toLowerCase();

    if (id == 'searchTeacherName') {
      this.teachersFilteredArray = this.teachersArray.filter((it) => {
        return it.teacherName.toLowerCase().includes(searchValue);
      });
    } else if (id == 'searchCity') {
      this.teachersFilteredArray = this.teachersArray.filter((it) => {
        return it.city.toLowerCase().includes(searchValue);
      });
    } else if (id == 'searchClassType') {
      this.teachersFilteredArray = this.teachersArray.filter((it) => {
        return it.classType.toLowerCase().includes(searchValue);
      });
    } else {
      this.teachersFilteredArray = this.teachersArray.filter((it) => {
        return it.ageRange.toLowerCase().includes(searchValue);
      });
    }
  }
}
