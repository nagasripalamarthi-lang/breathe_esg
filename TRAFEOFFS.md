# Tradeoffs

## Overview

While building this ESG dashboard, several tradeoffs were made to keep the project manageable within the given time and scope. The main focus was on building a working full-stack prototype that demonstrates ESG data ingestion, normalization, and dashboard review functionality.

---

## 1. CSV Files Instead of a Database

One major decision was to use CSV files instead of setting up a complete relational database system.

This approach made development faster and allowed easier testing during the ingestion process. Since the assignment mainly focused on handling different ESG data sources, CSV files were sufficient for demonstrating the workflow.

However, in a real enterprise system, a database would be necessary for:
- scalability
- security
- concurrency
- long-term storage
- audit history

This was intentionally simplified for the prototype.

---

## 2. Simplified Upload Workflow

The upload functionality in the dashboard was implemented as a basic file selection workflow instead of a complete ingestion pipeline.

A production-grade ESG system would normally include:
- file validation
- background processing
- schema checks
- duplicate detection
- asynchronous ingestion jobs

These features were not implemented due to time limitations and because the focus was primarily on demonstrating the ingestion concept.

---

## 3. Limited Audit Workflow

The dashboard includes a review button and review-oriented structure, but a complete enterprise audit workflow was not implemented.

Features intentionally not included:
- multi-user approvals
- reviewer comments
- approval history
- row locking
- role-based permissions

The project instead demonstrates the initial review stage in a simplified manner.

---

## 4. Mobile Responsiveness

The application was mainly optimized for laptop and desktop usage.

Although the interface works correctly on desktop browsers, full responsive optimization for mobile devices was not prioritized during development.

This decision was made because the assignment focused more on data modeling and ingestion logic rather than frontend responsiveness.

---

## 5. Real Enterprise Integrations

Actual SAP APIs, utility provider APIs, and travel platform APIs were not connected directly.

Instead, realistic CSV-style sample datasets were created after researching how such exports usually appear in enterprise systems.

This reduced implementation complexity while still allowing the project to simulate realistic ESG ingestion scenarios.

---

## Final Note

The project was intentionally kept focused on:
- ESG data ingestion
- API handling
- dashboard visualization
- deployment workflow

rather than trying to build a fully enterprise-grade ESG platform within a short assignment timeline.