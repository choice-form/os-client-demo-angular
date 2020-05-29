import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import QRCode from 'qrcode';
@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.scss']
})
export class QrCodeComponent implements OnInit, AfterViewInit {
  @Input() text: string;
  @ViewChild('qrCodeTarget') qrCodeTarget: ElementRef<HTMLDivElement>;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    QRCode.toCanvas(this.text, {
      color: { dark: '#000000', light: '#FFFFFF' },
      width: 200,
    }, (error, canvas) => {
      if (error) {
        throw error;
      }
      this.qrCodeTarget.nativeElement.appendChild(canvas);
    });
  }
}
