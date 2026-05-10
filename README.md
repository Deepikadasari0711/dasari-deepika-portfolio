# Dasari Deepika Portfolio

Premium frontend portfolio built with React, TypeScript, Redux Toolkit, Tailwind CSS, Framer Motion, and React Icons.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Customize Content

Most profile content lives in:

```text
src/data/portfolio.ts
```

Update GitHub links, project links, skills, experience, certifications, and contact details there.

Assets live in:

```text
public/assets/book-my-chef
public/assets/resume
```

Replace the resume file in `public/assets/resume` when you have a final PDF or DOCX.

## Deployment Recommendation

Vercel is the recommended free deployment option for this React + Vite portfolio.

1. Push this folder to a GitHub repository.
2. Go to `https://vercel.com`.
3. Sign in with GitHub.
4. Import the portfolio repository.
5. Keep the default Vite settings.
6. Deploy.
7. Copy the final `.vercel.app` URL.
8. Add it to LinkedIn under Contact Info and Featured.

## Launch Checklist

- Add final GitHub profile URL in `src/data/portfolio.ts`.
- Replace resume DOCX with a recruiter-ready PDF if possible.
- Add live GitHub repository link once available.
- Run `npm run build` before deployment.
- Test mobile, tablet, and desktop views.
- Open all project, LinkedIn, resume, email, and app store links.
