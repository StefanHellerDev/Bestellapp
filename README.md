# Bestellapp

Bestellapp is a Lieferando-inspired food ordering demo for Pizzeria Roma. It lets users browse a German-language menu, build a basket, and place a simulated order in the browser. The project uses HTML, CSS, and vanilla JavaScript.

## Features

- **Browse the menu.** View seven dishes with descriptions and euro prices. Select a dish to add it to the basket.
- **Edit the basket.** Increase or decrease quantities, remove an entire line item, and see an empty-basket message when all quantities are zero.
- **Review the order total.** The basket shows line totals, a subtotal, a fixed €5.00 delivery fee, and the grand total. Prices use a decimal comma.
- **Use the basket on different screen sizes.** A sticky basket sits beside the menu on desktop. On smaller screens, **Warenkorb anzeigen** opens a full-screen basket. Both views share the same quantities.
- **Place a test order.** The order action clears the basket and opens a confirmation dialog. Checkout is a local simulation.

## Getting started

You only need a web browser. The app runs from static files and requires no package installation or build step.

Clone the repository with Git, or download and extract the ZIP from GitHub's **Code** menu.

```bash
git clone https://github.com/StefanHellerDev/Bestellapp.git
cd Bestellapp
```

Open `index.html` in your browser. If you prefer to serve the project over HTTP and have Python 3 installed, run this command from the repository root.

```bash
python -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Technologies

| Technology | Role |
| --- | --- |
| HTML | Page layout, menu and basket containers, and confirmation dialog |
| CSS | Responsive layout, sticky desktop basket, mobile overlay, and locally hosted Raleway fonts |
| Vanilla JavaScript | Menu rendering, basket state, price calculations, and simulated checkout |

## Data and API usage

The app uses no external API or backend. The menu is defined in [`scripts/dishes.js`](scripts/dishes.js) as an array of objects with a name, description, unit price, and quantity. Quantity changes are kept in memory for the current page session. Checkout resets those quantities and displays a local confirmation. It does not submit an order or process a payment.

## Project structure

```text
Bestellapp/
├── index.html           # Entry point and static page structure
├── script.js            # Basket state, totals, and overlay interactions
├── style.css            # Page layout and responsive styles
├── scripts/
│   ├── dishes.js        # Local menu data and item quantities
│   └── template.js      # Markup for dishes, basket items, and totals
├── styles/
│   ├── standard.css     # Base styles and visibility utility
│   └── assets.css       # Font declarations and control styles
├── assets/
│   ├── fonts/           # Local Raleway fonts
│   ├── icons/           # Interface icons
│   └── img/             # Images and branding
└── Design/              # Project checklist and icon archive
```

## Learning focus

- Generate menu and basket markup from JavaScript objects with template literals.
- Keep desktop and mobile basket views in sync by rendering them from the same state.
- Calculate line totals from quantities and unit prices, then apply a fixed delivery fee and format the result for display.
- Use CSS media queries and event handlers to adapt the basket layout and manage overlay interactions.
