import { Component, VERSION, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';

import { Result } from '@zxing/library';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

}
