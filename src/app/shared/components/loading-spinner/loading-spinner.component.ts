import { Component } from '@angular/core';
import { LoadingServiceService } from '../../service/loading-service.service';

@Component({
  selector: 'app-loading-spinner',
  template:
    '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {

  constructor(public loadingService: LoadingServiceService) {}

}
