import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-calendar-main',
  templateUrl: './calendar-main.component.html',
  styleUrls: ['./calendar-main.component.scss'],
})
export class CalendarMainComponent implements OnInit {
  dayName = [
    ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    ['จันทร์', 'อังคาร', 'พุธ', 'พฤหัส', 'ศุกร์', 'เสาร์', 'อาทิตย์'],
  ];
  monthName = [
    [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    [
      'มกราคม',
      'กุมภาพันธ์',
      'มีนาคม',
      'เมษายน',
      'พฤษภาคม',
      'มิถุนายน',
      'กรกฎาคม',
      'สิงหาคม',
      'กันยายน',
      'ตุลาคม',
      'พฤศจิกายน',
      'ธันวาคม',
    ],
  ];
  days: boolean[] = [];
  daysBefore: string[] = [];
  daysAfter: string[] = [];
  currentDate = new Date();
  selectMonth: number;
  selectYear: number;
  lang: number;

  constructor(private dataService: DataService) {
    this.selectMonth = new Date().getMonth();
    this.selectYear = new Date().getFullYear();
    this.lang = this.dataService.getLanguage();
  }

  ngOnInit(): void {
    this.getDays();
  }

  getDays() {
    this.getBeforeDays();
    this.getAfterDays();
    const days = new Date(this.selectYear, this.selectMonth + 1, 0).getDate();
    this.days = new Array(days).fill(false);
  }

  getBeforeDays() {
    const beforeMonth = new Date(this.selectYear, this.selectMonth, 0).getDay();
    const daysBefore =
      beforeMonth != 0
        ? new Array(beforeMonth).fill('')
        : new Array(0).fill('');
    this.daysBefore = daysBefore;
  }

  getAfterDays() {
    const afterMonth = new Date(
      this.selectYear,
      this.selectMonth + 1,
      0
    ).getDay();
    const daysAfter = afterMonth != 0 ? new Array(7 - afterMonth).fill('') : [];
    this.daysAfter = daysAfter;
  }

  onCurrentDate() {
    this.selectMonth = new Date().getMonth();
    this.selectYear = new Date().getFullYear();
    this.getDays();
  }

  onNextMonth() {
    if (this.selectMonth == 11) {
      this.selectMonth = 0;
      this.selectYear += 1;
    } else {
      this.selectMonth += 1;
    }
    this.getDays();
  }

  onPreviousMonth() {
    if (this.selectMonth == 0) {
      this.selectMonth = 11;
      this.selectYear -= 1;
    } else {
      this.selectMonth -= 1;
    }
    this.getDays();
  }
}
