import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatePointsComponent } from './calculate-points/calculate-points.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatInputModule, MatNativeDateModule, MatFormFieldModule,
  MatButtonModule,MatSelectModule, MatRadioModule, MatCardModule,
  MatCheckboxModule, MatTableModule, MatPaginatorModule,
  MatDialogModule, MatListModule, MatProgressBarModule,
  MatSortModule, MatIconModule, MatExpansionModule, MatGridListModule, MatSnackBarModule, MatTabsModule  } from '@angular/material';
import { calculateService } from './services/calculateService';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    CalculatePointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule, MatNativeDateModule, MatFormFieldModule,
    MatButtonModule ,MatSelectModule, MatRadioModule, MatCardModule,
    MatCheckboxModule, MatTableModule, MatPaginatorModule,
    MatDialogModule, MatListModule, MatProgressBarModule,
    MatSortModule, MatIconModule, MatExpansionModule, MatGridListModule, MatSnackBarModule, MatTabsModule,
    FormsModule, ReactiveFormsModule, HttpClientModule, MatFormFieldModule, MatProgressSpinnerModule
  ],
  providers: [calculateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
