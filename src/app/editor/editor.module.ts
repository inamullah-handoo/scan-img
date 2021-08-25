import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { OpenCVConfig } from 'ngx-document-scanner';
import { NgxDocumentScannerModule } from 'ngx-document-scanner';

// set the location of the OpenCV files
const openCVConfig: OpenCVConfig = {
  openCVDirPath: '/assets/opencv'
};

@NgModule({
  declarations: [
    EditorComponent
  ],
  imports: [
    CommonModule,
    EditorRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NgxDocumentScannerModule.forRoot(openCVConfig)
  ]
})
export class EditorModule { }
