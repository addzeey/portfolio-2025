---
title: "Crump.gg — Streaming & Community Hub"
description: "MurderCrumpet's official site, bringing the live stream, searchable VOD archive, synchronised chat replay, Twitch clips, schedules and community rankings into one place."
tags: ["TanStack Start", "React", "TypeScript", "Cloudflare", "Supabase", "HLS", "Twitch API"]
links:
  - label: "Visit Crump.gg"
    url: "https://crump.gg"
order: 0
homepageOrder: 1
featured: true
status: "Live"
projectType: "Full-stack community platform"
relatedProjects: ["automated-twitch-archiving", "twitch-hype-train-overlay", "crumpet-clips"]
highlights:
  - title: "Official community hub"
    description: "Combines live viewing, VODs, clips, schedules and community features under one site."
  - title: "VOD and chat replay"
    description: "Pairs HLS playback with chapters, synchronised virtualised chat and Twitch and 7TV emotes."
  - title: "Viewer navigation"
    description: "Search, game and date filters make a growing archive easier to browse."
  - title: "Media operations"
    description: "Internal tools cover VOD metadata, activity processing, redaction and ranking publication."
---

## Overview

Crump.gg is MurderCrumpet's official streaming and community site. What began as separate VOD and contest work has become one place for the live stream, archived broadcasts, Twitch clips, schedules, community links and monthly streamer rankings.

I rebuilt the application around TanStack Start and React, with server-rendered routes and a new broadcast-inspired interface. The site pulls together data and media from Twitch, Supabase, Cloudflare and the separate VOD archiving pipeline.

## Live and Archive Experience

The homepage brings the current Twitch stream, chat, latest archived VOD, recent clips and weekly schedule together without forcing viewers through several services.

The VOD archive supports title search, game and date filters, month-based grouping and incremental loading. Individual broadcasts include chapter navigation, timestamp sharing, saved playback position, theater mode, picture-in-picture and keyboard controls.

## Chat and Activity

Archived chat stays in step with video playback and uses virtualised rendering for longer streams. Twitch and 7TV emotes are resolved in context, while a separate activity timeline highlights busy chat periods and known clip moments.

Viewers can jump around the recording without losing the relationship between the video, chapter data and conversation around it.

## Clips and Community Features

The clips area supports date ranges, view-based or recent sorting, pagination and embedded playback. Where source data allows it, clips link back to the matching point in the archived broadcast.

Monthly community rankings are published as a browsable archive. Other areas, including the gallery and migrated contest tools, remain in development and are not presented as finished features.

## Admin and Media Tools

Internal tools handle VOD titles, publication state, content warnings and activity generation. A timeline editor creates HLS-segment redactions and keeps chat and clip timing aligned after cuts. The same admin area also publishes monthly ranking packages.

## Architecture

- **Application:** React, TypeScript, TanStack Start, Router and Query.
- **Media:** HLS playback with Video.js, archived chat and activity metadata.
- **Data:** Supabase for VOD and ranking metadata.
- **Cloud:** Cloudflare Workers, R2 and D1 for runtime, storage and supporting services.
- **Integrations:** Twitch stream, chat, clips, schedules and emotes.

## Current State

The live stream, VOD archive, chat replay, clips, schedules and rankings are available on the public site. Gallery, account, builder and contest migrations are still being worked on.
