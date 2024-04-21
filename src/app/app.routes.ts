import { Routes } from '@angular/router';
import { VectorsComponent, KinematicsComponent } from './contents/mechanics';

export const routes: Routes = [
  { path: 'vectors', component: VectorsComponent },
  { path: 'kinematics', component: KinematicsComponent },
];
