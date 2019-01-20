var DateHelper = {
    format: function(jsonDate){
        if(jsonDate == null){
            return "";
        }
        else {
            return (new Date(jsonDate).toISOString().split("T"))[0]
        }
    }
}

export default DateHelper;