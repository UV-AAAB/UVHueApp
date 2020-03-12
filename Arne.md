## Arbejde uført af Arne

### min opgave.

Jeg skulle lave APPens hovedside (Home) som har sidens hovedfunktioner. 
Hver knap kommunikerer med APIet via en PUT request. Det kan ses i koden i funktionerne: 
FocusButton, TeachButton, CreativeButton, ProjectorButton. 

Appen lægger op til at kunne bruges i forskellige klasselokaler, som skolerne kan indrette efter egne ønsker. Derfor har vi også taget højde for at der kan være flere klasselokaler pr. switch. 

Jeg laver derfor en GET request for at få fat i de grupper der findes, for derefter at vælge den gruppe, der hører til lærerens klasselokale. i koden kan det findes i den funktion der hedder GETGroupInfo(). Jeg bruger den information jeg henter i min PUT request. Informationen jeg henter er derfor nødvendig for at kunne skabe en dynamisk PUT request, hvilket er nødvendigt hvis denne app skal kunne fungere irl.

