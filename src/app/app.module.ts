import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { AccordinosComponent } from './components/pages/elements/accordinos/accordinos.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogSingleComponent } from './components/pages/blog-single/blog-single.component';
import { PriceComponent } from './components/pages/price/price.component';
import { TeamComponent } from './components/pages/team/team.component';
import { ButtonComponent } from './components/pages/elements/button/button.component';
import { ProjectComponent } from './components/project/project.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ServiceComponent,
    ContactComponent,
    AccordinosComponent,
    BlogComponent,
    BlogSingleComponent,
    PriceComponent,
    TeamComponent,
    ButtonComponent,
    ProjectComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    TestimonialComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
