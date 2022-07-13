export class WordTime {
    public currentTime: Date;
    public currentWordTime: string = '';

    constructor() {
        this.currentTime = new Date();
        this.currentWordTime = this.getTime();
    }

    private getTime() : string {
        var minutesInWords = this.getMinutesInWords();
        minutesInWords += minutesInWords != '' ? '<br>' : '';
        var preposition = this.getPreposition();
        preposition += preposition != '' ? '<br>' : '';
        var hoursInWords = this.getHoursInWords();
        return 'It\'s ' + preposition + minutesInWords + hoursInWords + '.';
    }

    private getHoursInWords(): string {
        var hour = this.currentTime.getHours();
        var minute = this.currentTime.getMinutes();
        hour = hour > 12 ? hour - 12 : hour;
        hour = minute > 32 ? hour + 1 : hour;
        if (hour === 24 && minute === 0) {
            return 'midnight';
        }
        else if (hour === 12 && minute === 0) {
            return 'noon';
        }
        else {
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
        var rounded = new Date(Math.round(this.currentTime.getTime() / coeff) * coeff)
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
                return earlyTimes[Math.floor(Math.random() * earlyTimes.length)]
            case 1:
                var lateTimes = ['a little after', 'about', 'around'];
                return lateTimes[Math.floor(Math.random() * lateTimes.length)]
            default:
                var onTimes = ['exactly', 'precisely', 'now', ''];
                return onTimes[Math.floor(Math.random() * onTimes.length)]
        }
    }
}