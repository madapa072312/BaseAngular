function forEach(elem, actions) {
    for(var i=0;i<elem.length; i++ ){
        actions(elem[i]);
    }
}


function filter(elems, predicate){
    var result = [];
    forEach(elems, function(elem){
        if(predicate(elem)){
            result.push(elem);
        }
    });

    return result;
}
//MapperFn transforms
function map(elems, mapperFn){
    var result = [];
    forEach(elems,function(elem){
        result.push(mapperFn(elem));
    });

    return result;
}
