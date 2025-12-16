---
title: Week 2 — TLS Fundamentals for Embedded Devices
---

# Week 2 — TLS Fundamentals for Embedded Devices

TLS is the backbone of secure IoT communication — but **misuse is common**.

---

## 1. What TLS Actually Provides

TLS ensures:
- Confidentiality
- Integrity
- Server authentication
- Optional client authentication

TLS does **not** fix:
- Weak credentials
- Poor certificate handling
- Broken trust models

---

## 2. TLS Handshake (Simplified)

The handshake establishes:
- Cryptographic algorithms
- Session keys
- Trust validation

In embedded systems, handshake cost matters:
- CPU usage
- RAM usage
- Latency

---

## 3. Certificates vs Pre-Shared Keys

### Certificates
- Scalable
- Strong identity
- Higher memory footprint

### Pre-Shared Keys (PSK)
- Lightweight
- Harder to rotate at scale
- Risky if reused

---

## 4. Common Embedded TLS Mistakes

❌ Skipping certificate validation  
❌ Accepting any server certificate  
❌ Reusing keys across devices  

---

## Week 2 Takeaway

TLS is secure **only when identity verification is enforced**.