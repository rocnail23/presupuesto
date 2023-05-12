export const Color = (presupuesto,restante) => {

    
    
    if(presupuesto/4 > restante){
        return "alert alert-danger"
    } else if(presupuesto /2 > restante){
        return   "alert alert-warning"
        } else{
     return  "alert alert-succes"
    }

    return color


}


