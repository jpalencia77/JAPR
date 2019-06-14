class Fraction{
    constructor(n,d){
        this.n = n;
        this.d = d;
    }
    
    
    sum(f){
        var n = (this.n * f.d) + (this.d * f.n);
        var d = this.d * f.d;
        return new Fraction(n,d);
    }
    
    res(f){
        var n = (this.n * f.d) - (this.d * f.n);
        var d = this.d * f.d;
        return new Fraction(n,d);
    }
    
    div(f){
        var n = this.n * f.d;
        var d = this.d * f.n;
        return new Fraction(n,d);
    }
    
    
    mul(f){
        var n = this.n * f.n;
        var d = this.d * f.d;
        return new Fraction(n,d);
    }
}


const f1 = new Fraction(5,3);

const f2 = new Fraction(20,3);

//console.log(f1.sum(f2));

console.log(f1.res(f2));

//console.log(f1.mul(f2));

//console.log(f1.div(f2));
