---
title: "Strange Loop Games — ECO (Overview)"
description: "End-to-end contributions across web, backend, internal tools, and DevOps for the sandbox simulation MMO ECO. Led the migration to a modern React website, built and maintained backend services, and optimized cloud infrastructure."
tags: ["React", "TypeScript", "Vue", ".NET", "ASP.NET", "Node", "Vite", "i18n", "CI/CD", "Azure", "Cloudflare", "DevOps"]
links:
  - label: "ECO Website (React)"
    url: "https://play.eco"
  - label: "Twitch Extension (Overview)"
    url: "/projects/eco-twitch-extension"
  - label: "Strange Loop Games"
    url: "https://strangeloopgames.com"
order: 2
---

## Project Brief
At Strange Loop Games, I contributed broadly to ECO's online ecosystem: rebuilding the public website, maintaining the internal WebClient, architecting and delivering the new accounts and API backend (StrangeCloud), and handling key DevOps responsibilities. The goal was to modernize our stack, improve developer workflow, and reduce operating costs while maintaining reliability for a large player base.

## Scope & Contributions
- Public Website (play.eco): migrated from legacy PHP to a modern React + Vite stack, deployed to Cloudflare Pages for fast builds, caching, and global edge delivery.
- Internal WebClient: maintained and extended the Vue-based app and its .NET internal web server, providing server stats, elections, and admin tools for game operations.
- StrangeCloud Backend: helped build the new .NET backend powering accounts, authentication, game user validation, token issuance, and service APIs.
- DevOps & Cloud: owned Azure server/database maintenance, CI pipelines, Cloudflare integrations, and a full migration off AWS to significantly reduce monthly costs.
- Integrations & Tooling: improved i18n workflows, performance profiling, and build tooling across services.

## Highlights
- Website Migration: delivered a robust React front end with improved DX, caching, and reliability via Cloudflare Pages.
- Cost Optimization: decommissioned AWS usage in favor of Azure and Cloudflare services, saving thousands per month.
- Backend Modernization: centralized identity and service APIs under StrangeCloud to streamline product integrations.
- Operational Reliability: strengthened CI/CD, observability, and maintenance processes across environments.

## Related Work
- Twitch Extension for ECO: built and led development of an interactive Twitch extension that connected stream viewers with ECO community servers (elections, stats, and more). See the separate project page: [/projects/eco-twitch-extension](/projects/eco-twitch-extension).

## Tech Stack
- Frontend: React, Vite, TypeScript, i18n
- Internal App: Vue, TypeScript, .NET
- Backend: .NET, ASP.NET, REST APIs
- Infra: Azure, Cloudflare Pages, Cloudflare R2 (object storage), CI/CD
