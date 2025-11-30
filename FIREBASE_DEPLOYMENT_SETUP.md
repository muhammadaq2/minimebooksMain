# Firebase Hosting Deployment Setup

This project is now configured for automatic deployment to Firebase Hosting via GitHub Actions.

## What Was Configured

1. **firebase.json** - Firebase Hosting configuration pointing to the `build` directory
2. **.firebaserc** - Firebase project ID configuration (kidswonder-a389e)
3. **.github/workflows/firebase-deploy.yml** - GitHub Actions workflow for automatic deployment

## Next Steps Required

### 1. Create Firebase Service Account

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **kidswonder-a389e**
3. Click the gear icon ⚙️ → **Project Settings**
4. Go to the **Service Accounts** tab
5. Click **Generate new private key**
6. Save the downloaded JSON file securely

### 2. Add Secret to GitHub Repository

1. Go to your GitHub repository: `https://github.com/muhammadaq2/minimebooksMain`
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `FIREBASE_SERVICE_ACCOUNT`
5. Value: Paste the **entire contents** of the JSON file you downloaded
6. Click **Add secret**

### 3. Verify Firebase Project ID

If your Firebase project ID is different from `kidswonder-a389e`, update it in:
- `.firebaserc` (project ID)
- `.github/workflows/firebase-deploy.yml` (projectId in the workflow)

### 4. Commit and Push

Once the secret is added, commit and push these configuration files:

```bash
git add firebase.json .firebaserc .github/
git commit -m "Add Firebase Hosting configuration and GitHub Actions workflow"
git push origin main
```

## How It Works

- Every push to the `main` branch will automatically:
  1. Checkout the code
  2. Install dependencies (`npm ci`)
  3. Build the project (`npm run build`)
  4. Deploy to Firebase Hosting

## Verification

After pushing, you can check the deployment status:
- **GitHub**: Go to the **Actions** tab in your repository
- **Firebase**: Go to Firebase Console → Hosting → Check deployment history

## Important Notes

- The build output goes to the `build` folder (as configured in package.json)
- The workflow only triggers on pushes to the `main` branch
- You can also manually trigger deployments from the GitHub Actions tab using `workflow_dispatch`
- Your existing application code and functionality remain completely unchanged

