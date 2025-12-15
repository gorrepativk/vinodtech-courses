---
title: Week 4 — Secure OTA Architecture
---

# Week 4 — Secure OTA Architecture

OTA is the **highest-risk** feature in any IoT device.

---

## 1. Minimum OTA Security Requirements

- Firmware authenticity verification
- Version control
- Rollback protection
- Atomic update

---

## 2. Secure OTA Flow

1. Device authenticates server
2. Firmware metadata verified
3. Image downloaded
4. Signature verified
5. Version checked
6. Swap performed safely

---

## 3. Common OTA Failures

- No rollback protection
- Power loss during update
- Weak versioning logic

---

## Final Assignment

Design a secure OTA flow for:
- ESP32 / STM32 / Nordic
Include:
- Crypto choice
- Key placement
- Failure handling