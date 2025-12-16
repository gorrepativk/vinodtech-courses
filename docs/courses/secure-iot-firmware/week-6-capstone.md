---
title: Week 6 — End-to-End Secure IoT Architecture (Capstone)
---

# Week 6 — End-to-End Secure IoT Architecture

Security is not a feature.
It is a **system-level property**.

This week integrates everything you’ve learned.

---

## 1. Components of a Secure IoT System

A complete secure system includes:
- Secure boot
- Device identity
- Encrypted communication
- Secure OTA
- Cloud-side controls

Weakness in any layer compromises the whole system.

---

## 2. Reference Architecture

### Device Side
- ROM-based Root of Trust
- Signed bootloader & firmware
- Encrypted flash (where possible)
- Secure key storage

### Communication
- Mutual authentication (TLS)
- Device certificates or pre-shared keys
- Replay protection

### Cloud Side
- Device provisioning
- Key rotation support
- OTA authorization policies
- Audit logs

---

## 3. Common Real-World Failures

- Same key across all devices
- OTA without rollback protection
- Debug ports left open in production
- No fleet revocation strategy

---

## 4. Security vs Manufacturability

Good designs consider:
- Factory provisioning
- Key injection process
- RMA / repair flows
- End-of-life handling

---

## Final Capstone Assignment

Design a **complete secure IoT architecture** for:

Choose ONE:
- ESP32-based Wi-Fi device
- Cellular IoT device (LTE-M / NB-IoT)
- BLE-connected medical device

Your design must include:
- Threat model summary
- Crypto choices
- Key hierarchy
- OTA flow
- Failure handling

---

## Certification Readiness

If you can confidently design and explain:
- Secure boot
- OTA security
- Key lifecycle
- Cloud trust model

You now operate at a **senior embedded security engineer level**.