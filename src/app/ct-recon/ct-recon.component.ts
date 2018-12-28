import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup, AbstractControl} from '@angular/forms';
import {ValidatorDenoise, ValidatorFOV} from '../validator';

@Component({
  selector: 'app-ct-recon',
  templateUrl: './ct-recon.component.html',
  styleUrls: ['./ct-recon.component.css']
})
export class CtReconComponent implements OnInit {
  filterControl: AbstractControl;
  thicknessControl: AbstractControl;
  incrementControl: AbstractControl;
  windowingControl: AbstractControl;
  imageMatrixControl: AbstractControl;
  offsetXControl: AbstractControl;
  offsetYControl: AbstractControl;
  fovControl: AbstractControl;
  commentsControl: AbstractControl;
  denoiseControl: AbstractControl;
  filterValue: string[] = ['Soft', 'Standard', 'Lung/Bone', 'Sharp', 'Edge'];
  thicknessValue: string[] = ['0.3125', '0.625', '1.25', '2.5', '5', '7.5', '10'];
  incrementControlValue: string[] = ['0.3125', '0.625', '1.25', '2.5', '5', '7.5', '10'];
  windowingControlValue: string[] = ['head', 'abdomen', 'mediastinum', 'tooth', 'CTA', 'spine'];
  imageMatrixControlValue: string[] = ['512*512', '1024*1024'];
  ctReconForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.ctReconForm = fb.group({
      'thicknessControl': ['', Validators.required],
      'incrementControl': ['', Validators.required],
      'filterControl': ['', Validators.required],
      'windowingControl': ['', Validators.required],
      'imageMatrixControl': ['', Validators.required],
      'offsetXControl': ['', Validators.required],
      'offsetYControl': ['', Validators.required],
      'fovControl': ['', Validators.compose([Validators.required, ValidatorFOV])],
      'commentsControl': ['', Validators.required],
      'denoiseControl': ['', Validators.compose([Validators.required, ValidatorDenoise])],
    });
    this.filterControl = this.ctReconForm.controls['filterControl'];
    this.incrementControl = this.ctReconForm.controls['incrementControl'];
    this.thicknessControl = this.ctReconForm.controls['thicknessControl'];
    this.windowingControl = this.ctReconForm.controls['windowingControl'];
    this.imageMatrixControl = this.ctReconForm.controls['imageMatrixControl'];
    this.offsetXControl = this.ctReconForm.controls['offsetXControl'];
    this.offsetYControl = this.ctReconForm.controls['offsetYControl'];
    this.fovControl = this.ctReconForm.controls['fovControl'];
    this.commentsControl = this.ctReconForm.controls['commentsControl'];
    this.denoiseControl = this.ctReconForm.controls['denoiseControl'];
  }

  ngOnInit() {
  }

}
