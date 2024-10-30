import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { TeamComponent } from './team/team.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { BlogsAndNewsComponent } from './blogs-and-news/blogs-and-news.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [HeaderComponent,HeroComponent,FeaturesComponent,ServicesComponent,WhyChooseUsComponent,TeamComponent,ReviewsComponent,BlogsAndNewsComponent,FooterComponent]  
})
export class AppComponent { }
