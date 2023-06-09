export const dateSanitizer = (date: String) =>{
    if (date.includes('-')) {
    
    const dateAux: string[] = date.split('-');

    const startDate: string[] = dateAux[0].split('_');
    const endDate: string[] = dateAux[1].split('_');

    const startDay: Date = new Date(Date.UTC(parseInt(startDate[2]),parseInt(startDate[1])-1,parseInt(startDate[0]),0,0,0));
    const endDay: Date = new Date(Date.UTC(parseInt(endDate[2]),parseInt(endDate[1])-1,parseInt(endDate[0]),23,59,59,999));
    
    console.log("startDay: ",startDay);
    console.log("endDay: ",endDay);

    return {startDay, endDay};
        
    }
    const dateAux: string[] = date.split('_');

    const startDay: Date = new Date(Date.UTC(parseInt(dateAux[2]),parseInt(dateAux[1])-1,parseInt(dateAux[0]),0,0,0));
    const endDay: Date = new Date(Date.UTC(parseInt(dateAux[2]),parseInt(dateAux[1])-1,parseInt(dateAux[0]),23,59,59,999));
    
    console.log("startDay: ",startDay);
    console.log("endDay: ",endDay);

    return {startDay, endDay};


}