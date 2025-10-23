# T12-YourRoom

# Teknisk dokumentation for Tema 8 gruppeprojekt

Når man er flere der bidrager til en kodebase, lærer man hurtigt, at ens sædvanlige måder at gøre tingene på ikke nødvendigvis er logisk for alle.

Skriv derfor jeres fælles retningslinjer for punkterne herunder(tilføj gerne flere selv), sådan som det giver bedst mening for jer som gruppe. Dokumentationen sikre, at jeres fælles kodebase forbliver overskuelig, er let at arbejde med og til at forstå for alle, og at I undgå konflikter, og har nemmere ved at hjælpe hinanden undervejs.

**Life hack:**
Markdown gør det muligt at formatere teksten, inkludere links, billeder og kodeeksempler på en struktureret og overskuelig måde.

Dette gør dokumentationen lettere at læse og forstå i modsætning til en PDF, som kan være tung at navigere i, især når der er behov for hurtig reference.
Markdown cheatsheet: <https://github.com/adam-p/markdown-here/wiki/markdown-cheatsheet>

## Rapport:

Henvis med link til jeres README.md i dokumentationsrapporten:
(fx. https://github.com/KEA-MMD-T7/teknisk_dokumentation/edit/main/README.md)

## Projektstruktur:

Beslut, hvordan I vil organisere jeres projekt – struktur for mapper og filer.

- Hvordan organiserer I billeder, fonte og andre ressourcer?
Vi har valgt at organisere vores projekt i en klar og logisk mappestruktur for at gøre det nemt at finde rundt i filer og ressourcer. Alle billeder, fonte og ikoner samles i en mappe kaldet assets, som indeholder undermapper til billeder, fonte og eventuelle ikoner.

- Hvor placerer I boilerplate?(fx CSS- og JavaScript-filer, der bruges på tværs af projektet)
De filer, der bruges på tværs af hele projektet, såsom fælles CSS og JavaScript-filer placeres i mapperne css og js. Her ligger for style.css og main.js, som fungerer som boilerplate.

- Hvor placerer I HTML, CSS- og JavaScript-filer til fx detaljevisning og listevisning?
HTML-filerne er placeret i en mappe kaldet pages, hvor der findes separate filer til forside, undersider og visninger. 






## Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

- Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_)
Vi bruger små bogstaver og binder ord sammen med bindestreg (-) i stedet for mellemrum. Filnavnene er korte, men beskrivende, så det er tydeligt, hvad de indeholder.

- Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
Filer, der er specifikke kun for én bestemt side, får et navn som relatere sig til siden.

Fælles filer, der bruges på tværs af hele projektet, navngives med generelle navne, så det tydeligt fremgår, at de gælder hele sitet.

## Link til scripts:

- Hvor placerer I script referencer i HTML'en? (fx i <head> med defer attribute, eller sidst i <body>)

Vi placerer JavaScript-filer sidst i <body>, så HTML-indholdet indlæses først, og siden bliver hurtigere synlig for brugeren.

## Git branches:

- Hvordan navngiver I branches, så alle kan forstår hvem der arbejder i branchen og på hvad?(fx feature-lotte-formular)
Vi navngiver branches på en måde, så det er tydeligt, hvem der arbejder på dem, og hvad de handler om. 

## Arbejdsflow:

- Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt?
Vi commiter løbende når vi laver noget nyt på siden - altså hen ad vejen, når vi har færdiggjort en sektion fx header, main, footer.  

Vi aftaler, hvem der laver hvilke undersider, for at undgå at der bliver arbejdet i de samme filer.


- Hvordan sikrer I, at commit-beskeder er beskrivende?
Vi skriver korte, klare commit-beskeder, der forklarer, hvad ændringen gør eller hvilken fejl der fikses. 

- Hvordan kommunikerer i om ændringer i main branchen når feature merges?
Igennem vores gruppe, vi holder hinanden opdateret på hvad der er lavet når man merger. 
## Kode:

- Hvordan skriver i funktioner i JavaScript?(fx med function keyword eller som arrow functions)
Arrow functions bruges typisk til korte funktioner eller callbacks, mens function bruges til længere funktioner.

- Beslut hvilken CSS selector i benyttes til referencer i henholdsvis CSS og JavaScript(fx. id'er til JavaScript og Classes til CSS)

Vi bruger classes til CSS, fordi de kan genbruges på flere elementer, og id’er til JavaScript, når vi vil henvise til et specifikt element på siden.

- Skal filer have korte forklaringer som kommentarer?
Vi skriver korte kommentarer i både CSS og JavaScript for at definere, hvad koden gør, så det er nemt at forstå for andre eller for os selv senere.

# Funktionalitet

Dette afsnit skal forklare hvad I konkret har arbejde med, for at udvikle websitet. Tænk over hvilke interaktioner brugeren kan foretage på sitet? Eller hvordan websitet håndterer og præsenterer data? Eksempler på funktionalitet, der kan beskrives:

- Hentning af produkter fra API.
- Filtrering af produkter baseret på brugerens valg.
- Dynamisk visning af produkter i HTML.

Brug korte beskrivelser, som i eksemplerne herover

# API endpoints

Dette afsnit skal liste de endpoints fra API'et i har benyttet:

- (fx. https://dummyjson.com/products)

# Dokumentation af Funktion

Dette afsnit skal beskrive en funktion I selv har udviklet. Det kunne eksempelvis være en funktion der generere en listen over fx. produkter:

- Beskrivelse: Hvad gør funktionen? Hvordan spiller den sammen med resten af koden?

Henter produkter fra DummyJSON API baseret på en kategori
Bruger fetch () til at lave et HTTP request
Konverterer data til JSON format
Returnerer en liste af produkter
Hvis der sker en fejl, returnerer den en tom liste i stedet


- Parametre: Hvilke input forventes (fx en værdi fra en dropdown eller URL'en)?’

Kategori-navnet der skal hentes produkter fra
Eksempler: "furniture", "home-decoration", "kitchen-accessories", "skin-care"
- Returnerer: Beskriv, om funktionen returnerer en værdi eller blot manipulerer DOM’en.
Funktionen returnerer et array af produkter fra API'et. Hvis der opstår en fejl under hentningen, returnerer den i stedet et tomt array for at undgå at koden kikser.

- Eksempel på brug: Indsæt funktions-koden herunder(der hvor koden er i eksemplet) og vis, hvordan funktionen kaldes:

Funktion:

“async function fetchProductsByCategory(category) { try { const response = await fetch(`https://dummyjson.com/products/category/${category}`); const data = await response.json(); return data.products; } catch (error) { console.error('Fejl ved hentning af produkter:', error); return []; } }”

Kalder funktion: 
“const products = await fetchProductsByCategory('furniture'); console.log(products); // Array af møbel-produkter”
