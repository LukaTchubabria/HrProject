import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { HelpComponent } from './help/help.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { SubscribedComponent } from './subscribed/subscribed.component';
import { ChatComponent } from './chat/chat.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "bookmarks", component: BookmarksComponent },
      { path: "help", component: HelpComponent },
      { path: "about", component: AboutComponent },
      { path: "auth", component: AuthComponent, outlet: "popUp" },
      { path: "subscribed", component: SubscribedComponent },
      { path: "chat", component: ChatComponent },
      { path: "profile", component: ProfileComponent },
      { path: "", redirectTo: "home", pathMatch: "full" }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
