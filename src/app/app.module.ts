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
import {MatTableModule} from '@angular/material/table';
import { NgSelectModule } from '@ng-select/ng-select';
import { FooterComponent } from './components/footer/footer.component';
import { AddinventoryComponent } from './components/addinventory/addinventory.component';
import { AddorderComponent } from './components/addorder/addorder.component';
import { RegisterComponent } from './components/register/register.component';
import { InventorylistComponent } from './components/inventorylist/inventorylist.component';
import { OrderlistComponent } from './components/orderlist/orderlist.component';
import { UpdateinventoryComponent } from './components/updateinventory/updateinventory.component';
import { UpdateorderComponent } from './components/updateorder/updateorder.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    DashboardComponent,
    LoginComponent,    
    FooterComponent,
    AddinventoryComponent,
    AddorderComponent,
    RegisterComponent,
    InventorylistComponent,
    OrderlistComponent,
    UpdateinventoryComponent,
    UpdateorderComponent
    
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
