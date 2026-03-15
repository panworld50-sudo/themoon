# themoon

## Deploy on Vercel

This project is configured as a Next.js app and builds successfully with:

```bash
npm install
npm run build
```

If you see this error on your live URL:

- `404: NOT_FOUND`
- `Code: DEPLOYMENT_NOT_FOUND`

it usually means the domain/alias is pointing to a deployment that no longer exists (not an app code error).

### Fix steps (2 minutes)

1. Open Vercel Dashboard → your project.
2. Go to **Deployments** and ensure latest deployment is **Ready**.
3. Open **Domains** tab.
4. Reassign your domain (`themoon-beige.vercel.app` or custom domain) to the latest production deployment.
5. If domain mapping is broken, remove the domain and add it again.
6. Trigger a fresh deploy from latest commit (`main`) with **Redeploy**.

### Required environment variables

Set these in Vercel Project → Settings → Environment Variables:

- `OPENAI_API_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_KEY`

You can copy names from `.env.example`.
