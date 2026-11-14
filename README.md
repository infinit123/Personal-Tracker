# Revizio Nova

PWA mobile-first pentru lucrari, targeturi, statistici, istoric, clienti, programari si vizite pe teren. Reimplementare independenta, fara backend si fara dependinte runtime.

## Tehnologii
HTML semantic, CSS modern, JavaScript ES Modules, Web App Manifest, Service Worker si stocare locala.

## Rulare locala
```bash
npm run dev
```
Deschide `http://localhost:4173`.

## Verificare si build
```bash
npm run check
npm run build
```
Rezultatul este in `dist/`.

## GitHub Pages
1. Publica proiectul intr-un repository GitHub pe ramura `main`.
2. In Settings > Pages selecteaza **GitHub Actions**.
3. Workflow-ul `.github/workflows/deploy.yml` construieste si publica automat `dist/`.

Toate path-urile sunt relative, deci aplicatia functioneaza si sub calea unui repository.

## Instalare PWA
In Chrome/Edge foloseste Install app. Pe iOS Safari foloseste Share > Add to Home Screen.

## Date si update
Datele sunt pastrate in `localStorage`, cheia `revizio_nova_v1`. Importul migreaza si backupuri compatibile. La o versiune noua, actualizeaza constanta `V` din `sw.js`; aplicatia afiseaza butonul **Actualizeaza** cand noul service worker este pregatit.
