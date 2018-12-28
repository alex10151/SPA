import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup, AbstractControl} from '@angular/forms';
import {ValidatorNegative, ValidatorOverlap} from '../validator';

@Component({
  selector: 'app-pet-recon',
  templateUrl: './pet-recon.component.html',
  styleUrls: ['./pet-recon.component.css']
})
export class PetReconComponent implements OnInit {
  algControl: AbstractControl;
  rebinningControl: AbstractControl;
  subsetControl: AbstractControl;
  imgSizeControl: AbstractControl;
  filterControl: AbstractControl;
  correctControl: AbstractControl;
  iterControl: AbstractControl;
  offsetXControl: AbstractControl;
  offsetYControl: AbstractControl;
  zoomControl: AbstractControl;
  fwhmControl: AbstractControl;
  correction: string[] = [];
  filter: string[] = ['Gaussian'];
  imgSize: string[] = ['256*256', '512*512'];
  subset: string[] = [];
  rebinning: string[] = ['singe-slice', 'FORE'];
  algType: string[] = ['HD-RECON', 'FBP', '2D-OSEM'];
  petReconForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.petReconForm = fb.group({
      'algControl': ['', Validators.required],
      'rebinningControl': ['', Validators.required],
      'subsetControl': ['', Validators.required],
      'imgSizeControl': ['', Validators.required],
      'filterControl': ['', Validators.required],
      'correctControl': ['', Validators.required],
      'iterControl': ['', Validators.compose([Validators.required, ValidatorNegative])],
      'offsetXControl': ['', Validators.required],
      'offsetYControl': ['', Validators.required],
      'zoomControl': ['', Validators.compose([Validators.required, ValidatorNegative])],
      'fwhmControl': ['', Validators.compose([Validators.required, ValidatorNegative])],
    });
    this.algControl = this.petReconForm.controls['algControl'];
    this.rebinningControl = this.petReconForm.controls['rebinningControl'];
    this.subsetControl = this.petReconForm.controls['subsetControl'];
    this.imgSizeControl = this.petReconForm.controls['imgSizeControl'];
    this.filterControl = this.petReconForm.controls['filterControl'];
    this.correctControl = this.petReconForm.controls['correctControl'];
    this.iterControl = this.petReconForm.controls['iterControl'];
    this.offsetXControl = this.petReconForm.controls['offsetXControl'];
    this.offsetYControl = this.petReconForm.controls['offsetYControl'];
    this.zoomControl = this.petReconForm.controls['zoomControl'];
    this.fwhmControl = this.petReconForm.controls['fwhmControl'];

  }

  ngOnInit() {
  }

}
