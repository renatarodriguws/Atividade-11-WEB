console.log('Olá mundo!');

// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

// Estilizando o novo elemento
novoElemento.style.backgroundColor = 'purple';
novoElemento.style.color = 'black';

// Animais correndo e brincando
const animais = ['🐶', '🐱', '🐰', '🐻', '🦊','🐼', '🐨', '🦁', '🐸', '🐦', '🐢', '🦋', '🐍', '🦒', '🦙', '🐏',  '🐘', '🐳', '🐬', '🦈'];

function criarAnimal() {
    let animal = document.createElement('div');
    animal.innerText = animais[Math.floor(Math.random() * animais.length)];
    animal.style.position = 'absolute';
    animal.style.fontSize = '50px';
    animal.style.left = Math.random() * window.innerWidth + 'px';
    animal.style.top = Math.random() * window.innerHeight + 'px';
    animal.style.transition = 'transform 0.5s';
    document.body.appendChild(animal);

    setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        animal.style.transform = `translate(${x}px, ${y}px)`;
    }, 1000);

    setTimeout(() => {
        document.body.removeChild(animal);
    }, 5000);
}

// Intervalo para criar animais
setInterval(criarAnimal, 1500);
