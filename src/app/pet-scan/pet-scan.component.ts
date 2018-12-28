import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup, AbstractControl} from '@angular/forms';
import {ValidatorNegative, ValidatorOverlap} from '../validator';

@Component({
  selector: 'app-pet-scan',
  templateUrl: './pet-scan.component.html',
  styleUrls: ['./pet-scan.component.css']
})
export class PetScanComponent implements OnInit {
  pharmControl: AbstractControl;
  IsotopeControl: AbstractControl;
  unitControl: AbstractControl;
  durationControl: AbstractControl;
  doseControl: AbstractControl;
  dateControl: AbstractControl;
  timeControl: AbstractControl;
  durValControl: AbstractControl;
  bedControl: AbstractControl;
  overlapControl: AbstractControl;
  commentsControl: AbstractControl;
  duration: string[] = ['sec', 'min', 'hr'];
  unit: string[] = ['mCi', 'MBq'];
  reagent: string[] = ['FDG'];
  Isotope: string[] = ['F-18'];
  petScanForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.petScanForm = fb.group({
      'pharmControl': ['', Validators.required],
      'IsotopeControl': ['', Validators.required],
      'unitControl': ['', Validators.required],
      'durationControl': ['', Validators.required],
      'doseControl': ['', Validators.compose([Validators.required, ValidatorNegative])],
      'dateControl': ['', Validators.required],
      'timeControl': ['', Validators.required],
      'durValControl': ['', Validators.compose([Validators.required, ValidatorNegative])],
      'bedControl': ['', Validators.compose([Validators.required, ValidatorNegative])],
      'overlapControl': ['', Validators.compose([Validators.required, ValidatorOverlap])],
      'commentsControl': ['', Validators.required],
    });
    this.pharmControl = this.petScanForm.controls['pharmControl'];
    this.IsotopeControl = this.petScanForm.controls['IsotopeControl'];
    this.unitControl = this.petScanForm.controls['unitControl'];
    this.durationControl = this.petScanForm.controls['durationControl'];
    this.doseControl = this.petScanForm.controls['doseControl'];
    this.dateControl = this.petScanForm.controls['dateControl'];
    this.timeControl = this.petScanForm.controls['timeControl'];
    this.durValControl = this.petScanForm.controls['durValControl'];
    this.bedControl = this.petScanForm.controls['bedControl'];
    this.overlapControl = this.petScanForm.controls['overlapControl'];
    this.commentsControl = this.petScanForm.controls['commentsControl'];

  }

  ngOnInit() {
  }

}
