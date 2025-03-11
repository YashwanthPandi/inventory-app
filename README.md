# Inventory Management App with Angular and Firebase

This is an Inventory Management Application built using **Angular** and **Firebase**. The app supports user authentication and item CRUD operations (Create, Read, Update, Delete). Each item has fields for **Category**, **Name**, **Description**, and **Price**.

## Features

- **User Authentication**: Register and Login functionalities using Firebase Authentication.
- **Item Management**: Full CRUD operations for items with fields including Category, Name, Description, and Price.
- **Responsive Design**: Built with MDBootstrap for a clean and responsive interface.
- **Firebase Integration**: Uses Firebase Cloud Firestore for data storage and Firebase Authentication for managing users.

## Technologies Used

- **Angular 17**
- **Firebase (Firestore & Authentication)**
- **MDBootstrap**
- **Tailwind CSS** (optional for additional styling)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or above)
- [Angular CLI](https://angular.io/cli)
- [Firebase CLI](https://firebase.google.com/docs/cli)

### Installation

1. **Clone the repository:**
```bash
https://github.com/your-username/inventory-management-app.git
```

2. **Navigate to the project directory:**
```bash
cd inventory-management-app
```

3. **Install dependencies:**
```bash
npm install
```

4. **Firebase Setup:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Firestore and Authentication (Email/Password).
   - Replace the Firebase configuration in `environment.ts` with your project's configuration.

5. **Run the app locally:**
```bash
ng serve
```
The app will be available at `http://localhost:4200/`.

## Deployment

The app can be deployed to **GitHub Pages**.

1. **Build the project:**
```bash
ng build --configuration production
```

2. **Deploy to GitHub Pages:**
```bash
gh-pages -d dist/inventory-management-app
```

> Ensure the repository is configured to serve from the `gh-pages` branch.

## Folder Structure

```
├── src
│   ├── app
│   │   ├── components
│   │   ├── services
│   │   ├── models
│   │   └── app.module.ts
│   ├── environments
│   │   ├── environment.ts
│   │   └── environment.prod.ts
│   └── index.html
└── angular.json
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries, contact [your-email@example.com](mailto:your-email@example.com).

---

Happy coding! 🚀

