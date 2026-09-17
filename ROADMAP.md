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

## v0.6.0 — Sicurezza e rapidità al tavolo

- **Duplicazione mappa:** copia indipendente di immagine e stato della mappa; il combattimento attivo viene azzerato per evitare prosecuzioni accidentali.
- **Snapshot Fog of War:** snapshot nominati per mappa, con creazione, rinomina, ripristino confermato ed eliminazione; inclusi negli export/import.
- **Hotkey configurabili:** personalizzazione delle azioni esistenti, controllo dei conflitti, ripristino dei valori predefiniti e preferenze locali al browser.
- Migrazione non distruttiva, sincronizzazione DM/Player, persistenza, ZIP e PWA offline verificati con test automatici.

## Miglioramenti successivi

- Da definire dopo il collaudo della v0.6.0 e le segnalazioni della community.

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

### v0.6.0 — Tabletop safety and speed

- **Map duplication:** independent copy of the map image and state; active combat is reset to prevent accidental continuation.
- **Fog of War snapshots:** named per-map snapshots with create, rename, confirmed restore, and delete actions; included in exports/imports.
- **Configurable hotkeys:** customisation of existing actions, conflict detection, reset to defaults, and browser-local preferences.
- Non-destructive migration, DM/Player synchronisation, persistence, ZIP, and offline PWA behaviour verified by automated tests.

### Later improvements

- To be defined after v0.6.0 tabletop testing and community feedback.

### Out of scope

- Dice, character sheets, chat, and full-VTT automation.
- Dynamic lighting, line of sight, and automatic token vision.
- Mandatory backend, accounts, telemetry, or cloud storage.
