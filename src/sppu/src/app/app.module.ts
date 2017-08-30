import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FacultyDetailsComponent } from './academics/facultyDetails.component';
import { CourseOfferedComponent } from './academics/courseOffered.component';
import { CampusTourComponent } from './campusTour/campusTour.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { CalendarOfEventsComponent } from './home/calendarOfEvents.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'facultyDetails', component: FacultyDetailsComponent },
  { path: 'courseOffered', component: CourseOfferedComponent },
  { path: 'campusTour', component: CampusTourComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'news', component: NewsComponent },
  { path: 'calendarOfEvents', component: CalendarOfEventsComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FacultyDetailsComponent,
    CourseOfferedComponent,
    CampusTourComponent,
    ContactComponent,
    NewsComponent,
    CalendarOfEventsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{useHash:true}),
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
