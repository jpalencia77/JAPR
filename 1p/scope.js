var x = 'outside';

var f1 = function(){
    var x = 'inside fi';
    //x = 'inside f1';
    print (x);
}
f1();
print(x);