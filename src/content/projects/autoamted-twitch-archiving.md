---
title: "Automated Twitch Archiving"
description: "A Go application for automated Twitch VOD and chat archiving. Records, processes, and uploads streams with robust error handling, notifications, and cloud integration."
tags: ["Go", "Twitch API", "Supabase", "Streamlink", "FFmpeg", "Docker", "Webhook", "Cloudflare R2", "Automation"]
links:
  - label: "GitHub Repository"
    url: "https://github.com/addzeey/go-archiver-twitch"
bannerImage: "/images/projects/twitch-archiving-bot-header.jpg"
order: 0
---

## Project Brief

The Twitch Archiving Bot is a fully automated solution for recording and archiving Twitch streams and chat logs. Built for reliability and hands-off operation, it leverages Twitch EventSub webhooks to detect when a stream goes live or offline, then records the stream in segments using Streamlink. The bot encodes, processes, and uploads the final VOD and chat logs to cloud storage, ensuring nothing is lost—even in the event of network interruptions or stream drops.

## Features

- **Automated VOD Recording:** Listens for Twitch EventSub events to start and stop recording streams with minimal delay.
- **Segmented & Resilient:** Uses Streamlink to record in segments, automatically concatenating and recovering from interruptions.
- **Chat Log Capture:** Archives Twitch chat alongside the video, exporting as JSON for future reference or replay.
- **Post-Processing:** Encodes raw recordings, converts to HLS, and prepares assets for cloud upload.
- **Cloud Integration:** Uploads VODs and chat logs to Cloudflare R2 via Supabase, with optional local-only mode for debugging.
- **Discord Notifications:** Sends real-time status, error, and completion notifications to Discord webhooks, including VOD links and metadata.
- **Web Endpoints:** Provides OAuth flows for Twitch and Streamlink token management, plus health and status endpoints.
- **Dockerized Deployment:** Ready for production with a multi-stage Dockerfile and environment-based configuration.

## Development & Design

The bot is written in Go for performance and concurrency, with a focus on reliability and clear logging. It is designed to be easily deployed via Docker and integrates with modern cloud services for storage and notifications. The modular architecture allows for easy extension and adaptation to other streaming platforms or workflows.

## Use Cases

- Automated archiving for streamers who want reliable, hands-off VOD and chat backups.
- Community archiving projects or VOD preservation for content creators.
- Integrations with Discord for real-time status and error reporting.

---

*Built to empower creators and communities with reliable, automated archiving for Twitch streams and chat.*
