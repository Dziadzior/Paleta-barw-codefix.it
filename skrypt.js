const blok = document.querySelector('.blok');
const odswiezPrzycisk = document.querySelector('.odswiez-przycisk');

const maxPolaPalety = 32; 

const generujPalete = () => {

    blok.innerHTML = "";  // Czyszczenie bloku 
    for (let i = 0; i < maxPolaPalety; i++) {
        // Wygenerowanie nowego losowego hexa koloru
        let losowyHex = Math.floor(Math.random() * 0xffffff).toString(16);
        losowyHex = `#${losowyHex.padStart(6, '0')}`;
    
        // Stworzenie nowego 'li' i dodanie go do bloku
        const kolor = document.createElement("li");
        kolor.classList.add('kolor');
        kolor.innerHTML = `
        <div class="poka-kolor" style="background: ${losowyHex}"></div>
        <span class="wartosc-hex">${losowyHex}</span>
        `;

        // Dodanie do konkretnego li kopiowania na klik
        kolor.addEventListener('click', () => kopiujKolor(kolor, losowyHex));
        blok.appendChild(kolor);
    }

}

const kopiujKolor = (element, wartoscHex) => {
    const kolorElement = element.querySelector('.wartosc-hex');
    navigator.clipboard.writeText(wartoscHex).then(() => {
        kolorElement.innerText = "Skopiowane!";
        setTimeout(() => kolorElement.innerText = wartoscHex, 1000);
    });
}

generujPalete()

odswiezPrzycisk.addEventListener('click', generujPalete);