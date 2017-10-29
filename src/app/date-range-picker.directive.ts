import {
  Directive,
  Output,
  Input,
  EventEmitter,
  ElementRef,
  OnInit
} from '@angular/core';
import {DateRange} from './date-range';

declare const $: any;
declare const moment: any;

@Directive({
  selector: '[appDateRangePicker]'
})
export class DateRangePickerDirective implements OnInit {
  @Input() options: Object = {};
  @Output() selected: any = new EventEmitter();
  dateRange: DateRange = {
    title: '',
    range: ''
  };
  start: Date = moment();
  end: Date = moment();

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    $(this.elementRef.nativeElement)
      .daterangepicker(this.options, this.dateCallback.bind(this));

    this.dateCallback(this.start, this.end, '');
  }

  dateCallback(start, end, label) {
    if ((end - start) < 100) {
      this.dateRange.title = 'Today:';
      this.dateRange.range = start.format('MMM D');
    } else if (label === 'Yesterday') {
      this.dateRange.title = 'Yesterday:';
      this.dateRange.range = start.format('MMM D');
    } else {
      this.dateRange.title = '';
      this.dateRange.range = start.format('MMM D') + ' - ' + end.format('MMM D');
    }

    this.selected.emit(this.dateRange);
  }

}
