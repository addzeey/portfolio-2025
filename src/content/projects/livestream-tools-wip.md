---
title: "Livestream.Tools"
description: "An in-development platform for creating and managing stream-ready browser-source overlays through one focused dashboard, with interactive editor prototypes and shared account foundations."
tags: ["TanStack Start", "React", "TypeScript", "Cloudflare", "Better Auth", "OBS"]
links:
  - label: "Project website"
    url: "https://livestream.tools"
bannerImage: "/images/projects/livestream-tools-header.jpg"
bannerAlt: "Livestream.Tools website interface"
order: 6
status: "Private alpha"
projectType: "Creator tools platform"
relatedProjects: ["twitch-hype-train-overlay", "songfo-prototype"]
highlights:
  - title: "Shared dashboard"
    description: "Brings account access and several browser-source tool editors into one application."
  - title: "Visual editors"
    description: "Uses immediate previews to keep overlay styling and configuration easy to follow."
  - title: "Reusable tool patterns"
    description: "Carries consistent navigation, editing and browser-source workflows between tools."
  - title: "Application foundation"
    description: "Combines a typed full-stack React application with authentication and cloud deployment foundations."
---

## Overview

Livestream.Tools is an in-development platform for configuring browser-source overlays used in streaming software. The current application brings account access, tool selection and interactive editors into one dashboard rather than treating every overlay as a separate product.

The project remains private while the core workflows are being developed. This case study intentionally covers the product direction and interface work without documenting private implementation details.

## Product Direction

Streaming tools often spread configuration across unrelated dashboards or expose more controls than a creator needs before going live. Livestream.Tools is designed around smaller, focused editors with immediate visual feedback and a consistent route from setup to browser-source output.

## Current Work

The most developed editor handles rotating media used for announcements, sponsor cards and other on-stream visuals. It explores slide management, layout, timing, animation and label controls alongside a responsive preview.

A second editor is testing how live-chat presentation can fit the same dashboard and editing model. It currently focuses on appearance and preview behaviour while the live delivery workflow remains under development.

## Interface Design

Each tool follows the same broad structure: focused controls, a representative preview and a clear browser-source handoff. The aim is to make new tools feel familiar without forcing every editor into an identical set of options.

The dashboard, authentication screens and editor layouts are designed to work across desktop and smaller devices, although final browser-source testing is still ongoing.

## Technical Foundation

The application uses React and TypeScript through TanStack Start, with session-backed authentication and a Cloudflare deployment target. Data and media-storage foundations are in place for later persistence work.

## Current State

Livestream.Tools is an active private alpha. The dashboard and editor prototypes are functional, while saved configurations, uploads, production overlay delivery, live data paths, testing and release workflows remain in development.
