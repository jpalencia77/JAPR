class fraccion {
    constructor(n,d){ //validar n y d 
     this.n = n;
     this.d = d;
    };

    euclides(n,d){return d;};
    sum(f){};
    res(f){};
    div(f){};
    mul(f){ //validar
        var n = this.n * f.n;
        var d = this.d * f.d;
        //euclides aquí
        return new fraccion(n,d);
    };
};

var f1 = new fraccion