---
name: screenmap-project
description: Project-specific guidance for the screenmap agent when it explores screens of this app in CI.
---

# How to explore this app

A tiny demo app — no auth, no network, no destructive actions anywhere.

## Real params
- `/item/:id` → any positive integer works; the screen just renders the id. Use `42`.

## Screens worth extra states
- `/settings` has two switches — a capture with a toggled switch makes a good state variant.
- `/modal` opens with modal presentation from Home ("About this app" row).

## Timing
- Everything is local and instant; the default transition wait is plenty.

## Notes vocabulary
- Say what a user would see ("the Featured item row moved above Dev tools"), not how the code changed.
