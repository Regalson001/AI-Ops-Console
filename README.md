# AI Ops Console — AI Operations Dashboard

A responsive dashboard concept for monitoring AI workflows, reviewing model metrics, and inspecting automation activity. Built with HTML5, CSS3, and vanilla JavaScript.

> **Project status:** Front-end portfolio demonstration using sample data. It is not connected to a production model, workflow engine, or external AI provider.

## Overview

AI Ops Console brings common AI operations into one interface: workflow execution status, model health indicators, activity history, and a prompt playground that previews a JSON request payload.

The project demonstrates practical front-end development through a structured dashboard, interactive components, responsive layouts, and browser-based data handling.

## Features

- Responsive dark dashboard with collapsible mobile navigation.
- Metric cards for execution volume, success rate, response time, and active workflows.
- Interactive execution chart with 7-day and 30-day views.
- Model health panel showing sample accuracy, precision, and recall metrics.
- Workflow table with search and status filters.
- Simulated workflow runs with status updates and activity feed entries.
- Prompt templates for document summarization, email classification, and sentiment analysis.
- Live JSON request-payload preview with adjustable temperature and token limit.
- Copy JSON payload action.
- Export workflow data as a JSON report.
- Demo workflow state saved in browser `localStorage`.
- Reset control for restoring the original sample data.
- Keyboard focus states and reduced-motion support.

## Built With

- **HTML5** — semantic page structure and dashboard content.
- **CSS3** — responsive layouts, Grid, Flexbox, custom properties, and visual styling.
- **JavaScript ES6+** — workflow filtering, chart controls, prompt templates, and interactions.
- **Chart.js** — execution volume visualization.
- **Browser LocalStorage** — saving demo workflow state.
- **Clipboard API** — copying the generated JSON payload.
- **Blob and JSON APIs** — exporting the demo report.
- **Google Fonts** — DM Sans and Space Grotesk.

## Project Structure

```text
AI-Ops-Console/
├── index.html
├── styles.css
├── script.js
├── README.md
└── .gitignore
