---
title: "Automated Twitch VOD Archiving"
description: "A Go service that records Twitch streams and chat, builds HLS archives, captures chapters and activity markers, and provides editing and recovery tools for the finished VODs."
tags: ["Go", "Twitch EventSub", "Streamlink", "FFmpeg", "Cloudflare R2", "Supabase", "Docker"]
links:
  - label: "View VOD archive"
    url: "https://crump.gg/vods"
order: 1
homepageOrder: 2
status: "Active"
projectType: "Media automation service"
relatedProjects: ["crumpet-community-site"]
highlights:
  - title: "Segmented capture"
    description: "Supervises Streamlink recordings and joins validated segments after interruptions."
  - title: "Stream context"
    description: "Stores chapters, synchronised chat, Twitch clips and activity markers alongside each VOD."
  - title: "Editor workflow"
    description: "Produces HLS, thumbnails, timestamp links and an optional editor-ready MP4 archive."
  - title: "Repair tools"
    description: "Supports segment-level redaction, timeline correction and reprocessing of recoverable failed jobs."
---

## Overview

This service runs the recording pipeline behind the VOD archive on Crump.gg. Twitch EventSub starts and stops each job, Streamlink records the broadcast in segments and Twitch IRC captures chat while the stream is live.

The project has grown beyond capture. It now prepares media for playback, records chapter changes, correlates Twitch clips, scores chat activity and gives editors tools to cut or recover archived broadcasts.

## Recording Pipeline

- Twitch EventSub handles online, offline and category-change events.
- Streamlink records restartable MKV segments under a process supervisor.
- A five-minute offline buffer avoids finalising a VOD during a short disconnect.
- FFmpeg joins validated segments, encodes the source and produces HLS playback files.
- Twitch IRC chat and category changes are stored against the recording timeline.

## Playback Data

Alongside video, the service creates a thumbnail, chapter metadata, synchronised chat and compact activity data. It matches Twitch clips back to the source broadcast where possible, giving the website and editors useful points on the timeline.

Media uploads go directly to Cloudflare R2. Supabase stores VOD metadata, chapters, lifecycle state and managed tokens.

## Editing and Recovery

The admin workflow can remove HLS segments from a published VOD, then adjust chat offsets and clip markers around the cut. Separate jobs regenerate activity data or reprocess failed recordings when usable source files remain on disk.

## Operations

Discord webhooks report recording, processing, upload, completion and error states. R2 operations use bounded retries, while local media remains available for a configurable grace period before cleanup. An optional Nextcloud upload provides an editor-friendly MP4 copy.

The application ships as a multi-stage Docker image with the media and cloud command-line tools required by the pipeline.
