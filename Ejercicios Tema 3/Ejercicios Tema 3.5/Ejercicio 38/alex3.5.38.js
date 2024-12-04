/*
    En primer lugar se mostraria el mensaje "Primero"
    A continuación mostraría "Segundo"
    Después aparecería "Promesa 1"
    Más tarde "Promesa 2"
    Luego "Timeout 1"
    A continuación "Promesa dentro del timeout"
    Sigue con "Timeout 2"
    Y finaliza con "Timeout dentro de promesa"
*/

console.log('🥇 Primero');
setTimeout(() => {
	console.log('🕐 Timeout 1');
	Promise.resolve().then(() => console.log('🤔 Promesa dentro de timeout'));
}, 0);

Promise.resolve().then(() => {
	console.log('✨ Promesa 1');
	setTimeout(() => console.log('⏰ Timeout dentro de promesa'), 0);
});
Promise.resolve().then(() => console.log('💫 Promesa 2'));
setTimeout(() => console.log('🕑 Timeout 2'), 0);
console.log('🥈 Segundo');
let promesaPropia = Promise.resolve().then(() => console.log("Hola que tal"));
async function ultimaPromesa() {
    const respuesta = await promesaPropia;
    const data = respuesta;
    console.log(data);
}
ultimaPromesa();