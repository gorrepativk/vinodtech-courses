---
title: Week 4 — BLE Security & Pairing Models
---

# Week 4 — BLE Security & Pairing Models

BLE security failures often happen during **pairing**, not data transfer.

---

## 1. BLE Security Basics

BLE security includes:
- Pairing
- Bonding
- Encryption
- Authentication

---

## 2. BLE Pairing Methods

| Method | Security Level |
|------|---------------|
| Just Works | Low |
| Passkey | Medium |
| Numeric Comparison | High |
| Out-of-band | Highest |

---

## 3. BLE Threats

- Passive eavesdropping
- Active MITM during pairing
- Unauthorized device bonding

---

## 4. Best Practices

- Avoid Just Works for sensitive devices
- Use LE Secure Connections
- Restrict bonding

---

## Week 4 Takeaway

BLE security is strongest when **user interaction validates trust**.