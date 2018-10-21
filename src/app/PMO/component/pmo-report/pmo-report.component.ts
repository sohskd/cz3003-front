import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'pmo-report',
  templateUrl: './pmo-report.component.html'
})
export class PmoReportComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

  downloadReport() {
    var doc = new jsPDF();

    doc.text('Hello world!', 10, 10);
    doc.save('a4.pdf');
  }


}
