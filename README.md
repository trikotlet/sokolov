# sokolov

Portfolio site on Vite + React, deployed to GitHub Pages.

## Run In Docker

Build and start:

```bash
docker compose up --build
```

Then open [http://localhost:8080](http://localhost:8080).

Notes:

- The container builds the Vite app and serves `dist/` with `nginx`.
- SPA routes are handled via `try_files`, so direct opens like `/cv` and `/projects` work in Docker.

## Run In Docker Dev Mode

Start Vite with hot reload:

```bash
docker compose -f docker-compose.dev.yml up --build
```

Then open [http://localhost:5173](http://localhost:5173).

Notes:

- The source tree is mounted into the container, so local edits are reflected immediately.
- Dependencies are installed inside the container on startup with `npm ci`.

## GitHub Pages Quick Check

1. Open `Settings -> Pages`.
2. Ensure `Build and deployment -> Source` is set to `GitHub Actions`.
3. Open `Actions -> Deploy GitHub Pages` and run workflow for `main`.
4. Wait for a successful run (`conclusion: success`).
5. Open `https://trikotlet.github.io/sokolov/`.

## If Site Returns 404

1. Confirm repository visibility is `Public`.
2. Re-save `Settings -> Pages -> Source: GitHub Actions`.
3. Re-run `Deploy GitHub Pages` workflow manually.
4. Check `Settings -> Pages` for published URL.
5. Wait 1-2 minutes for CDN propagation, then re-check.

## Current Known Behavior

- `https://trikotlet.github.io/sokolov/` should return `200`.
- Direct deep links like `/sokolov/cv` and `/sokolov/projects` can return `404` on GitHub Pages if opened directly, but in-app navigation works from the root page.
