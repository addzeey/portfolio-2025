---
title: "MurderCrumpet VOD & Contest Website"
description: "A full-stack web application for archiving, browsing, and interacting with Twitch VODs, chat replays, and community contests. Built with React, TypeScript, Supabase, and TanStack Query for a seamless, modern user experience. Integrates with a custom automated archiving system and HLS playback via Cloudflare for robust, scalable video delivery."
tags: ["React", "TypeScript", "Supabase", "TanStack", "Twitch API", "VOD", "HLS", "Chat", "Cloudflare"]
links:
  - label: "Github [Contest Website]"
    url: "https://github.com/addzeey/crump-contest"
  - label: "Contest Standalone"
    url: "https://crumpcontest.com/"
  - label: "New Combined VOD & Contest WIP"
    url: "https://crumpet-site.pages.dev/vods"
order: 2
---

## Project Brief

The MurderCrumpet Website is a feature-rich platform for archiving and exploring Twitch VODs, chat replays, and community contest entries. It is tightly integrated with a custom automated archiving project, which handles VOD and chat capture, and provides a seamless pipeline for ingesting, processing, and serving content. The site features a custom HLS implementation for video playback, leveraging Cloudflare for fast, reliable, and scalable delivery. Designed for both viewers and administrators, it provides robust tools for video playback, chapter navigation, chat replay, and contest management. The site leverages Supabase for authentication, data storage, and cloud integration, ensuring a reliable and scalable experience.

## Features

- **VOD Archive & Playback:** Browse and watch archived Twitch VODs with chapter navigation, game metadata, and high-quality video streaming.
- **Chat Replay:** Synchronized chat replay alongside VODs, including emote support and channel-specific features.
- **Contest Management:** Submit, browse, and vote on community contest entries, with admin tools for moderation and results.
- **User Authentication:** Secure login via Twitch OAuth, with role-based access for admins and regular users.
- **Responsive UI:** Modern, mobile-friendly interface built with React, TypeScript, and utility-first styling.
- **Cloud Integration:** Uses Supabase and Cloudflare for scalable storage, authentication, and data management.
- **Admin Dashboard:** Tools for managing users, videos, and contest entries, including role assignment and video uploads.
- **Performance & Reliability:** Optimized data fetching with TanStack Query, error handling, and efficient state management.

## Development & Design

The application is built with a modular, maintainable codebase following best practices for React and TypeScript. All data fetching is handled via TanStack Query, with strict typing using Supabase-generated types. The project structure enforces clear separation of concerns, with dedicated folders for components, hooks, utilities, and types. The UI is designed for clarity and ease of use, with a focus on accessibility and responsiveness.

## Use Cases

- Archiving and browsing Twitch VODs and chat for the MurderCrumpet community.
- Running and managing community art or video contests with voting and moderation.
- Providing a seamless, interactive experience for both viewers and content creators.

---

*Empowering the MurderCrumpet community with a modern, reliable platform for VOD archiving, chat replay, and creative contests.*