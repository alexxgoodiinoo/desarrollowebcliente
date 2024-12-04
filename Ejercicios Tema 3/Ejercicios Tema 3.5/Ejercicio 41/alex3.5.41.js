const mesas = [];
for (let i = 0; i < 10; i++) {
    mesas.push({id: i+1, reservada:false});
}

function isMesaDisponible(){
    return Promise.race(
        mesas.map(mesa => {
            return new Promise((resolve, reject) => {
                if(!mesa.reservada){
                    resolve(mesa);
                }else{
                    reject(null);
                }
            });
        })
    )
}

async function reservarMesa() {
    const mesa = await isMesaDisponible();
    if(mesa){
        mesa.reservada = true;
        console.log("Mesa " + mesa.id + " fue reservada");
        return mesa;
    }else{
        return null;
    }
}

const arrayListaEspera = [];

async function listaEspera() {
    while(listaEspera.length>0){
        arrayListaEspera;
    }
}

function aniadirListaEspera(mesa){
    arrayListaEspera.push(mesa);
}

function reservarMesa(){
    for (let i = 0; i < 10; i++) {
        reservarMesa(i).then(mesa => {
            if(!mesa){
                aniadirListaEspera(i);
            }
        })  
    }
}