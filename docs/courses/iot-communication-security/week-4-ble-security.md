---
title: Week 4 — Secure OTA Architecture & Rollback Protection
---

# Week 4 — Secure OTA Architecture

OTA updates are the **highest-risk feature** in an IoT device.

A single OTA flaw can compromise an entire fleet.

---

## 1. Core OTA Security Requirements

A secure OTA system must guarantee:
- Authenticity of firmware
- Integrity of firmware
- Version control
- Atomic update behavior

Encryption alone is not sufficient.

---

## 2. Secure OTA Flow

A robust OTA flow typically includes:
1. Server authentication
2. Firmware metadata verification
3. Image download
4. Signature verification
5. Version validation
6. Safe image swap

Every step must fail safely.

---

## 3. Rollback Protection

Rollback attacks reintroduce known vulnerabilities.

Rollback protection requires:
- Monotonic version counters
- Anti-replay logic
- Secure storage of version state

---

## 4. Power Failure Handling

OTA systems must handle:
- Power loss
- Partial downloads
- Corrupt images

Techniques:
- Dual-bank firmware
- Swap-after-verify
- Recovery partitions

---

## Week 4 Takeaway

OTA security is about **resilience**, not just cryptography.