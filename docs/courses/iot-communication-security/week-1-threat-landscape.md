---
title: Week 1 — IoT Communication Threat Landscape
---

# Week 1 — IoT Communication Threat Landscape

In IoT systems, communication security failures scale rapidly.
A single weakness can expose **thousands or millions of devices**.

---

## 1. Why Communication Security is Critical

IoT devices continuously exchange:
- Sensor data
- Control commands
- Firmware updates
- Credentials

Any compromise during transmission can lead to:
- Data leakage
- Device impersonation
- Remote takeover
- Fleet-wide compromise

---

## 2. Common IoT Communication Channels

| Channel | Typical Use |
|------|------------|
| Wi-Fi | High-throughput IoT devices |
| Ethernet | Industrial IoT |
| BLE | Wearables, peripherals |
| Cellular (LTE-M / NB-IoT) | Remote & low-power devices |
| LPWAN | Long-range sensors |

Each channel has **unique threat characteristics**.

---

## 3. Attacker Capabilities

Attackers may have:
- Local network access
- Rogue access points
- Protocol-level knowledge
- Cloud endpoint visibility

Security designs must assume **active attackers**, not passive listeners.

---

## 4. Common Communication Attacks

- Man-in-the-middle (MITM)
- Replay attacks
- Protocol downgrade
- Device impersonation
- Weak authentication bypass

---

## Week 1 Takeaway

Communication security must be designed **end-to-end**, not per protocol.