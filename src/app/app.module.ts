import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule,DatePipe } from '@angular/common';  
import { LoginserviceService } from 'src/services/loginservice.service';
import { AuthGuard } from 'src/services/auth.guard';
import { AuthInterceptor } from 'src/services/auth.interceptor';
import { PlayerlistComponent } from './components/courselist/courselist.component';
import {MatTableModule} from '@angular/material/table';
import { AddplayerComponent } from './components/addcourse/addcourse.component';
import { EventlistComponent } from './components/studentlist/studentlist.component';
import { AddeventsComponent } from './components/addstudent/addstudent.component';
import { SearchEventsComponent } from './components/searchStudent/search-student.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    DashboardComponent,
    LoginComponent,
    PlayerlistComponent,
    EventlistComponent,
    AddeventsComponent,
    AddplayerComponent,
    SearchEventsComponent,
    AppComponent,
    UpdateStudentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatSelectModule,
    NgSelectModule
  ],
  providers: [DatePipe,LoginserviceService,AuthGuard,[{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true}]],
  bootstrap: [AppComponent]
})
export class AppModule { }
