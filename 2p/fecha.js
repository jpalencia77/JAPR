class Date{
    constructor
    (dia, mes, año){
        this._dia = dia;
        this._mes = mes;
        this._año = año;
    }

    getDia(){return this._dia}
    setDia(dia){this._dia = dia}
    getMes(){return this.mes}
    setMes(mes){this._mes = mes}
    getAño(){return this.año}
    setAño(año){this.año = año}

    aumentaDia(){
        if(this.dia = 31 ) {
        this.dia = 1;
    }else{ 
        this.dia++;
    }
 
    if(this._mes = 12){
        this._mes = 1;
    } else{
        this._mes++;
    }
    if(this._año > 1999){
        this._año = 2000;
    }else{
        this._año++;
    }

    //return this._dia + "," + this._mes + "," + this._año;
}
}
var fecha = new Date(31,'12',1999);