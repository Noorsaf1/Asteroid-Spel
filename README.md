Projekttitel:
Fångstspelet

Beskrivning:
Fångstspelet är ett roligt och engagerande webbläsarbaserat spel där spelaren styr en korg för att fånga fallande frukter (äpplen och apelsiner). Målet är att fånga så många frukter som möjligt utan att missa dem. Varje gång en frukt faller utanför skärmen förlorar spelaren ett liv, och spelet slutar när alla liv är slut. Spelet innehåller dynamiska bakgrunder, mjuka animationer och färgglada designelement.

Hur man spelar:
Mål: Fånga de fallande frukterna med korgen längst ner på skärmen.
Kontroller: Använd vänster och höger piltangenter för att flytta korgen.
Poäng: Varje frukt du fångar ger dig 1 poäng. Din poäng visas längst upp på skärmen.
Liv: Du börjar med 3 liv. För varje frukt som faller utanför skärmen förlorar du ett liv. Spelet slutar när du förlorar alla 3 liv.
Starta om: När spelet är slut kan du starta om genom att klicka på knappen "Starta om".

Spelfunktioner:

Responsiv design: Spelet anpassar sig automatiskt till vilken skärmstorlek som helst.
Animerad bakgrund: Spelet har en gradienthimmel med moln som långsamt rör sig.
Fallande objekt: Söta fruktemojis (äpplen och apelsiner) faller slumpmässigt från toppen av skärmen i olika hastigheter.
Elegant korg: En vackert designad korg med en gradient och skuggeffekter ger mer djup till spelet.
Game Over-skärm: En glödande text och en omstartsknapp visas när spelet är slut, vilket möjliggör snabba omspel.

Teknologier som används:

HTML5: Struktur för webbsidan.
CSS3: Används för att designa spelet, inklusive bakgrundsanimeringar och game-over-skärmen.
JavaScript: Hanterar spellogiken, inklusive kontroller, animationer och kollisionsdetektering.
Canvas API: Används för att rita spelelement som korgen och de fallande frukterna.
Installation & Setup:
Klona eller ladda ner detta projekt:

bash
Kopiera kod
git clone https://github.com/Safir/catching-game.git
Eller ladda ner .zip-filen och extrahera den.

Navigera till projektmappen och öppna index.html-filen i en modern webbläsare.

Spela spelet direkt i webbläsaren. Ingen ytterligare installation krävs!

Struktur:
index.html: Huvud-HTML-filen. Den innehåller strukturen för webbsidan, inklusive canvasen där spelet ritas upp.
styles.css: CSS-filen definierar spelets stil, såsom bakgrund, korg, frukter och game-over-skärmen.
script.js: JavaScript-filen innehåller spellogiken, inklusive spelarens kontroller, fallande objekt, kollisionsdetektering, poängsystem och game-over-villkor.
Hur du anpassar spelet:
Ändra fallande objekt: I script.js kan du ändra klassen FallingObject för att lägga till olika objekt (t.ex. andra emojis eller bilder).

Exempel:

javascript
Kopiera kod
this.fruitType = Math.random() > 0.5 ? '🍎' : '🍊'; // Ändra fruktemojis här
Justera svårighetsgraden: För att göra spelet svårare kan du öka hastigheten på de fallande objekten eller minska antalet liv.

Exempel:

javascript
Kopiera kod
this.speed = Math.random() * 3 + 2; // Ändra hastigheten här
lives = 2; // Starta med 2 liv istället för 3
Licens:
Detta projekt är licensierat under MIT-licensen. Du är fri att ändra, distribuera eller använda denna kod för personliga eller kommersiella projekt.

Tack till:
Utvecklat av [Safir]
Bakgrundsanimeringar och emojis används för att göra spelet mer interaktivt och roligt.
Bidra:
Känn dig fri att forka projektet och skicka pull requests om du vill bidra till projektet! Alla förbättringar eller nya funktioner är välkomna.
