# Attivare account e sincronizzazione (Firebase)

Con l'account, la tua squadra e le partite archiviate si ritrovano su ogni dispositivo in cui accedi.
Serve un progetto Firebase gratuito (piano Spark, senza carta di credito). Ci vogliono circa 20 minuti, una volta sola.

## 1. Creare il progetto
1. Vai su https://console.firebase.google.com e accedi con un account Google.
2. **Crea un progetto** (o "Aggiungi progetto"), dagli un nome, per esempio `basket-stats`.
3. Google Analytics non serve: puoi disattivarlo. Poi **Crea progetto**.

## 2. Attivare il login con email e password
1. Menu a sinistra: **Build → Authentication** (o "Compila → Authentication") → **Inizia**.
2. Scheda **Metodo di accesso** → **Email/password** → attiva il primo interruttore → **Salva**.

## 3. Creare il database
1. Menu a sinistra: **Build → Firestore Database** → **Crea database**.
2. Posizione: scegli una in Europa (per esempio `eur3`). Modalità: **produzione**. Poi **Abilita**.
3. Apri la scheda **Regole**, cancella tutto il contenuto e incolla questo, poi premi **Pubblica**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{uid}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == uid;
    }
  }
}
```

Queste regole fanno sì che ognuno possa leggere e scrivere solo i propri dati.

## 4. Copiare la configurazione nell'app
1. In alto a sinistra, accanto a "Panoramica del progetto", clicca l'ingranaggio → **Impostazioni progetto**.
2. In fondo, sezione **Le tue app**: clicca l'icona **Web** `</>`, dai un nome all'app (non spuntare "Firebase Hosting") e premi **Registra app**.
3. Compare un blocco di codice con `const firebaseConfig = { ... }`. Copia i sei valori (apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId).
4. Apri il file `firebase-config.js` della cartella dell'app e sostituisci ogni `INCOLLA_QUI` con il valore corrispondente, tenendo le virgolette.

## 5. Caricare l'app
Carica su GitHub (o dove ospiti l'app) tutti i file della cartella, compresi:
- `firebase-config.js` (quello che hai compilato)
- la cartella `vendor` con i tre file `firebase-*-compat.js`
- `index.html`, `sw.js`, `manifest.json` e le icone

Poi ricarica la pagina (sul tablet chiudi e riapri l'app installata).

## 6. Usarlo
1. Nel **Menu** apri **Account e sincronizzazione**, scrivi email e password e premi **Crea account**.
2. Sugli altri dispositivi apri la stessa pagina e premi **Accedi** con le stesse credenziali.
3. La squadra e le partite archiviate si sincronizzano da sole. Il pulsante **Sincronizza ora** forza l'aggiornamento.

## Come funziona
- L'app lavora sempre prima sul dispositivo: funziona anche senza internet e sincronizza appena torna la connessione.
- Se due dispositivi modificano la stessa cosa, vince la modifica più recente.
- La **partita in corso** resta sul dispositivo e finisce nel cloud quando la termini con "Termina partita".
- Uscendo dall'account i dati restano sul dispositivo.
- Se accedi con un altro account su un dispositivo che ha già dei dati, l'app ti chiede se unirli.

## Se qualcosa non va
- "Sincronizzazione non riuscita: permessi mancanti": controlla di aver pubblicato le regole del punto 3.
- "Dominio non autorizzato": in Authentication → Impostazioni → **Domini autorizzati** aggiungi il dominio dell'app (per esempio `tuo-utente.github.io`).
- La scheda dice che manca la configurazione: `firebase-config.js` contiene ancora `INCOLLA_QUI` oppure non è stato caricato.

## Privacy
Nel cloud finiscono i nomi e i numeri dei giocatori e le statistiche delle partite. Se sono minorenni o di una società, verifica di poter conservare questi dati in un servizio online. I dati sono visibili solo a chi accede con il tuo account e al proprietario del progetto Firebase.
