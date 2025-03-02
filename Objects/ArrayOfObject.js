let products=[{name:'laptop',quantity:6},
        {name:'mouse',quantity:2},
        {name:'keyboard',quantity:3},
        {name:'laptop',quantity:2},
        {name:'mouse',quantity:2},
        {name:'Battery',quantity:4},
        {name:'keyboard',quantity:3},

]
let prodcutsMap = new Map();
for(let i=0; i < products.length; i++){
    if(prodcutsMap.has(products[i].name)){
        prodcutsMap.set(products[i].name, prodcutsMap.get(products[i].name)+products[i].quantity);
    }else{
        prodcutsMap.set(products[i].name,products[i].quantity)
    }

}


// output =[{name:'laptop',quantity=8},
//         {name:'mouse',quantity=4},
//         {name:'keyboard',quantity=6},
//        
// ]