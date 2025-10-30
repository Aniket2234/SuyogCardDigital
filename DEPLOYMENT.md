# Netlify Deployment Guide

This project is configured to be deployed on Netlify.

## Prerequisites
- A Netlify account (sign up at https://www.netlify.com/)
- Your project code in a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to your Netlify account at https://app.netlify.com/
3. Click "Add new site" > "Import an existing project"
4. Connect to your Git provider and select this repository
5. Netlify will automatically detect the build settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 20
6. Click "Deploy site"

### Option 2: Deploy using Netlify CLI

1. Install Netlify CLI globally:
   ```bash
   npm install -g netlify-cli
   ```

2. Login to Netlify:
   ```bash
   netlify login
   ```

3. Initialize your site:
   ```bash
   netlify init
   ```

4. Deploy:
   ```bash
   netlify deploy --prod
   ```

## Configuration

The project includes a `netlify.toml` file with the following configuration:
- **Build Command**: `npm run build` - Compiles the frontend
- **Publish Directory**: `dist/public` - The output directory for the static frontend files
- **Redirects**: All routes redirect to `index.html` for client-side routing (SPA)
- **Node Version**: 20

## Notes

- This is a static site deployment. Only the frontend is deployed to Netlify.
- The backend (Express server) is not used in the Netlify deployment - this is a client-only build.
- Environment variables can be set in Netlify Dashboard under Site Settings > Environment Variables
- Custom domains can be configured in Netlify Dashboard under Domain Settings

## Build Process

The build process does the following:
1. Runs `vite build` to build the frontend React application
2. Bundles the Express server using esbuild (not used in Netlify deployment)
3. Outputs the frontend static files to the `dist/public` directory
4. Netlify serves the static files from `dist/public`

## Troubleshooting

If you encounter build errors:
1. Check that all dependencies are listed in `package.json`
2. Ensure Node version 20 is being used
3. Check Netlify build logs for specific error messages
4. Verify that the build works locally by running `npm run build`
