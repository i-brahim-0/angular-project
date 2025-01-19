import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CountdownService {
  private readonly C = 1000;
  private readonly O = 60;
  private readonly U = 60;
  private readonly x = 24;
  private readonly R = this.x * this.U * this.O * this.C;
  private readonly K = 7;
  private readonly W = 12;
  private readonly q = 10;
  private readonly z = 10;
  private readonly B = 10;

  constructor() {}

  private s(e: Date, s: number): number {
    const n = e.getTime();
    e.setMonth(e.getMonth() + s);
    return Math.round((e.getTime() - n) / this.R);
  }

  private n(e: Date): number {
    const s = e.getTime();
    const n = new Date(s);
    n.setMonth(e.getMonth() + 1);
    return Math.round((n.getTime() - s) / this.R);
  }

  private t(e: Date): number {
    const s = e.getTime();
    const n = new Date(s);
    n.setFullYear(e.getFullYear() + 1);
    return Math.round((n.getTime() - s) / this.R);
  }

  private i(e: any, s: Date | null): Date {
    s =
      s instanceof Date || (s !== null && isFinite(+s))
        ? new Date(+s)
        : new Date();
    if (!e) return s;

    let n: number = +e.value || 0;
    if (n) {
      s.setTime(s.getTime() + n);
      return s;
    }

    n = +e.milliseconds || 0;
    if (n) s.setMilliseconds(s.getMilliseconds() + n);

    n = +e.seconds || 0;
    if (n) s.setSeconds(s.getSeconds() + n);

    n = +e.minutes || 0;
    if (n) s.setMinutes(s.getMinutes() + n);

    n = +e.hours || 0;
    if (n) s.setHours(s.getHours() + n);

    n = +e.weeks || 0;
    if (n) n *= this.K;

    n += +e.days || 0;
    if (n) s.setDate(s.getDate() + n);

    n = +e.months || 0;
    if (n) s.setMonth(s.getMonth() + n);

    n = +e.millennia || 0;
    if (n) n *= this.B;

    n += +e.centuries || 0;
    if (n) n *= this.z;

    n += +e.decades || 0;
    if (n) n *= this.q;

    n += +e.years || 0;
    if (n) s.setFullYear(s.getFullYear() + n);

    return s;
  }

  private r(e: number, s: string): string {
    return `${e} ${s}`;
  }

  private o(): void {}

  private u(e: any, s: string): void {
    // Adjust units based on thresholds (omitted for simplicity)
  }

  private a(
    e: any,
    s: number,
    n: string,
    t: string,
    i: number,
    r: number
  ): number {
    if (e[n] >= 0) {
      s += e[n];
      delete e[n];
    }
    s /= i;
    return s <= 1 ? 0 : 0;
  }

  // يمكنك إضافة دوال أخرى هنا...

  // وظائف عامة قابلة للاستخدام
  public calculateMonthsDifference(e: Date, s: number): number {
    return this.s(e, s);
  }

  public calculateNextMonthDifference(e: Date): number {
    return this.n(e);
  }

  public calculateNextYearDifference(e: Date): number {
    return this.t(e);
  }

  public modifyDate(e: any, s: Date | null): Date {
    return this.i(e, s);
  }

  public formatTime(e: number, s: string): string {
    return this.r(e, s);
  }

  public adjustTime(e: any, s: string): void {
    this.u(e, s);
  }
}
