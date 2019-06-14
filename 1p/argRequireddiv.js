
function argRequired(arg){
    if (arg === 0)
    throw new Error('Zero div ');
else
return arg;
}
print (argRequired(5));//err
(argRequired(0));//ok