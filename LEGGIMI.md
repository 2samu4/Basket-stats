# Basket Stats

App per le statistiche di una partita di basket, per entrambe le squadre. Funziona nel browser, anche senza internet.

## Cosa fa
- Quintetto in campo per la tua squadra, cambi, cronometro per periodo (modificabile toccando il tempo), falli di squadra e bonus
- Canestri da 1/2/3, tiri sbagliati, rimbalzi (off/dif), assist, recuperi, stoppate, perse, falli
- Minuti giocati e plus/minus calcolati in automatico
- Mappa dei tiri: dopo un tiro tocchi il campo dove è partito (si può disattivare dal Menu); la si rivede in fondo alla scheda Box score: tocca un giocatore nella tabella per vedere solo i suoi tiri (tocca di nuovo o "Mostra tutti" per tornare alla squadra intera)
- Box score completo, cronaca, "Annulla" illimitato
- Salvataggio automatico sul dispositivo, archivio partite, export CSV (Excel) e JSON

- **Tema chiaro e scuro**: il pulsante ◐ in alto a destra cambia tra automatico (segue il dispositivo), chiaro e scuro; la scelta si trova anche in Menu → Aspetto

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

## Account e sincronizzazione (facoltativa)
Con un account (email e password) la squadra e le partite archiviate si ritrovano su ogni dispositivo in cui accedi. Serve un progetto Firebase gratuito: la guida passo per passo è in **GUIDA_ACCOUNT.md**. Finché non è configurato l'app funziona normalmente, senza account. Dati e file di squadra/partita via file restano disponibili come alternativa.

Cartella dell'app: `index.html`, `sw.js`, `manifest.json`, le icone, `firebase-config.js` (da compilare) e la cartella `vendor` (da caricare insieme agli altri file).

## Dati
Per portare la tua squadra su un altro dispositivo: Menu → La mia squadra → "Esporta squadra (file)", poi sull'altro dispositivo "Importa squadra da file".

I dati restano nel browser del dispositivo in cui li inserisci. Per spostare una partita da PC a tablet (o viceversa): Box score → "Esporta partita (JSON)", poi sull'altro dispositivo Menu → "Importa partita".

## Uso rapido durante la partita
1. Menu → "La mia squadra": salva una volta sola i tuoi giocatori (numero e cognome)
2. Menu → "Nuova partita": dai un nome alla partita (facoltativo), scrivi il nome degli avversari, scegli In casa/In trasferta e il colore della tua maglia (bianca o blu, gli avversari avranno l'altro), spunta i 12 convocati → Inizia partita
   (a quel punto ti viene chiesto il quintetto iniziale: tocca i 5 che partono e conferma)
3. Avvia il cronometro, tocca il giocatore, poi l'azione. Rimbalzi (off/dif), assist, recuperi, stoppate e perse sono contatori con − e + (il numero è quello del giocatore selezionato); punti, tiri sbagliati e falli restano tasti singoli. Per gli avversari ci sono solo i pulsanti +1, +2, +3 e Fallo, più −1, −2, −3 per correggere un punto dato per errore (niente giocatori)
4. Cambi: si fanno nella scheda **Cambi**. Scegli il periodo, il minuto di ingresso (tempo rimasto sul tabellone, di base quello attuale), chi esce (tra i giocatori in campo a quel minuto) e chi entra, poi "Registra cambio". Si possono inserire o eliminare anche cambi di minuti passati: i minuti giocati e il plus/minus si ricalcolano da soli. Per questo tieni il cronometro in uso e aggiornato (toccando il tempo lo modifichi)
   - **Periodi**: in alto, sul tabellone, ci sono i pulsanti Q1, Q2… per tornare a un periodo già giocato e rientrare nel successivo. "Fine periodo" chiude il periodo (anche prima dello zero) e mostra il box score con i parziali; da lì "Inizia Q2" ti chiede il quintetto del nuovo periodo (preselezionato quello con cui hai finito). Quando il tempo arriva a zero succede lo stesso.
   - Sotto i 5 in campo c'è la **Panchina**: toccando un giocatore in panchina puoi registrargli comunque una statistica.
5. Premendo "Fallo" (tuo o avversario) si apre la finestra con i codici del referto: P, P1-P3 (personale con 1-3 liberi), U1-U3 (antisportivo), D1-D3 (squalificante), T1 (tecnico giocatore), C1 (tecnico allenatore), B1 (tecnico panchina), F (rissa). T1 conta al giocatore ma non alla squadra; C1 e B1 non contano né al giocatore né alla squadra
6. In fondo a ogni squadra ci sono tre pulsanti: Timeout (conta quelli usati nel tempo, es. 1/2 nel primo tempo, x/3 nel secondo, 1 per supplementare; ferma il cronometro), Coach C1 e Panchina B1 (falli tecnici, non contano né al giocatore né alla squadra)
7. Per chiudere la partita, anche prima della fine: "Termina partita" (in fondo alla schermata Partita o nel Menu). Viene archiviata; dal Menu puoi rivederla, esportarla in CSV o riprenderla con "Riprendi"
8. **Chiusura dell'app**: se chiudi l'app (o la scheda del browser) la partita in corso termina da sola e viene archiviata; alla riapertura la trovi nel Menu → Partite archiviate (da lì puoi anche riprenderla con "Riprendi"). Un semplice ricaricamento della pagina non la chiude
9. Errore? "Annulla"
