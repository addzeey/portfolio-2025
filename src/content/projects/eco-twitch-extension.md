---
title: "ECO — Twitch Extension"
description: "A Twitch extension for exploring ECO server elections, statistics and live status data without leaving the stream."
tags: ["Twitch Extensions", "TypeScript", "OAuth", "WebSockets", "REST", "Cloudflare", "CI/CD"]
links:
  - label: "Extension dashboard"
    url: "https://dashboard.twitch.tv/extensions/0sezysj452rx8ca4h52j5a50d1u9ig-1.0.0"
order: 5
status: "Shipped"
projectType: "Interactive Twitch extension"
relatedProjects: ["slg-eco-overview"]
highlights:
  - title: "Server elections"
    description: "Displayed active ballots and results from connected ECO community servers."
  - title: "Live server data"
    description: "Brought server status and game information into Twitch panels and overlays."
  - title: "Creator setup"
    description: "Provided configuration for linking a Twitch channel with its ECO server context."
  - title: "Release workflow"
    description: "Versioned extension releases were published through Twitch with CI/CD support."
---

## Overview

I led the design and development of ECO's Twitch extension. It brought information from community game servers into Twitch, so viewers could follow elections, server statistics and live status while watching a stream.

## Viewer Features

- Active community elections and their results.
- Live server statistics and status information.
- Twitch panel and overlay views suited to different channel layouts.
- Cached responses and smaller payloads for the embedded Twitch environment.

## Creator Configuration

Creators could link their Twitch channel to the relevant ECO server or community context. The extension used Twitch's authentication model and app-scoped tokens when calling supporting services.

## Architecture

The TypeScript frontend consumed ECO services and internal APIs for election and server data. WebSocket and REST connections covered different update patterns, while Cloudflare supported delivery and integration work around the extension.

Releases were versioned and submitted through Twitch's extension portal using a CI/CD workflow.

## Related Work

The extension formed one part of my wider work on ECO's website, backend services and infrastructure. [Read the ECO overview](/projects/slg-eco-overview/).
