import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KeypadComponent } from './keypad/keypad.component';
import { PadComponent } from './pad/pad.component';
import { HomeComponent } from './home/home.component';
import { PracticeHomeComponent } from './practice-home/practice-home.component';
import { CreationHomeComponent } from './creation-home/creation-home.component';
import { VanshiPracticeHomeComponent } from './vanshi-practice-home/vanshi-practice-home.component';
import { ShankhaPracticeHomeComponent } from './shankha-practice-home/shankha-practice-home.component';
import { AnakPracticeHomeComponent } from './anak-practice-home/anak-practice-home.component';

const routes: Routes = [
  { path: 'rachanaLekhani', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'practice', component: PracticeHomeComponent },
  { path: 'creation', component: CreationHomeComponent },
  { path: 'anakPracticeHome/:rachanaName', component: AnakPracticeHomeComponent },
  { path: 'vanshiPracticeHome/:rachanaName', component: VanshiPracticeHomeComponent },
  { path: 'shankhaPracticeHome/:rachanaName', component: ShankhaPracticeHomeComponent },
  { path: 'anakPractice', component: KeypadComponent },
  { path: 'vanshiPractice', component: KeypadComponent },
  { path: 'shankhaPractice', component: KeypadComponent },

  { path: '**', component: KeypadComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
