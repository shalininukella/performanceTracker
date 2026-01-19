<!-- # Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain) -->

# Project Overview

## Project info

**Production URL**: [performance-tracker-beta.vercel.app](https://performance-tracker-beta.vercel.app/)

## How can I edit this code?

There are multiple ways to work with this application.

---

## Local Development (Recommended)

### Requirements

- Node.js (v18+ recommended)
- npm
  (Optional: install via nvm — [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm))

### Steps

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The app will be available at:

```
http://localhost:8080
```

---

## Edit directly on GitHub

- Open the repository on GitHub
- Click the **Edit (✏️)** button on any file
- Commit your changes
- Vercel will automatically redeploy on every push to the main branch

---

## Use GitHub Codespaces

- Go to the repository
- Click **Code → Codespaces**
- Create a new Codespace
- Edit files in the browser IDE
- Commit and push changes to trigger a new Vercel deployment

---

## Technologies used

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

---

## Deployment (Vercel)

This project is optimized for **Vercel**.

### Automatic Deployment

- Every push to the `main` branch triggers a new deployment
- Pull requests create **Preview Deployments**
- Merges create **Production Deployments**

### Build Settings (Vercel)

- **Framework Preset**: Vite
- **Build Command**:

  ```sh
  npm run build
  ```

- **Output Directory**:

  ```sh
  dist
  ```

Vercel auto-detects these settings in most cases.

---

## Environment Variables

- Go to **Vercel Dashboard → Project → Settings → Environment Variables**
- Add variables for:
  - Production
  - Preview
  - Development

- Redeploy after changes

---

## Custom Domain

- Open **Vercel Dashboard → Project → Settings → Domains**
- Add your domain
- Update DNS records as instructed by Vercel
- SSL is automatically handled

---

## Useful Commands

```sh
npm run dev      # Start local dev server
npm run build    # Build for production
npm run preview  # Preview production build locally
```
