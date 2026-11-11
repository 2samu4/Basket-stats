# Basket Stats

App per le statistiche di una partita di basket, per entrambe le squadre. Funziona nel browser, anche senza internet.

## Cosa fa
- Quintetto in campo per la tua squadra, cambi, cronometro per periodo (modificabile toccando il tempo), falli di squadra e bonus
- Canestri da 1/2/3, tiri sbagliati, rimbalzi (off/dif), assist, recuperi, stoppate, perse, falli
- Minuti giocati e plus/minus calcolati in automatico
- Mappa dei tiri: dopo un tiro tocchi il campo dove è partito (si può disattivare dal Menu)
- Box score completo, cronaca, "Annulla" illimitato
- Salvataggio automatico sul dispositivo, archivio partite, export CSV (Excel) e JSON

## Avvio sul PC
Nella cartella dell'app apri un terminale ed esegui:

    python -m http.server 8000

poi apri http://localhost:8000 in Chrome o Edge. Dal menu del browser scegli "Installa app" e avrai un'icona sul desktop.
(Aprendo direttamente index.html con doppio clic funziona lo stesso, ma senza installazione.)

## Sul tablet
Per installarla e usarla offline serve un indirizzo HTTPS. Il modo più semplice e gratuito:
1. Carica la cartella su Netlify Drop (app.netlify.com/drop) oppure su GitHub Pages
2. Apri il link sul tablet, poi "Aggiungi a schermata Home" (Safari/iPad) o "Installa app" (Chrome/Android)
3. Dopo il primo caricamento funziona senza connessione

In alternativa, sulla stessa rete Wi-Fi puoi aprire http://IP-DEL-PC:8000 dal tablet: funziona, ma senza installazione né uso offline.

## Dati
I dati restano nel browser del dispositivo in cui li inserisci. Per spostare una partita da PC a tablet (o viceversa): Box score → "Esporta partita (JSON)", poi sull'altro dispositivo Menu → "Importa partita".

## Uso rapido durante la partita
1. Menu → "La mia squadra": salva una volta sola i tuoi giocatori (numero e cognome)
2. Menu → "Nuova partita": dai un nome alla partita (facoltativo), scrivi il nome degli avversari, scegli In casa/In trasferta e il colore della tua maglia (bianca o blu, gli avversari avranno l'altro), spunta i 12 convocati → Inizia partita
   (a quel punto ti viene chiesto il quintetto iniziale: tocca i 5 che partono e conferma)
3. Avvia il cronometro, tocca il giocatore, poi l'azione. Per gli avversari ci sono solo i pulsanti +1, +2, +3 e Fallo (niente giocatori)
4. Per un cambio: tocca chi esce, poi "Cambio" e scegli chi entra
5. Errore? "Annulla"
