DeliveBoo - Front-end
===

## Introduzione
DeliveBoo è una web app che permette agli utenti di ordinare cibo a domicilio nella città di ***. Questa sezione si occupa dello sviluppo front-end, fornendo una UI intuitiva e responsiva per gli utenti.

## Tecnologie Utilizzate
- HTML5
- CSS3
- JavaScript
- Axios
- Braintree (per il sistema di pagamento)
- Bootstrap (per il design responsivo)

## Requisiti Funzionali
- Client-side Validation: Tutti gli input inseriti dall'utente devono essere validati lato client.
- Sistema di Pagamento: Utilizzo di Braintree per simulare i pagamenti.
- Responsive Design: Il sito deve essere visibile correttamente da desktop e smartphone.
- Ricerca senza Refresh: La ricerca dei ristoranti deve avvenire senza il refresh della pagina.

## Componenti Principali

  - Navbar: Barra di navigazione principale.
  - RestaurantList: Lista dei ristoranti basata sulle tipologie selezionate.
  - RestaurantMenu: Visualizza il menù di un ristorante e permette di aggiungere piatti al carrello.
  - Cart: Visualizza i piatti aggiunti al carrello e permette di modificare le quantità.
  - Checkout: Gestisce l'inserimento dei dati per la consegna e il pagamento.

## Struttura del Progetto
```markdown
deliveboo-frontend/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── components/
│ │ ├── Navbar.js
│ │ ├── RestaurantList.js
│ │ ├── RestaurantMenu.js
│ │ ├── Cart.js
│ │ ├── Checkout.js
│ │ └── ...
│ ├── pages/
│ │ ├── HomePage.js
│ │ ├── RestaurantPage.js
│ │ ├── Dashboard.js
│ │ └── ...
│ ├── App.js
│ ├── index.js
│ └── ...
└── package.json
```
