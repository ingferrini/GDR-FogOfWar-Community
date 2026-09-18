# Roadmap / Tabella di marcia

**ITA** · [English](#english)

Questa roadmap indica la direzione prevista, senza promettere date. Le priorità possono cambiare in base ai test al tavolo e alle segnalazioni della community.

Il principio resta invariato: **uno strumento semplice e affidabile per sessioni dal vivo, non un VTT completo**.

## v0.4.0 — Stabilità e strumenti live — Completata

- Transazioni IndexedDB, ultimo salvataggio e gestione degli errori asincroni più affidabili. **Completato.**
- Puntatore live DM → Player View. **Completato.**
- Righelli e sagome dalla Player View, anche senza token. **Completato.**
- Sincronizzazione, persistenza ed export verificati con i nuovi strumenti. **Completato.**

## v0.5.0 — Combattimento — Completata

- Sidebar iniziativa sovrapposta, senza ridimensionare la mappa. **Completato.**
- Ordine, round, turno attivo e gestione dei pareggi. **Completato.**
- Visibilità dell'iniziativa controllata dal DM. **Completato.**
- AC e HP privati; nomi, ordine e turno opzionalmente visibili ai giocatori. **Completato.**
- Collegamento tra partecipanti e token, con indicatore della posizione iniziale del turno. **Completato.**
- Evidenziazione dei token colpiti dalle aree d'effetto. **Completato.**
- Pozza di sangue pubblica soltanto su comando del DM. **Completato.**

## v0.6.0 — Sicurezza e rapidità al tavolo — Completata

- **Duplicazione mappa:** copia indipendente di immagine e stato della mappa; il combattimento attivo viene azzerato per evitare prosecuzioni accidentali. **Completato.**
- **Snapshot Fog of War:** snapshot nominati per mappa, con creazione, rinomina, ripristino confermato ed eliminazione; inclusi negli export/import. **Completato.**
- **Hotkey configurabili:** personalizzazione delle azioni esistenti, controllo dei conflitti, ripristino dei valori predefiniti e preferenze locali al browser. **Completato.**
- Migrazione non distruttiva, sincronizzazione DM/Player, persistenza, ZIP e PWA offline verificati con test automatici. **Completato.**

## v0.7.0 — Tutorial guidato — Completata

- Tour ITA/ENG in dieci passaggi con spotlight sui controlli reali. **Completato.**
- Primo avvio, uscita, ripresa e riapertura manuale. **Completato.**
- Avanzamento automatico dopo l'importazione della prima mappa. **Completato.**

## v0.7.1 — Rifinitura tutorial

- Spotlight più precisi per gruppi di controlli e sezioni alte.
- Callout più adattivi alle diverse risoluzioni e larghezze della sidebar.
- Passaggi maggiormente legati alle interazioni reali e testi più sintetici.
- Mini-tour contestuali per le funzioni avanzate, da valutare dopo le prove al tavolo.

## v1.0.0 — Prima versione stabile

- **Correttezza visiva:** risoluzione definitiva della rotazione senza deformazioni e verifica di pan, zoom, adattamento, blocco e sincronizzazione su schermi differenti.
- **Controllo pre-sessione:** pannello non bloccante `Sessione pronta?` per mappa, Player View, versione, salvataggi pendenti, visuale e disponibilità offline.
- **Sicurezza dei progetti:** formato versionato, migrazioni dalla v0.1.1, copia di sicurezza prima delle sostituzioni, import atomico e round-trip degli ZIP.
- **PWA e aggiornamenti:** versione visibile, aggiornamento controllato e protezione da cache differenti tra DM View e Player View.
- **Palette puntatore:** circa dieci colori predefiniti ad alto contrasto per punto e ping; giallo attuale come predefinito, preferenza locale e nessun color picker avanzato.
- **Diagnostica:** export leggibile e privo di contenuti della campagna con versione, ambiente, stato offline/sincronizzazione e ultimi errori tecnici.
- **Rifinitura:** nomenclature e messaggi ITA/ENG uniformi, completamento della v0.7.1 e feature freeze prima della release.
- **Criteri di rilascio:** nessun rischio noto di perdita dati, migrazioni e round-trip verificati, matrice Edge/Chrome browser-PWA-offline e collaudo reale su secondo schermo.

## Fuori ambito

- Dadi, schede personaggio, chat e automazioni da VTT.
- Luci dinamiche, line of sight e visione automatica dei token.
- Backend, account, telemetria e salvataggio cloud obbligatorio.

---

## English

This roadmap describes the intended direction without promising dates. Priorities may change after tabletop testing and community feedback.

The guiding principle remains: **a simple, reliable tool for in-person sessions, not a full VTT**.

### v0.4.0 — Stability and live tools — Completed

- Improve IndexedDB transaction completion, last-moment saving, and asynchronous error handling. **Completed.**
- Live DM pointer on the Player View. **Completed.**
- Let the DM place rulers and templates from the Player View without requiring tokens. **Completed.**
- Verify synchronisation, persistence, and exports with the new tools. **Completed.**

### v0.5.0 — Combat — Completed

- Overlay initiative sidebar that does not resize the map. **Completed.**
- Initiative order, rounds, active turns, and tie handling. **Completed.**
- DM-controlled initiative visibility. **Completed.**
- Private AC and HP; names, order, and active turn optionally visible to players. **Completed.**
- Link participants to tokens and mark each token's starting position for the active turn. **Completed.**
- Highlight stored tokens affected by area-of-effect templates. **Completed.**
- Public blood pools placed only on DM command. **Completed.**

### v0.6.0 — Tabletop safety and speed — Completed

- **Map duplication:** independent copy of the map image and state; active combat is reset to prevent accidental continuation. **Completed.**
- **Fog of War snapshots:** named per-map snapshots with create, rename, confirmed restore, and delete actions; included in exports/imports. **Completed.**
- **Configurable hotkeys:** customisation of existing actions, conflict detection, reset to defaults, and browser-local preferences. **Completed.**
- Non-destructive migration, DM/Player synchronisation, persistence, ZIP, and offline PWA behaviour verified by automated tests. **Completed.**

### v0.7.0 — Guided tutorial — Completed

- Ten-step ITA/ENG tour with spotlights on actual controls. **Completed.**
- First run, exit, resume, and manual restart. **Completed.**
- Automatic progression after importing the first map. **Completed.**

### v0.7.1 — Tutorial refinement

- More precise spotlights for control groups and tall sections.
- More adaptive callouts across resolutions and sidebar widths.
- Steps tied more closely to actual interactions, with shorter copy.
- Contextual mini-tours for advanced features, to be evaluated after tabletop testing.

### v1.0.0 — First stable release

- **Visual correctness:** definitive distortion-free rotation and verification of pan, zoom, fit, lock, and synchronisation across different displays.
- **Pre-session check:** non-blocking `Session ready?` panel for map, Player View, version, pending saves, view, and offline availability.
- **Project safety:** versioned format, migrations from v0.1.1, safety copy before replacement, atomic imports, and ZIP round-trip testing.
- **PWA and updates:** visible version, controlled updates, and protection against mismatched DM View and Player View caches.
- **Pointer palette:** around ten predefined high-contrast colours for the pointer dot and ping; current yellow by default, stored locally, with no advanced colour picker.
- **Diagnostics:** readable export without campaign content, containing version, environment, offline/sync state, and recent technical errors.
- **Polish:** consistent ITA/ENG naming and messages, completion of v0.7.1, and a feature freeze before release.
- **Release criteria:** no known data-loss risks, verified migrations and round trips, Edge/Chrome browser-PWA-offline matrix, and real second-screen testing.

### Out of scope

- Dice, character sheets, chat, and full-VTT automation.
- Dynamic lighting, line of sight, and automatic token vision.
- Mandatory backend, accounts, telemetry, or cloud storage.
