import {Component, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder, AbstractControl} from '@angular/forms';
import {ValidatorNegative} from '../validator';


@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.css']
})
export class TableItemComponent implements OnInit {
  scanDirControl: AbstractControl;
  tablePosControl: AbstractControl;
  tableHeightControl: AbstractControl;
  scanDirValue: string[] = ['Craniocaudal', 'Caudocranial'];
  scanDirForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.scanDirForm = fb.group({
      'scanDirControl': ['', Validators.required],
      'tablePosControl': ['', Validators.compose([Validators.required, ValidatorNegative])],
      'tableHeightControl': ['', Validators.compose([Validators.required, ValidatorNegative])]
    });
    this.scanDirControl = this.scanDirForm.controls['scanDirControl'];
    this.tablePosControl = this.scanDirForm.controls['tablePosControl'];
    this.tableHeightControl = this.scanDirForm.controls['tableHeightControl'];
  }

  ngOnInit() {
  }

}
