export class Names {
    tournament_key: string;
    gender: string;
    last_scheduled_match_date: string;
    last_scheduled_match_date_display: string;
    name: string;
    updated_datetime: string;
    start_date: string;
    association_key: string;
    series_duration: string;
    type: string;
    constructor(tournament_key: string,gender: string,last_scheduled_match_date: string, 
        last_scheduled_match_date_display: string,name: string, updated_datetime: string,start_date: string,association_key: string,series_duration: string,type: string){
            this.tournament_key= tournament_key;
            this.gender = gender;
            this.last_scheduled_match_date = last_scheduled_match_date;
            this.last_scheduled_match_date_display = last_scheduled_match_date_display;
            this.name= name;
            this.updated_datetime = updated_datetime;
            this.start_date = start_date;
            this.association_key = association_key;
            this.series_duration = series_duration;
            this.type = type;   
        }
}