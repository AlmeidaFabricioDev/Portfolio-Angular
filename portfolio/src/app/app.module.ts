import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/portfolio/pages/home/home.component';
import { HeaderComponent } from './modules/portfolio/components/header/header.component';
import { KnowledgeComponent } from './modules/portfolio/components/knowledge/knowledge.component';
import { ExperiencesComponent } from './modules/portfolio/components/experiences/experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    KnowledgeComponent,
    ExperiencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
