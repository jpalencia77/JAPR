//Does not return
function task(){
    print("Performing a task");
}

//does return
function echo(p){
    return p;
}

print(echo(-3));
task();
print("Done");