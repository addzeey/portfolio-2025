---
title: "Crumpet Clips"
description: "A work-in-progress Discord integration for creator communities to connect media accounts, submit community-made content and follow performance across several platforms."
tags: ["Go", "Python", "Discord", "OAuth", "SQLite", "Docker"]
links:
  - label: "Project information"
    url: "https://policy.livestream.tools/crumpclips/"
order: 4
status: "Work in progress"
projectType: "Discord and media integration"
relatedProjects: ["crumpet-community-site"]
highlights:
  - title: "Discord-first workflow"
    description: "Keeps account connection, submissions and reporting close to the community's existing space."
  - title: "Platform connections"
    description: "Coordinates consent-based account links across several media services."
  - title: "Content tracking"
    description: "Records submitted community content and follows broad performance signals over time."
  - title: "Split service design"
    description: "Pairs a Go API with a Python Discord bot and background processing."
---

## Overview

Crumpet Clips is an early-stage tool for creator communities working across several media platforms. It brings account connection, community submissions and performance summaries into Discord, where the community already talks and organises its work.

## The Problem

Community-made content is spread across separate platforms. That makes it difficult to confirm ownership, keep submissions organised and understand how shared work is performing without stitching together several dashboards by hand.

## Current Workflow

Members can register through Discord, connect supported media accounts and submit content they control. The service records broad performance signals and can return current or historical summaries through Discord commands.

Community administrators can organise participating creators and platform roles. The design keeps member actions separate from administrative controls.

## Technical Foundation

- **Service:** Go API for account connections, submissions and background work.
- **Community interface:** Python Discord bot using application commands.
- **Data:** SQLite locally, with hosted database support for deployment.
- **Operations:** Background synchronisation and containerised services.

## Current State

Core registration, account connection, submission and reporting flows exist, but the project remains in active development. Platform coverage, onboarding and reporting will continue to change as the workflow is tested with its intended community.
