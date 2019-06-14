function argRequired(arg){
    if (arg === null)
    throw new Error('no se puede ');
    
}
print (argRequired());//err
print (argRequired());//ok