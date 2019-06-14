class Vector{

    
    constructor (a){
        this.a = a;
        this.t = this.a[0];
    }

    initialize();

    min(){
        for(let x of this.a){
            if(this.t > x){
                this.t = x;
            }
            
        }
        return this.t;
    }


    max(){
        for(let x of this.a){
            if(this.t < x){
                this.t = x;
            }
            
        }
        return this.t;

    }

    sum(){
        this.t = 0;
        for(let x of this.a){
            this.t = this.t+x;
        }
      
      return this.t; 
    }

    avg(){
        this.t = 0;
        for (let x of this.a){
            this.t = this.t + x;
        }
        this.b = this.t / this.a.lenght;
        return this.b;
    }

    getdata(){return}
}

var vec = new Vector([2,3,-4,5,6])