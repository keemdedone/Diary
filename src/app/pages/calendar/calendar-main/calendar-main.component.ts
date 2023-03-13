import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-main',
  templateUrl: './calendar-main.component.html',
  styleUrls: ['./calendar-main.component.scss'],
})
export class CalendarMainComponent implements OnInit {
  dayName = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  days: boolean[] = [];
  daysBefore: string[] = [];
  daysAfter: string[] = [];
  currentDate = new Date();
  selectMonth: number;
  selectYear: number;

  constructor() {
    this.selectMonth = new Date().getMonth() + 1;
    this.selectYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.getDays();
  }

  getDays() {
    this.getBeforeDays();
    this.getAfterDays();
    const days = new Date(this.selectYear, this.selectMonth, 0).getDate();
    this.days = new Array(days).fill(false);
  }

  getBeforeDays() {
    const beforeMonth = new Date(
      this.selectYear,
      this.selectMonth - 1,
      0
    ).getDay();
    const daysBefore =
      beforeMonth != 0
        ? new Array(beforeMonth).fill('')
        : new Array(6).fill('');
    this.daysBefore = daysBefore;
  }

  getAfterDays() {
    const afterMonth = new Date(this.selectYear, this.selectMonth, 0).getDay();
    const daysAfter = afterMonth != 0 ? new Array(7 - afterMonth).fill('') : [];
    this.daysAfter = daysAfter;
  }
}
