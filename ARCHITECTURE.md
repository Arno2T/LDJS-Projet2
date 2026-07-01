# Architecture — TéléSport

## Arborescence

```
src/
├── components/ # Composants "dumb"
│ ├── Header.tsx # Titre et description
│ └── Card.tsx # Carte réutilisable avec label + valeur
│
├── pages/ # Composants "smart" (logique + orchestration)
│ ├── Home.tsx # Dashboard principal (graphique Pie, cartes récap)
│ └── Country.tsx # Détails d'un pays (graphique Line, stats)
│
├── hooks/ # Custom hooks (accès aux données & transformation)
│ ├── useOlympicData.ts # Fournit les données olympiques + état de chargement
│ └── useChardata.ts # Prépare les datasets Chart.js pour le Pie (Home)
│
├── models/ # Interfaces TypeScript
│ └── interfaces.ts # Olympic, Participation
│
├── data/ # Données mock
│ └── olympicsData.mock.ts
│
├── App.tsx # Point d'entrée React, configuration du routeur
├── main.tsx # Montage de l'application dans le DOM
└── index.css # Styles globaux (Tailwind)
```

## Composants : Smart vs Dumb

| Composant | Type  | Rôle                                                                                  |
| --------- | ----- | ------------------------------------------------------------------------------------- |
| `Home`    | Smart | Récupère les données via `useOlympicData`, calcule les KPI, orchestre l'affichage     |
| `Country` | Smart | Récupère les données, filtre par pays (route param), prépare le graphique d'évolution |
| `Header`  | Dumb  | Affiche le titre et la description, aucun state                                       |
| `Card`    | Dumb  | Affiche un indicateur (texte + valeur numérique), réutilisable partout                |

## Custom Hooks

### `useOlympicData`

- **Rôle** : unique point d'accès aux données olympiques.
- **Retour** : `{ data: Olympic[], isLoaded: boolean }`
- **Fonctionnement** : simule un appel asynchrone (setTimeout) puis expose les données.
- **Intérêt** : centralise la source de données ; les pages consomment le hook sans connaître l'origine (mock ou API).

### `useChartData`

- **Rôle** : transforme les données brutes en structure attendue par Chart.js (Pie chart).
- **Entrée** : `Olympic[]`
- **Retour** : objet `{ labels, datasets }` prêt à être passé au composant `<Pie />`.

## Préparation à une future connexion API

L'architecture isole l'accès aux données dans `useOlympicData`. Pour brancher une API REST :

1. Remplacer le `setTimeout` + import mock par un `fetch` / `axios` vers l'endpoint.
2. Le reste de l'application (pages, composants) n'a **aucune modification** à subir.
3. La gestion du loading (`isLoaded`) et un futur état d'erreur sont déjà prévus dans le hook.

```ts
// Exemple d'évolution dans useOlympicData.ts
useEffect(() => {
  fetch("/api/olympics")
    .then((res) => res.json())
    .then(setData)
    .finally(() => setIsLoaded(true));
}, []);
```

## Routing

e routeur (react-router-dom v6) est configuré dans App.tsx avec les routes :

/ → Home

/country/:id → Country

Tu peux créer ce fichier à la racine du projet (`DFSJS-P2/ARCHITECTURE.md`), puis commit :

```bash
git add ARCHITECTURE.md
git commit -m "docs: add front-end architecture
```
