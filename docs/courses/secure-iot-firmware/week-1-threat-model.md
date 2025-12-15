---
title: Week 1 — Threat Modeling for IoT Devices
---

# Week 1 — Threat Modeling for IoT Devices

Security failures in IoT rarely happen because encryption was weak.
They happen because **the system was not designed with threats in mind**.

This week builds the foundation.

---

## 1. What is Threat Modeling?

Threat modeling is the process of:
- Identifying **assets**
- Defining **attack surfaces**
- Understanding **who the attacker is**
- Anticipating **how the system can be abused**

---

## 2. Typical IoT Assets

| Asset | Why it matters |
|-----|---------------|
| Firmware | Can be reverse-engineered or modified |
| Encryption keys | Lead to full device compromise |
| OTA mechanism | Used to push malicious firmware |
| Cloud credentials | Can compromise entire fleet |

---

## 3. Trust Boundaries in IoT

A typical IoT system has multiple trust zones:

- Device firmware
- Bootloader
- External flash
- Network communication
- Cloud backend

Any boundary crossing is a **potential attack point**.

---

## 4. Common IoT Attack Vectors

- Physical access (UART, JTAG, SWD)
- Firmware extraction
- Replay attacks
- Man-in-the-middle OTA updates
- Cloud credential leakage

---

## 5. STRIDE Model (Simplified)

| Threat | Example |
|------|--------|
| Spoofing | Fake cloud server |
| Tampering | Modified firmware |
| Repudiation | No audit trail |
| Information Disclosure | Key leakage |
| Denial of Service | OTA brick |
| Elevation of Privilege | Bootloader bypass |

---

## Week 1 Assignment

1. Draw a block diagram of an IoT device you’ve worked on.
2. Identify:
   - Assets
   - Trust boundaries
   - At least **5 realistic threats**

➡️ **Next:** [Week 2 — Cryptography Basics](./week-2-cryptography-basics)