---
title: "Twitch Hype Train Overlay"
description: "A live OBS overlay that turns Twitch Hype Train events into a custom animated train, with creator-managed artwork, motion settings and private overlay links."
tags: ["TypeScript", "Twitch EventSub", "Cloudflare Workers", "Durable Objects", "WebSockets", "OBS"]
links:
  - label: "Visit live tool"
    url: "https://train.livestream.tools/"
order: 2
homepageOrder: 3
status: "Live"
projectType: "Real-time stream overlay"
relatedProjects: ["crumpet-community-site", "automated-twitch-archiving"]
highlights:
  - title: "Live Twitch events"
    description: "Responds to Hype Train begin, progress and end events as they happen."
  - title: "Per-channel state"
    description: "Durable Objects keep each broadcaster's train ordered and isolated."
  - title: "Custom artwork"
    description: "Creators upload engine and carriage variants and align their connection points."
  - title: "OBS delivery"
    description: "Private browser-source links receive WebSocket updates with polling fallback."
---

## Overview

This project turns Twitch Hype Train events into a custom train that moves across the bottom of a stream. Each level adds another carriage, using artwork uploaded for the broadcaster rather than a fixed overlay theme.

It runs as an OBS Browser Source and includes a Twitch-authenticated admin area for artwork, animation settings and overlay-link management.

## Event Flow

Twitch EventSub sends Hype Train begin, progress and end events to a Cloudflare Worker. Valid events pass through a queue before reaching a Durable Object assigned to that broadcaster.

The Durable Object keeps the current train state in order and sends updates to connected overlays over WebSockets. The overlay also polls periodically, giving it a recovery path if the socket disconnects.

## Overlay Behaviour

- One carriage is shown for each active Hype Train level.
- Engine and carriage artwork is selected from the broadcaster's uploaded variants.
- Editable anchor points join artwork with different dimensions cleanly.
- Speed can increase with each level, with a configurable delay between passes.
- Artwork choices survive an overlay reload during the same train.
- The current pass finishes before the train clears after an end event.

## Creator Controls

The admin area handles image uploads, engine and carriage assignment, previews and anchor editing. Creators can tune speed, level multipliers, render height and loop timing without changing the overlay code.

Private overlay links can be created, copied, rotated and revoked before being added to OBS.

## Cloudflare Architecture

- **Workers:** Twitch authentication, EventSub handling, admin routes and assets.
- **Queues:** Buffered event delivery with retries and deduplication.
- **Durable Objects:** Ordered per-broadcaster state and WebSocket fan-out.
- **D1:** Configuration, sessions and event history.
- **R2:** Uploaded train artwork.
- **KV:** Short-lived lookups and event deduplication.

## Current State

The overlay and admin tools are deployed and in use as a custom creator tool. Further work is focused on hardening uploads, expanding test coverage and refining the public-facing product page.
