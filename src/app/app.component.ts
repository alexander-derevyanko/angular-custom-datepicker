import {Component} from '@angular/core';
import {DateRange} from "./date-range";

declare const moment: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  start: Date = moment();
  end: Date = moment();
  dateRange: DateRange;
  pickerOptions: Object = {
    startDate: this.start,
    endDate: this.end,
    opens: 'right',
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
  };

  constructor() {
  }

  dateSelected(dateRange: DateRange) {
    this.dateRange = dateRange;
    console.log(dateRange);
  }
}
