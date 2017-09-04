import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/ng2-bootstrap';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component'
import { TheSchoolComponent } from './the-school/the-school.component';
import { TheSchoolScheduleComponent } from './the-school/school-schedule/school-schedule.component';
import { TheSchoolAchievementsComponent } from './the-school/achievements/achievements.component';
import { TheSchoolNewsComponent } from './the-school/news/news.component';
import { TheSchoolTrainTheTeacherComponent } from './the-school/train-the-teacher/train-the-teacher.component';
import { PreNurseryComponent } from './pre-nursery/pre-nursery.component';
import { ActivitiesComponent } from './pre-nursery/activities/activities.component';
import { CulturalEventsComponent } from './pre-nursery/cultural-events/cultural-events.component';
import { OurPhilosophyComponent } from './pre-nursery/our-philosophy/our-philosophy.component';
import { PhysicalDevelopmentComponent } from './pre-nursery/physical-development/physical-development.component';
import { NurseryComponent } from './nursery/nursery.component';
import { NurseryAssessmentsComponent } from './nursery/assessments/assessments.component';
import { NurseryCompetitionsComponent } from './nursery/competitions/competitions.component';
import { NurseryCulturalEventsComponent } from './nursery/cultural-events/cultural-events.component';
import { NurseryDayAtSchoolComponent } from './nursery/day-at-school/day-at-school.component';
import { NurseryTechnologyComponent } from './nursery/technology/technology.component';
import { PrimaryComponent } from './primary/primary.component';
import { PrimaryAssessmentsComponent } from './primary/assessments/assessments.component';
import { PrimaryCompetitionsComponent } from './primary/competitions/competitions.component';
import { PrimaryExtraCurricularComponent } from './primary/extra-curricular-activities/extra-curricular-activities.component';
import { PrimaryHolisticDevelopmentComponent } from './primary/holistic-development/holistic-development.component';
import { PrimaryInfrastructureComponent } from './primary/infrastructure/infrastructure.component';
import { ContactComponent } from './contact/contact.component';


const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'school', component: TheSchoolComponent },
  { path: 'schoolSchedule', component: TheSchoolScheduleComponent },
  { path: 'schoolAchievements', component: TheSchoolAchievementsComponent },
  { path: 'schoolNews', component: TheSchoolNewsComponent },
  { path: 'schoolTrainTheTeacher', component: TheSchoolTrainTheTeacherComponent },
  { path: 'prenursery', component: PreNurseryComponent },
  { path: 'prenurseryActivities', component: ActivitiesComponent },
  { path: 'prenurseryCulturalEvents', component: CulturalEventsComponent },
  { path: 'prenurseryPhilosophy', component: OurPhilosophyComponent },
  { path: 'prenurseryPhysicalDevelopment', component: PhysicalDevelopmentComponent },
  { path: 'nursery', component: NurseryComponent },
  { path: 'nurseryAssessments', component: NurseryAssessmentsComponent },
  { path: 'nurseryCompetitions', component: NurseryCompetitionsComponent },
  { path: 'nurseryCulturalEvents', component: NurseryCulturalEventsComponent },
  { path: 'nurseryDayAtSchool', component: NurseryDayAtSchoolComponent },
  { path: 'nurseryTechnology', component: NurseryTechnologyComponent },
  { path: 'primary', component: PrimaryComponent },
  { path: 'primaryAssessments', component: PrimaryAssessmentsComponent },
  { path: 'primaryCompetitions', component: PrimaryCompetitionsComponent },
  { path: 'primaryExtraCurricularActivities', component: PrimaryExtraCurricularComponent },
  { path: 'primaryHolisticDevelopment', component: PrimaryHolisticDevelopmentComponent },
  { path: 'primaryInfrastructure', component: PrimaryInfrastructureComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TheSchoolComponent,
    TheSchoolScheduleComponent,
    TheSchoolAchievementsComponent,
    TheSchoolNewsComponent,
    TheSchoolTrainTheTeacherComponent,
    PreNurseryComponent,
    ActivitiesComponent,
    CulturalEventsComponent,
    OurPhilosophyComponent,
    PhysicalDevelopmentComponent,
    NurseryComponent,
    NurseryAssessmentsComponent,
    NurseryCompetitionsComponent,
    NurseryCulturalEventsComponent,
    NurseryDayAtSchoolComponent,
    NurseryTechnologyComponent,
    PrimaryComponent,
    PrimaryAssessmentsComponent,
    PrimaryCompetitionsComponent,
    PrimaryExtraCurricularComponent,
    PrimaryHolisticDevelopmentComponent,
    PrimaryInfrastructureComponent,
    ContactComponent,
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
