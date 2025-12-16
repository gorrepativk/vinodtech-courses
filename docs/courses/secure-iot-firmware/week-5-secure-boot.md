---
title: Week 5 — Secure Boot & Root of Trust
---

# Week 5 — Secure Boot & Root of Trust

Encryption and OTA are meaningless if an attacker can boot arbitrary firmware.

Secure Boot establishes **trust from power-on**.

---

## 1. What is Secure Boot?

Secure Boot ensures that:
- Every firmware stage is authenticated
- Execution only continues if verification succeeds

It forms the **Root of Trust (RoT)**.

---

## 2. Boot Chain in IoT Devices

Typical chain:
1. ROM bootloader (immutable)
2. First-stage bootloader
3. Application firmware

Each stage verifies the **next stage**.

---

## 3. Root of Trust (RoT)

A Root of Trust must be:
- Immutable (ROM / OTP / hardware-backed)
- Minimal
- Verifiable

Common RoT implementations:
- ROM bootloader (ESP32)
- TrustZone Secure World (ARMv8-M)
- Secure Element-based verification

---

## 4. Signature Verification vs Hash Check

❌ Hash-only verification (insecure)  
✅ Public-key signature verification

Common choices:
- ECDSA (P-256)
- Ed25519 (where supported)

---

## 5. Secure Boot Failure Handling

A secure system must define:
- What happens on verification failure?
- Safe mode vs permanent brick
- Recovery path via trusted OTA

---

## Week 5 Assignment

1. Identify the boot chain on your MCU.
2. Answer:
   - Where is the Root of Trust?
   - What key verifies the firmware?
   - Can it be replaced?

➡️ **Next:** [Week 6 — End-to-End Security Architecture](./week-6-capstone)