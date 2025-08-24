---
title: "ECO — Twitch Extension"
description: "Led development of an interactive Twitch extension that connects viewers with ECO community servers — elections, stats, live data, and more."
tags: ["Twitch Extensions", "TypeScript", "Vue/React", "OAuth", "WebSocket", "REST", "Cloudflare", "CI/CD"]
links:
  - label: "Twitch Extension (Dashboard)"
    url: "https://dashboard.twitch.tv/extensions/0sezysj452rx8ca4h52j5a50d1u9ig-1.0.0"
  - label: "ECO (Overview)"
    url: "/projects/slg-eco-overview"
order: 3
---

## Project Brief
I led the design and development of ECO's Twitch extension to bring in-game community server interactions directly into Twitch streams. The extension surfaced elections, server stats, and other live data, letting viewers engage with streamers' ECO worlds in real time.

## Features
- Community Elections: surfaced active ballots and results to encourage participation and discussion.
- Live Server Stats: displayed key metrics and status from ECO servers for viewers at-a-glance.
- Streamer Configuration: simple setup and secure linking for creators to connect their server or community context.
- Performance & UX: optimized payload sizes, caching, and rendering for a responsive, low-latency overlay experience.

## Architecture
- Frontend: built as a Twitch panel/overlay extension using modern tooling and TypeScript.
- Backend Integration: consumed ECO services and internal APIs for server/election data.
- Auth: integrated with Twitch extension auth and app-scoped tokens where appropriate.
- Deploy: versioned and released via Twitch's extension portal with CI/CD automation.

## Outcomes
- Increased viewer engagement around ECO streams.
- Robust, maintainable codebase aligned with Twitch extension best practices.

See the ECO overview for related web, backend, and DevOps work: [/projects/slg-eco-overview](/projects/slg-eco-overview).
