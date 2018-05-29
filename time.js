class Time {
    constructor(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    // In-place
    // addTime(time) {
    //     let newHour = this.hour + time.hour;
    //     let newMinute = this.minute + time.minute;
    //     let newSecond = this.second + time.second;
    //     if (newSecond >= 60) {newSecond %= 60; newMinute++;}
    //     if (newMinute >= 60) {newMinute %= 60; newHour++;}
    //     if (newHour >= 24) newHour %= 24;
    //     this.hour = newHour;
    //     this.minute = newMinute;
    //     this.second = newSecond;
    //     return this;
    // }
    //
    // addSecond(n) {
    //     let add = new Time(0, 0, n);
    //     this.addTime(add);
    //     return this;
    // }
    //
    // addMinute(n) {
    //     let add = new Time(0, n, 0);
    //     this.addTime(add);
    //     return this;
    // }
    //
    // addHour(n) {
    //     let add = new Time(n, 0, 0);
    //     this.addTime(add);
    //     return this;
    // }


    addTime(time) {
        let newHour = this.hour + time.hour;
        let newMinute = this.minute + time.minute;
        let newSecond = this.second + time.second;
        if (newSecond >= 60) {newSecond %= 60; newMinute++;}
        if (newMinute >= 60) {newMinute %= 60; newHour++;}
        if (newHour >= 24) newHour %= 24;
        let result = new Time(newHour, newMinute, newSecond);
        return result;
    }

    addSecond(n) {
        let add = new Time(0, 0, n);
        return this.addTime(add);;
    }

    addMinute(n) {
        let add = new Time(0, n, 0);
        return this.addTime(add);;
    }

    addHour(n) {
        let add = new Time(n, 0, 0);
        return this.addTime(add);;
    }

    get string() {
        return str(this.hour).padStart(2, '0') + ':' + str(this.minute).padStart(2, '0') + ':' + str(this.second).padStart(2, '0');
    }
}
