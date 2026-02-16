# Deployment Instructions for Vercel

This portfolio is built with Next.js (App Router) and can be easily deployed to Vercel.

## 1. Prerequisites
- A Vercel account linked to your GitHub/GitLab/Bitbucket.
- The project code pushed to a repository.

## 2. Deployment Steps
1. Go to the [Vercel Dashboard](https://vercel.com/dashboard).
2. Click **Add New** > **Project**.
3. Import your repository.
4. Vercel will automatically detect **Next.js** as the framework.
5. (Optional) Configure environment variables if you add any in the future.
6. Click **Deploy**.

## 3. Post-Deployment
Once deployed, Vercel will provide a production URL. Any future pushes to the `main` branch will trigger automatic deployments.

## 4. Medium RSS Sync
The Medium RSS feed is fetched server-side. No API keys are required for the public feed, but ensure that the Medium username in `src/app/page.tsx` is correct:
```tsx
const posts = await getMediumPosts("Emar7");
```

---
