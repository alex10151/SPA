import {Item} from './store';
import {Time} from '@angular/common';

export interface Patient {
  type: 'Patient';
  readonly name: string;
  readonly birthday: Date;
  readonly externalId?: string;
}

export interface Study {
  type: 'Study';
  readonly patientId: string;
  readonly name: string;
  readonly sex?: 'male' | 'female' | 'other';
  readonly weight?: number;
  readonly height?: number;
  readonly info?: string;
}

export type ProtocolState = 'created' | 'running' | 'complete' | 'canceled';

interface ProtocolBase {
  type: 'Protocol';
  readonly studyId: string;
  readonly name: string;
  readonly state: ProtocolState;
  readonly progress?: number;
}

export interface Tomo extends ProtocolBase {
  modality: 'Tomo';
  index: 0;
}

export interface CT extends ProtocolBase {
  modality: 'CT';
  index: number;
}

export interface PET extends ProtocolBase {
  modality: 'PET';
  index: number;
}

export type Protocol = CT | PET | Tomo;
export type Modality = Protocol['modality'];

export interface Scan {
  type: 'Scan';
  readonly protocolId: string;
  readonly name: string;
  readonly index: number;
  readonly start?: Date;
  readonly end?: Date;
  readonly estimateSeconds?: number;
  readonly tablePosition: number;
  readonly Height: number;
  Comments: string;
}

export type voltage = 80 | 100 | 120 | 140;
export type tube = 0 | 90 | 180 | 270;

export interface TomoScan extends Scan {
  kV: voltage;
  mA: number;
  tomogramLength: number;
  tubePosition: tube;

}

export type pitchVal = 0.5 | 0.75 | 1.0 | 1.375 | 1.5;
export type rotTime = 0.5 | 0.8 | 1.0 | 1.5 | 2.0;

export interface CTScan extends Scan {
  kV: voltage;
  mA: number;
  pitch: pitchVal;
  rotTime: rotTime;
  scanTime: number;
  startPos: number;
  endPos: number;
  length: number;
  isCraniocaudal: boolean;

}

export type pharm = 'FDG' | undefined;
export type isotopeType = 'F-18' | undefined;

export interface PETScan extends Scan {
  pharmaceutical: pharm;
  isotope: isotopeType;
  injectionDose: number;
  injectionDate: Date;
  injectionTime: Time;
  isMatchCT: boolean;
  scanDuration: number;
  beds: number;
  isCraniocaudal: boolean;

}

export interface Recon {
  type: 'Recon';
  readonly scanId: string;
  readonly index: number;
  offsetX: number;
  offsetY: number;
  imageMatrix: matrix;
}

export type thick = 0.3125 | 0.625 | 1.25 | 2.5 | 5 | 7.5 | 10;
export type increment = 0.3125 | 0.625 | 1.25 | 2.5 | 5 | 7.5 | 10;
export type ctFilter = 'Soft' | 'Standard' | 'Lung/Bone' | 'Sharp' | 'Edge';
export type window = 'head' | 'abdomen' | 'mediastinum' | 'tooth' | 'CTA' | 'spine';
export type matrix = '512*512' | '1024*1024';

export interface CTRecon extends Recon {
  thickness: thick;
  increment: increment;
  filter: ctFilter;
  windowing: window;
  fov: number;
  comments: string;
  metalArtifact: boolean;
  boneArtifact: boolean;
  deNoising: boolean;
  deNoisingVal: number;
}

export type alg = 'HD-RECON' | 'FBP' | '2D-OSEM';
export type rebin = 'singe-slice' | 'FORE';
export type petFilter = 'Gaussian' | undefined;

export interface PETRecon extends Recon {
  algorithm: alg;
  subset: string;
  iterations: number;
  rebinning: rebin;
  zoom: number;
  filter: petFilter;
  fwhm: number;
  attenuationCorrectionCT: string;
  scatterCorrection: boolean;
  saveUMap: boolean;
  matchCT: boolean;

}

export type DBModel = Patient | Study | Protocol | Scan | Recon;

export type ModelType = DBModel['type'];

export type DBItem =
  | Item<Patient>
  | Item<Study>
  | Item<Protocol>
  | Item<Scan>
  | Item<Recon>;
export type ModelOf<K extends ModelType> = Extract<DBModel, { type: K }>;
export type ItemOf<K extends ModelType> = Item<ModelOf<K>>;
