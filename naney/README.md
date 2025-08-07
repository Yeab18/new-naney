# Na-Ney Fashion Website

This is a fully functional e-commerce website front-end for Na-Ney Fashion. It features:

- Product categories dynamically loaded from Firebase Firestore.
- Modal popups for detailed product view and quantity selection.
- Shopping cart stored in browser localStorage.
- Admin upload page to add products directly to Firestore.
- Responsive navigation and modern UI.

---

## Setup Instructions

1. **Firebase Project**

- Create a Firebase project at https://console.firebase.google.com/.
- Enable Firestore database.
- Update Firestore security rules to allow reads/writes during development:

```rules
service cloud.firestore {
  match /databases/{database}/documents {
    match /products/{docId} {
      allow read, write: if true;
    }
  }
}
```
