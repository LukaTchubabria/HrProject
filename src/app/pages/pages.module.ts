import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { PagesRoutingModule } from './pages-routing.module';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { SubscribedComponent } from './subscribed/subscribed.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [MainComponent, HomeComponent, BookmarksComponent, HelpComponent, AboutComponent, AuthComponent, SubscribedComponent, ChatComponent, ProfileComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule
  ]
})
export class PagesModule { }
