import { Component, OnInit } from '@angular/core';

class model {
  public tabs: any =
  {
    theStudent: [
      { "Name": "Teaching Fraternity", Route: "/school" },
      { "Name": "School Schedule", Route: "/schoolSchedule" },
      { "Name": "Train The Teacher", Route: "/schoolTrainTheTeacher" },
      { "Name": "Achievements", Route: "/schoolAchievements" },
      { "Name": "News", Route: "/schoolNews" }
    ],
    prenursery: [
      { "Name": "Our Philosophy", Route: "/prenurseryPhilosophy" },
      { "Name": "Activities", Route: "/prenurseryActivities" },
      { "Name": "Physical Development", Route: "/prenurseryPhysicalDevelopment" },
      { "Name": "Cultural Events", Route: "/prenurseryCulturalEvents" }
    ],
    nursery: [
      { "Name": "Our Philosophy", Route: "/nursery" },
      { "Name": "A Day At School", Route: "/nurseryDayAtSchool" },
      { "Name": "Cultural Events", Route: "/nurseryCulturalEvents" },
      { "Name": "Competitions", Route: "/nurseryCompetitions" },
      { "Name": "Technology", Route: "/nurseryTechnology" },
      { "Name": "Assessments", Route: "/nurseryAssessments" }
    ],
    primary: [
      { "Name": "Academics", Route: "/primary" },
      { "Name": "Infrastructure", Route: "/primaryInfrastructure" },
      { "Name": "Extra-Curricular Activities", Route: "/primaryExtraCurricularActivities" },
      { "Name": "Competitions", Route: "/primaryCompetitions" },
      { "Name": "Holistic Development", Route: "/primaryHolisticDevelopment" },
      { "Name": "Assessments", Route: "/primaryAssessments" }
    ]
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public m: model;
  ngOnInit() {
    this.m = new model();
  }
}

