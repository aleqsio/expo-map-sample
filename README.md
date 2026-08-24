# expo-map-sample

A tiny expo-router app that dogfoods the [expo-map](https://github.com/aleqsio/expo-map) GitHub
Action: every screen is mapped on an iOS simulator in CI, and each pull request gets a sticky
comment linking a [visual review](https://appmap-visualiser.vercel.app) of what changed on-screen.

Six screens, enough to exercise the interesting cases:

| route | via |
| --- | --- |
| `/` `/explore` `/profile` | native tabs |
| `/item/[id]` | route param (`Featured item` on Home; items chain to the next id) |
| `/settings` | pushed from Profile; two switches for state-variant captures |
| `/modal` | modal presentation (`About this app` on Home) |

## How CI is wired

- [.github/workflows/appmap-baseline.yml](.github/workflows/appmap-baseline.yml) — on every push
  to `main` (and a weekday cron): refresh the full map incrementally, publish it to the `appmaps`
  branch, open a flows PR for screens the agent had to explore.
- [.github/workflows/appmap-pr.yml](.github/workflows/appmap-pr.yml) — on every PR: capture only
  the screens the diff can affect, pack an `.appmapdiff`, comment with a preloaded visualiser link.
- [.appmap/config.json](.appmap/config.json) — scheme, device, waits, sample params, and the agent
  provider (**opencode** here; `claude` / `codex` / `gemini` work too — set the matching
  `AGENT_API_KEY` repo secret).
- [.appmap/SKILL.md](.appmap/SKILL.md) — app-specific guidance for the agent.
- [eas.json](eas.json) — the `development-simulator` profile. The Action owns no build pipeline:
  the dev client comes from **EAS Build** (reused by fingerprint when only JS changed, built on
  Expo's infra otherwise). One-time setup: `npx eas init` to link the project, then add an
  `EXPO_TOKEN` repo secret. To bring your own build instead, pass `app_path`.
- `.appmap/flows/` — replayable navigation flows, committed like code; the baseline job's flows PR
  fills this in, after which CI replays them with no LLM involved.

Run the app locally the usual way: `npm install && npx expo run:ios`.
