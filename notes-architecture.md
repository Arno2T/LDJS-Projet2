# Notes architecture
 
 ## Proposition de refacto:

### 1. Déplacer les données hardcodées dans un module dédié
  Ligne 28 -> Antipattern 1

### 2. Utilisation de components
  Tous les composants sont dans App.tsx => créer des composants réutilisables: Antipattern 2, 8 (cards dupliquées) et 9, lignes 146 et 232
  
  Composants proposés: 
    - Header
    - Card (Pays participants / Editions des JO / ...)
    - Graph


### 3. Déplacer la logique métier via des hooks et des models
  Anti-pattern 6 et Anti-pattern 10: Ligne 287


### 4. Remplacer tous les "any" par le bon type
  Antipattern 3

### 5. Supprimer le useEffect inutile 
  Antipattern 4

### 6. Utiliser un module dédié pour les routes
Antipattern 11

### 7. Supprimer les console.log

## Proposition d'arborescence
src/app/
  ├── components/
      ├── Header
      ├── Cards 
  ├── pages/  
      ├── Home
      ├── Details
  ├── hooks/ 
       
  ├── models/  



