import { Routes } from '@angular/router';
import { TasklistComponent } from './tasklist/tasklist.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
    {path:'tasklist',component:TasklistComponent},
    {
        path:'login',component:LoginComponent
    },
    {
        path:'registration',component:RegistrationComponent
    }
];
