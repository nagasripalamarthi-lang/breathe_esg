# Sources and Research Notes

## Overview

Before creating the datasets and dashboard structure, research was done to understand how ESG-related data is commonly handled in real enterprise environments.

The goal was to avoid creating unrealistic toy datasets and instead simulate practical data formats that companies may actually use.

---

# 1. SAP Fuel and Procurement Data

## Research Done

Research was done on how SAP systems export procurement and operational data.

Typical formats observed:
- flat CSV exports
- Excel exports
- IDoc structures
- ERP-generated procurement reports

SAP exports were found to contain:
- inconsistent column names
- material descriptions
- supplier information
- plant/location codes
- quantity and unit fields
- date formatting inconsistencies

---

## What Was Implemented

For this project, a simplified CSV-style SAP export was chosen.

The sample data includes:
- material names
- fuel categories
- procurement quantities
- units
- supplier information
- dates

This format was selected because it is realistic for internal operational exports while remaining manageable for a prototype.

---

## Real-World Limitations

In a real deployment:
- unit conversion issues would be more complex
- supplier mapping may require lookup tables
- SAP integrations may involve authentication and APIs
- inconsistent localization settings could affect parsing

---

# 2. Utility Electricity Data

## Research Done

Research was done on how facilities teams typically obtain electricity consumption data.

Common formats observed:
- utility portal CSV exports
- downloadable billing reports
- PDF utility invoices
- meter-level consumption reports

Electricity datasets usually contain:
- billing periods
- meter IDs
- consumption units
- tariff information
- usage dates

---

## What Was Implemented

The project uses CSV-style electricity data containing:
- meter readings
- usage values
- billing dates
- electricity units

CSV format was selected because it is one of the most practical export formats used by facilities teams.

---

## Real-World Limitations

In production systems:
- billing cycles may not align with reporting periods
- multiple facility meters may exist
- utility formats vary between providers
- missing meter readings can affect calculations

---

# 3. Corporate Travel Data

## Research Done

Research was done on travel management platforms such as:
- Concur
- Navan
- corporate booking systems

Travel exports commonly contain:
- flight details
- hotel stays
- airport codes
- travel classes
- trip dates
- transport categories

Some systems provide full travel distances, while others only provide departure and destination codes.

---

## What Was Implemented

The project includes simplified travel CSV data containing:
- employee travel records
- travel categories
- dates
- locations
- transport information

This was designed to simulate a practical corporate travel export.

---

## Real-World Limitations

Real deployments may face issues such as:
- incomplete distance information
- inconsistent airport codes
- duplicate travel entries
- missing hotel emission data
- integration rate limits from travel APIs

---

# Overall Learning

This research process helped improve understanding of:
- ESG reporting workflows
- enterprise data inconsistencies
- ingestion challenges
- normalization requirements
- full-stack ESG dashboard design

The final prototype was designed to balance realism with manageable implementation complexity for the assignment timeline.