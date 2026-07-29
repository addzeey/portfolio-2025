---
title: "Songfo Prototype"
description: "A small OBS browser source that displays the currently playing Spotify track, built to test the first idea behind Livestream Tools."
tags: ["HTML", "CSS", "JavaScript", "PHP", "Spotify API", "OBS"]
links:
  - label: "Visit prototype"
    url: "https://songfo.livestream.tools/"
bannerImage: "/images/projects/project-header-songfo.png"
bannerAlt: "Songfo current-track overlay prototype"
order: 7
status: "Prototype"
projectType: "OBS browser source"
relatedProjects: ["livestream-tools-wip"]
---

## Overview

Songfo tested one idea planned for Livestream Tools: showing the current Spotify track on stream through an OBS Browser Source.

## Design

The prototype kept both setup and output deliberately small. Streamers could connect Spotify, add the browser source and test the overlay without working through a larger dashboard.

## Development

PHP handled Spotify authentication and API requests. The frontend used HTML, CSS and JavaScript, with jQuery used to move quickly during the prototype stage.

The project was shared with a small group of streamers for early feedback before the broader Livestream Tools work began.
