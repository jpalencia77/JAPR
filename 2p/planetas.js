var planet={
    mercurio:{
        diametro: 3100,
        distancia: 36 ,
        orbita: 88,
        rotacion: 59 + "Días"
    },

    venus:{
        diametro: 7700,
        distancia: 67 ,
        orbita: 255 ,
        rotacion: 244 + "Días"
    },

    tierra:{
        diametro: 7920 ,
        distancia: 93 ,
        orbita: 365 ,
        rotacion: 24 + "Horas"
    },

    marte:{
        diametro: 4200 ,
        distancia: 141 ,
        orbita: 687,
        rotacion: 24 + "Horas" + 24 + "Minutos"
    },

    jupiter:{
        diametro: 88640,
        distancia: 483 ,
        orbita: 11.9 ,
        rotacion: 9 + "Horas" + 50 + "Minutos"
    },

    saturno:{
        diametro: 74500 ,
        distancia: 886,
        orbita: 29.5 ,
        rotacion: 10 + "Horas" + 39 + "Minutos"
    },

    urano:{
        diametro: 32000 ,
        distancia: 1782 ,
        orbita: 84 ,
        rotacion: 23 + "Horas" 
    },

    neptuno:{
        diametro: 31000 ,
        distancia: 2793 ,
       orbita: 165 ,
        rotacion: 15 + "Horas" + 48 + "Minutos"
    },

    pluton:{
       diametro: 1500 ,
       distancia: 3670 ,
        orbita: 248 ,
        rotacion: 6 + "Días" + 7 + "Horas"
    },
}
function distanciaEntrePlanetas(x,y){
    dis= Math.abs(x-y);
    return dis;
}
document.write(distanciaEntrePlanetas(planet.tierra.distancia,planet.saturno.distancia)  + "Millones de millas");