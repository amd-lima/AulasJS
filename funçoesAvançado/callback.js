function rand(min = 1000, max = 3000){
const num = Math.random() * (max - min) + min;
return Math.floor(num);
}

function f1(callback) { 
    setTimeout(function(){
        console.log('f1');
        if(callback) callback();
    }, rand());
 }
function f2(callback) { 
    setTimeout(function(){
        console.log('f2');
        if(callback) callback();
    }, rand());
 }
function f3(callback) { 
    setTimeout(function(){
        console.log('f3');
        if(callback) callback();
    }, rand());
 }
 //vai imprimir em ordem aleatória sem o callback
f1();
f2();
f3();

//após chamar usando callback
f1(function(){
    f2(function(){
        f3(function(){
            console.log('Fim!!')
        });
    });
});