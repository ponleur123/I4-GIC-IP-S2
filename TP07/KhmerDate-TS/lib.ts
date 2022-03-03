export class KhmerDate{
    paraDate:Date

    constructor(d:Date){
        this.paraDate=d;
    }

    printDate():string{
        let date: Date= new Date()
        let min =  this.paraDate.getMinutes()-date.getMinutes() 
        let hour = this.paraDate.getHours()-date.getHours() 
        let day = this.paraDate.getDay()-date.getDay() 
        let month = this.paraDate.getMonth() - date.getMonth()

        if(month<1){
            if(day<1){
                if(hour<24){
                    if(min<1){
                        return "មុននេះបន្តិច"
                    }
                    else if(min==1){
                        return "១ នាទីមុន"
                    }
                    else if(min>1 && min<60){
                        return `${min} នាទីមុន`
                    }
                }
                else if(hour==1){
                    return "១ ម៉ោងមុន"
                }
                else if(hour>1 &&hour<24){
                    return `${hour} ម៉ោងមុន`
                }

            }
            else if (day==1){
                return "១ ថ្ងៃមុន"
            }
            else if(day==7){
                return "១ អាទិត្យមុន"
            }
            else if(day>7 && day<30){
                return `${day} ថ្ងៃមុន`
            }
        }
        else if(month==1){
            return "១ ខែមុន"
        }
        else if(month>1){
            return `${month} ខែមុន`
        }

    
        
    }
    getDate():Date{
        let date:Date = new Date()
        // return date;
        return this.paraDate;
    }
}