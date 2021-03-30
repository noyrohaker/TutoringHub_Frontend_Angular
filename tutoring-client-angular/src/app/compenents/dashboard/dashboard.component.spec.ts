import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterPipe } from './filter.pipe';
import { DashboardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// import { TestBed, async } from '@angular/core/testing';
// import { DashboardComponent } from './dashboard.component';

// describe('AppComponent', () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [DashboardComponent],
//     }).compileComponents();
//   }));

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(DashboardComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'angular-text-search-highlight'`, () => {
//     const fixture = TestBed.createComponent(DashboardComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('angular-text-search-highlight');
//   });

//   it('should render title', () => {
//     const fixture = TestBed.createComponent(DashboardComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('.content span').textContent).toContain(
//       'angular-text-search-highlight app is running!'
//     );
//   });
// });
