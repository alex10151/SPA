import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import {TomoScan} from '../state/model';
import {Input} from '@angular/core';
import {ValidatorMA, ValidatorNegative} from '../validator';

@Component({
  selector: 'app-tomo',
  templateUrl: './tomo.component.html',
  styleUrls: ['./tomo.component.css']
})
export class TomoComponent implements OnInit {
  kVControl: AbstractControl;
  tubePosControl: AbstractControl;
  mAControl: AbstractControl;
  lengthControl: AbstractControl;
  commentsControl: AbstractControl;
  kVValue: string[] = ['80kV', '100kV', '120kV', '140kV'];
  tubePosValue: string[] = ['0 degree', '90 degree', '180 degree', '270 degree'];
  @Input() tomoScan: TomoScan;
  tomoScanForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.tomoScanForm = fb.group({
      'kVControl': ['', Validators.required],
      'tubePosControl': ['', Validators.required],
      'mAControl': ['', Validators.compose([Validators.required, ValidatorMA])],
      'lengthControl': ['', Validators.compose([Validators.required, ValidatorNegative])],
      'commentsControl': ['', Validators.required],
    });
    this.kVControl = this.tomoScanForm.controls['kVControl'];
    this.tubePosControl = this.tomoScanForm.controls['tubePosControl'];
    this.mAControl = this.tomoScanForm.controls['mAControl'];
    this.lengthControl = this.tomoScanForm.controls['lengthControl'];
    this.commentsControl = this.tomoScanForm.controls['commentsControl'];
    // this.mAControl.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });
  }

  ngOnInit() {
  }
}
