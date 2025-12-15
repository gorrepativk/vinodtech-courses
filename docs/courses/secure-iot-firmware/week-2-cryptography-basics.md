---
title: Week 2 — Cryptography Basics for Embedded Systems
---

# Week 2 — Cryptography Basics for Embedded Systems

Cryptography in embedded systems is about **trade-offs**, not perfection.

---

## 1. What Encryption Actually Protects

Encryption protects:
- Data confidentiality
- Data integrity (with MAC / AEAD)

It does **NOT** protect:
- Bad key management
- Compromised bootloaders
- Insecure update logic

---

## 2. Symmetric vs Asymmetric Crypto

| Type | Use in IoT |
|----|-----------|
| AES | Fast, efficient, common |
| ChaCha20 | Better for MCUs without AES HW |
| RSA | Rarely used on-device |
| ECC | Device identity, key exchange |

---

## 3. AEAD is Non-Negotiable

Always prefer:
- **AES-GCM**
- **ChaCha20-Poly1305**

Avoid:
- Plain AES-CBC
- Custom crypto

---

## 4. Random Numbers Matter

Most embedded security failures happen because:
- RNG is predictable
- Seed is reused
- No entropy source

---

## Week 2 Assignment

- List cryptographic algorithms supported by your MCU
- Identify:
  - Hardware accelerators
  - True RNG availability