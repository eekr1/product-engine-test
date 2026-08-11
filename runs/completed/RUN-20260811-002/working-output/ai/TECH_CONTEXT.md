# Trakya Teknik Makine — Tech Context

## 1. Technical Stack Overview

- **Language & Core:** HTML5, CSS3, JavaScript (ES6+ Native Modules)
- **Styling Strategy:** Vanilla CSS3 using CSS Custom Properties (Design Tokens), Flexbox, CSS Grid, and Utility Components. No heavy external frameworks required.
- **Data & Logic Architecture:** Service-Oriented Component Architecture (`DataService` Adapter Pattern).
- **Tooling & Dev Server:** Any static HTTP server or standard dev environment (e.g., Live Server / Vite static preview).

---

## 2. Service & Data Boundary Architecture

```text
+-------------------------------------------------------+
|                UI Presentation Layer                  |
|    (Navbar, Hero, Services, Contact, Responsive Shell) |
+-------------------------------------------------------+
                           |
                           v (consumes interfaces)
+-------------------------------------------------------+
|               DataService Adapter Layer               |
|            (getCompanyInfo, getServices)              |
+-------------------------------------------------------+
                           |
                           v (current environment)
+-------------------------------------------------------+
|                Local Mock Data Adapter                |
|            (src/services/mockDataService.js)          |
+-------------------------------------------------------+
                           |
                           v (future integration)
+-------------------------------------------------------+
|           [Future] Real Backend / REST API            |
+-------------------------------------------------------+
```

---

## 3. Integration Readiness Guidelines

- **Mock Data Isolation:** All mock company data, service descriptions, and contact info reside exclusively in `src/data/companyData.js`.
- **UI Decoupling:** Presentation components call `DataService.getServices()` instead of importing arrays directly into component files.
- **Future Backend Readiness:** When a backend or CMS is introduced in future scope, `DataService` can be updated to fetch data via `fetch('/api/services')` without altering any UI presentation logic.
- **No Invented Endpoints:** No speculative API schemas, database migrations, or authentication tokens are generated in this prototype run.
