# Changelog

## v0.7.0 — 2026-09-17

- Tutorial guidato in dieci passaggi con spotlight sui controlli reali della DM View.
- Navigazione avanti/indietro, uscita immediata e attesa della prima mappa prima di proseguire.
- Avanzamento automatico dopo la creazione o importazione della mappa.
- Ripresa del passaggio dopo il reload e comandi permanenti per riaprire il tutorial.
- Contenuti ITA/ENG e posizionamento adattivo a sidebar, scroll e dimensioni della finestra.

---

- Ten-step guided tutorial with spotlights on actual DM View controls.
- Back/next navigation, immediate exit, and first-map gating before continuing.
- Automatic progression after creating or importing a map.
- Step resume after reload and permanent commands to restart the tutorial.
- ITA/ENG content with adaptive placement for sidebar, scrolling, and window size.

## v0.6.0 — 2026-09-17

- Duplicazione indipendente della mappa corrente, con stato persistente copiato e combattimento attivo azzerato.
- Snapshot nominati della Fog of War per mappa: creazione, rinomina, ripristino confermato ed eliminazione.
- Snapshot inclusi nei salvataggi su cartella e negli export/import di mappa e progetto.
- Ripristino della nebbia sincronizzato con la Player View e gestito come singola azione Annulla/Ripeti.
- Scorciatoie configurabili con rilevamento dei conflitti, blocco delle combinazioni riservate e ripristino dei valori predefiniti.
- Pannello scorciatoie allineato alla sidebar ridimensionabile e cache PWA aggiornata.

---

- Independent duplication of the current map, copying persistent state while resetting active combat.
- Named per-map Fog of War snapshots: create, rename, confirmed restore, and delete.
- Snapshots included in folder saves and map/project exports and imports.
- Fog restoration synchronised with the Player View and handled as one Undo/Redo action.
- Configurable hotkeys with conflict detection, reserved-combination protection, and reset to defaults.
- Hotkey panel aligned with the resizable sidebar and updated PWA cache.

## v0.5.0 — 2026-09-16

- Sidebar iniziativa sovrapposta con round, turno attivo, pareggi e visibilità controllata dal DM.
- AC e HP privati, collegamento dei partecipanti ai token e posizionamento dalla DM View o dalla Player View.
- Indicatore di inizio turno ancorato al token e pozza di sangue pubblica solo su comando esplicito del DM.
- Evidenziazione automatica dei token colpiti dalle sagome secondo la regola selezionata.
- Stato del combattimento salvato per mappa e incluso negli export di mappa e progetto.
- Include la v0.4.0: puntatore live, sagome dalla Player View e miglioramenti di stabilità.

---

- Overlay initiative sidebar with rounds, active turn, tie handling, and DM-controlled visibility.
- Private AC and HP, participant-to-token links, and placement from either the DM View or Player View.
- Token-anchored turn-start marker and public blood pools placed only on explicit DM command.
- Automatic highlighting of tokens affected by templates according to the selected rule.
- Per-map combat state included in map and project exports.
- Includes v0.4.0: live pointer, Player View template placement, and stability improvements.

## v0.4.0 — 2026-09-16

- Puntatore live condiviso dalla DM View alla Player View.
- Righelli e sagome posizionabili dalla Player View senza richiedere token.
- Sincronizzazione, persistenza, import/export e salvataggi asincroni resi più affidabili.

---

- Live pointer shared from the DM View to the Player View.
- Rulers and templates can be placed from the Player View without requiring tokens.
- More reliable synchronisation, persistence, import/export, and asynchronous saving.

## v0.3.0 — 2026-09-16

- Token opzionali come elementi ancorati alla mappa, pubblici oppure riservati al DM, con piazzamento dalla DM View o dalla Player View e anteprima condivisa.
- Snap automatico dei token al centro delle caselle, anche con griglia ruotata; layer token indipendente.
- Strumenti Fog of War separati tra `Rivela` e `Copri con nebbia` per rendere esplicita l'azione.
- Include tutte le funzioni della versione precedente: interfaccia ITA/ENG, Fog of War, componenti, griglia, sagome D&D, Player View, proiezione, progetti multi-mappa e PWA offline.

---

- Optional tokens as map-anchored elements, public or DM-only, placed from the DM View or the Player View with a shared preview.
- Automatic token snapping to grid-square centres, even with a rotated grid; independent token layer.
- Fog of War tools split into `Reveal` and `Add fog` to make the action explicit.
- Includes all previous release features: ITA/ENG interface, Fog of War, components, grid, D&D templates, Player View, projection controls, multi-map projects, and offline PWA support.

## v0.1.1 — 2026-09-16

- Interfaccia disponibile in `ITA` e `ENG`.
- Preferenza della lingua persistente e condivisa tra DM View e Player View.
- Distanze, messaggi operativi e controlli adattati alla lingua selezionata.
- Include tutte le funzioni della prima versione stabile: Fog of War, componenti, griglia, sagome D&D, Player View, proiezione, progetti multi-mappa e PWA offline.

---

- Interface available in `ITA` and `ENG`.
- Language preference persists and is shared by the DM View and Player View.
- Distances, operational messages, and controls follow the selected language.
- Includes all first stable release features: Fog of War, components, grid, D&D templates, Player View, projection controls, multi-map projects, and offline PWA support.
