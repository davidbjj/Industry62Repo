import { Component, OnInit } from '@angular/core';
import { calculateService } from '../services/calculateService';
import { FormBuilder, Validators, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calculate-points',
  templateUrl: './calculate-points.component.html',
  styleUrls: ['./calculate-points.component.scss']
})
export class CalculatePointsComponent implements OnInit {

isLoading: Subject<boolean> = this.calculateService.isLoading;

// tslint:disable-next-line: no-shadowed-variable
constructor(private fb: FormBuilder, private calculateService: calculateService, private router: Router) { }

pointsResult: number;

calculateForm = this.fb.group({
  sportName: [null, Validators.required],
  markpoint: [null, Validators.required],
  points: null
});

sportLists = this.calculateService.getTableData();
ngOnInit() {}

  onClickSubmit() {
    const mark = ((document.getElementById('markpoint') as HTMLInputElement).value);
    const markResult = parseFloat(mark);
    this.calculateService.getResult(this.calculateForm.controls.sportName.value, markResult
      ).subscribe(response => this.handleSuccessfulResponse(response)
       );
    }

handleSuccessfulResponse(response) {
    this.pointsResult = response;
    alert('Declathon points result : ' + this.pointsResult);
}

}
