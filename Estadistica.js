function Element(){
    var formula = [];
    addElement(['comer', 'dormir', 'cantar', 'tomar'], true, formula);
    addElement(['comer', 'dormir', 'cantar'], false, formula);
    addElement(['comer', 'dormir', 'tomar'], true, formula);
    addElement(['comer', 'dormir', 'cantar'], false, formula);
    Estadistica(formula, 'comer');
}

function addElement(eventos, accidente, formula){
    formula.push({eventos, accidente});
}

function Estadistica(formula, accion){
    var arr = [0, 0, 0, 0];
    for (let i = 0; i < formula.length; i++){
        let index = 2;
        if(formula[i].eventos.includes(accion)){
            index -= 2;
        }
        if (!formula[i].accidente){
            index += 1;
        }
        arr[index] +=1;
    }
    console.log(arr);
    Fi(arr);
}

function Fi(f){
    let sum = (f[0]+f[1])*(f[2]+f[3])*(f[0]+f[2])*(f[1]+f[3]);
    console.log((f[0]*f[3]-f[1]*f[2])/Math.sqrt(sum));
}