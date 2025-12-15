---
title: Week 3 — Secure Key Storage & Management
---

# Week 3 — Secure Key Storage & Management

> If an attacker gets the key, encryption is irrelevant.

---

## 1. Where NOT to Store Keys

❌ Firmware source  
❌ Plain flash  
❌ External memory  

---

## 2. Better Key Storage Options

- Secure Element (ATECC, SE050)
- MCU TrustZone
- Encrypted flash with device-unique key

---

## 3. Device Identity vs Session Keys

- Device Identity → long-lived
- Session Keys → rotated frequently

---

## 4. Key Rotation Strategy

Good systems assume:
- Keys **will leak**
- Rotation must be supported

---

## Week 3 Assignment

- Identify all keys in your system
- Classify them:
  - Static / Rotating
  - Device / Fleet