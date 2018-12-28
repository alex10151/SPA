import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup, AbstractControl} from '@angular/forms';
import {ValidatorMA, ValidatorNegative} from '../validator';

@Component({
  selector: 'app-ct-scan',
  templateUrl: './ct-scan.component.html',
  styleUrls: ['./ct-scan.component.css']
})
export class CtScanComponent implements OnInit {
  kVControl: AbstractControl;
  mAControl: AbstractControl;
  startControl: AbstractControl;
  endControl: AbstractControl;
  pitchControl: AbstractControl;
  rotTimeControl: AbstractControl;
  lengthControl: AbstractControl;
  commentsControl: AbstractControl;

  kVValue: string[] = ['80kV', '100kV', '120kV', '140kV'];
  pitchVal: number[] = [0.5, 0.75, 1.0, 1.6, 2];
  rotVal: number[] = [0.5, 0.8, 1.0, 1.6, 2];
  ctScanForm: FormGroup;
  @ViewChild('app-table-item') tableItem;

  constructor(fb: FormBuilder) {
    this.ctScanForm = fb.group({
      'kVControl': ['', Validators.required],
      'mAControl': ['', Validators.compose([Validators.required, ValidatorMA])],
      'startControl': ['', Validators.required],
      'endControl': ['', Validators.required],
      'pitchControl': ['', Validators.required],
      'rotTimeControl': ['', Validators.required],
      'lengthControl': ['', Validators.compose([Validators.required, ValidatorNegative])],
      'commentsControl': ['', Validators.required],
    });
    this.kVControl = this.ctScanForm.controls['kVControl'];
    this.mAControl = this.ctScanForm.controls['mAControl'];
    this.startControl = this.ctScanForm.controls['startControl'];
    this.endControl = this.ctScanForm.controls['endControl'];
    this.pitchControl = this.ctScanForm.controls['pitchControl'];
    this.rotTimeControl = this.ctScanForm.controls['rotTimeControl'];
    this.lengthControl = this.ctScanForm.controls['lengthControl'];
    this.commentsControl = this.ctScanForm.controls['commentsControl'];
  }

  ngOnInit() {
  }

  onPush(x: number) {
    console.log(x);
  }
}
