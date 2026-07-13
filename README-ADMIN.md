# Portfolio admin setup

The dashboard uses Firebase so changes show for every visitor.

1. Create a project at https://console.firebase.google.com and add a **Web app**.
2. Copy that app's configuration values into `firebase-config.js`.
3. Create a **Cloud Firestore** database.
4. In **Authentication**, enable **Email/Password** and create your own user.
5. Publish these Firestore rules:

```
rules_version = '2';
service cloud.firestore { match /databases/{database}/documents { match /skills/{skillId} { allow read: if true; allow write: if request.auth != null; } } }
```

6. Push all changed and new files to the GitHub repository hosting the site.

Open `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/admin.html`, sign in, and manage your skills.
