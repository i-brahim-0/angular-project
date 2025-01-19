import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceComponent } from './components/service/service.component';
import { PriceComponent } from './components/pages/price/price.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogSingleComponent } from './components/pages/blog-single/blog-single.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TeamComponent } from './components/pages/team/team.component';
import { ProjectComponent } from './components/project/project.component';
import { AccordinosComponent } from './components/pages/elements/accordinos/accordinos.component';
import { ButtonComponent } from './components/pages/elements/button/button.component';
import { TablesComponent } from './components/pages/elements/tables/tables.component';
import { TabsComponent } from './components/pages/elements/tabs/tabs.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'price', component: PriceComponent },
  { path: 'team', component: TeamComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog_single', component: BlogSingleComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'accordions', component: AccordinosComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'tabs', component: TabsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
