"use strict";
exports.__esModule = true;
exports.KhmerDate = void 0;
var KhmerDate = /** @class */ (function () {
    function KhmerDate(d) {
        this.paraDate = d;
    }
    KhmerDate.prototype.printDate = function () {
        var date = new Date();
        var min = this.paraDate.getMinutes() - date.getMinutes();
        var hour = this.paraDate.getHours() - date.getHours();
        var day = this.paraDate.getDay() - date.getDay();
        var month = this.paraDate.getMonth() - date.getMonth();
        if (month < 1) {
            if (day < 1) {
                if (hour < 24) {
                    if (min < 1) {
                        return "មុននេះបន្តិច";
                    }
                    else if (min == 1) {
                        return "១ នាទីមុន";
                    }
                    else if (min > 1 && min < 60) {
                        return "".concat(min, " \u1793\u17B6\u1791\u17B8\u1798\u17BB\u1793");
                    }
                }
                else if (hour == 1) {
                    return "១ ម៉ោងមុន";
                }
                else if (hour > 1 && hour < 24) {
                    return "".concat(hour, " \u1798\u17C9\u17C4\u1784\u1798\u17BB\u1793");
                }
            }
            else if (day == 1) {
                return "១ ថ្ងៃមុន";
            }
            else if (day == 7) {
                return "១ អាទិត្យមុន";
            }
            else if (day > 7 && day < 30) {
                return "".concat(day, " \u1790\u17D2\u1784\u17C3\u1798\u17BB\u1793");
            }
        }
        else if (month == 1) {
            return "១ ខែមុន";
        }
        else if (month > 1) {
            return "".concat(month, " \u1781\u17C2\u1798\u17BB\u1793");
        }
    };
    KhmerDate.prototype.getDate = function () {
        var date = new Date();
        // return date;
        return this.paraDate;
    };
    return KhmerDate;
}());
exports.KhmerDate = KhmerDate;
