---
title: "Strange Loop Games — ECO"
description: "Work across ECO's public website, internal web client, .NET account services and cloud infrastructure, including a React migration and an AWS migration that significantly reduced operating costs."
tags: ["React", "TypeScript", "Vue", ".NET", "Vite", "CI/CD", "Azure", "Cloudflare"]
links:
  - label: "Visit ECO"
    url: "https://play.eco"
  - label: "Strange Loop Games"
    url: "https://strangeloopgames.com"
order: 3
homepageOrder: 4
status: "Shipped"
projectType: "Web, backend and infrastructure"
relatedProjects: ["eco-twitch-extension"]
highlights:
  - title: "Public website"
    description: "Led the move from a legacy PHP site to React, Vite and Cloudflare Pages."
  - title: "Account services"
    description: "Contributed to .NET services for accounts, authentication, validation and internal APIs."
  - title: "Internal tooling"
    description: "Maintained the Vue and .NET WebClient used for server information and game operations."
  - title: "Cloud operations"
    description: "Moved remaining workloads away from AWS to Azure and Cloudflare, delivering a significant monthly cost reduction."
---

## Overview

My work at Strange Loop Games covered several parts of ECO's online systems: the public website, an internal WebClient, the StrangeCloud account services and the infrastructure used to deploy and operate them.

The projects were connected. Website and game clients depended on the same account and service APIs, while deployment work spanned Cloudflare, Azure and CI/CD.

## Public Website

I led the migration of play.eco from its legacy PHP frontend to React, TypeScript and Vite. The new site moved to Cloudflare Pages and kept internationalisation, account flows and game information connected to existing services.

## Internal WebClient

I maintained and extended the Vue-based WebClient and its .NET server. It exposed server statistics, elections and administrative tools used around ECO game servers.

## StrangeCloud Services

I contributed to the .NET services behind accounts, authentication, game-user validation, token issuance and internal APIs. This work moved identity and shared service endpoints into one backend used by several ECO products.

## Infrastructure

- Maintained Azure servers and databases used by web services.
- Worked on build and deployment pipelines across the application stack.
- Added and maintained Cloudflare services around the public site.
- Helped move the remaining workloads away from AWS to Azure and Cloudflare, delivering a significant reduction in monthly infrastructure costs.
- Improved localisation tooling, build workflows and performance profiling.

## Related Work

I also led development of an ECO Twitch extension that displayed server elections, statistics and live data inside Twitch. [Read the Twitch extension case study](/projects/eco-twitch-extension).

## Stack

- **Public website:** React, Vite, TypeScript and internationalisation tooling.
- **Internal application:** Vue, TypeScript and .NET.
- **Backend:** .NET, ASP.NET and REST APIs.
- **Infrastructure:** Azure, Cloudflare Pages, Cloudflare R2 and CI/CD.
