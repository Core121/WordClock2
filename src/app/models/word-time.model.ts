export class WordTime {
  public currentTime: Date;
  public weekDay: string = '';
  public hour: string = '';
  public minute: string = '';
  public preposition: string = '';
  public period: string = '';

  constructor() {
    this.currentTime = new Date();
    this.hour = this.getHoursInWords();
    this.minute = this.getMinutesInWords();
    this.preposition = this.getPreposition();
    this.period = this.getTimePeriod();
    this.weekDay = this.getWeekdayInWords();
  }

  private getHoursInWords(): string {
    var hour = this.currentTime.getHours();
    var minute = this.currentTime.getMinutes();
    if (hour === 24 && minute === 0) {
      return 'midnight';
    } else if (hour === 12 && minute === 0) {
      return 'noon';
    } else {
      hour = minute > 32 ? hour + 1 : hour;
      hour = hour > 12 ? hour - 12 : hour;
      switch (hour) {
        case 1:
          return 'one';
        case 2:
          return 'two';
        case 3:
          return 'three';
        case 4:
          return 'four';
        case 5:
          return 'five';
        case 6:
          return 'six';
        case 7:
          return 'seven';
        case 8:
          return 'eight';
        case 9:
          return 'nine';
        case 10:
          return 'ten';
        case 11:
          return 'eleven';
        case 12:
          return 'twelve';
        default:
          return '';
      }
    }
  }

  private getMinutesInWords(): string {
    var coeff = 1000 * 60 * 5;
    var rounded = new Date(
      Math.round(this.currentTime.getTime() / coeff) * coeff
    );
    switch (rounded.getMinutes()) {
      case 5:
        return 'five past';
      case 10:
        return 'ten past';
      case 15:
        return 'quarter past';
      case 20:
        return 'twenty past';
      case 25:
        return 'twenty-five past';
      case 30:
        return 'half past';
      case 35:
        return 'twenty-five to';
      case 40:
        return 'twenty to';
      case 45:
        return 'quarter to';
      case 50:
        return 'ten to';
      case 55:
        return 'five to';
      default:
        return '';
    }
  }

  private getWeekdayInWords(): string {
    const weekDay = this.currentTime.getDay();
    switch (weekDay) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
      default:
        return '';
    }
  }

  private getRoughMinute(): number {
    var roughMinute = this.currentTime.getMinutes() % 5;
    switch (roughMinute) {
      case 1:
      case 2:
        return 1;
      case 3:
      case 4:
        return -1;
      default:
        return 0;
    }
  }

  private getPreposition(): string {
    var roughMinute = this.getRoughMinute();
    switch (roughMinute) {
      case -1:
        var earlyTimes = ['almost', 'nearly', 'just about'];
        return earlyTimes[Math.floor(Math.random() * earlyTimes.length)];
      case 1:
        var lateTimes = ['a little after', 'about', 'around', 'roughly'];
        return lateTimes[Math.floor(Math.random() * lateTimes.length)];
      default:
        var onTimes = ['exactly', 'precisely', 'now', ''];
        return onTimes[Math.floor(Math.random() * onTimes.length)];
    }
  }

  private getTimePeriod(): string {
    var currentHour = this.currentTime.getHours();
    currentHour =
      this.currentTime.getMinutes() > 32 ? currentHour + 1 : currentHour;
    if (currentHour >= 5 && currentHour < 12) {
      return 'in the morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      return 'in the afternoon';
    } else if (currentHour >= 17 && currentHour < 21) {
      return 'in the evening';
    } else {
      return 'at night';
    }
  }
}
