# 🌐 Streamline IPv6 Standortvernetzung – Netzwerk-Demonstrator

Dieses Projekt simuliert eine vollständige IPv6-basierte Standortvernetzung für die Firma Streamline mit vier Standorten: Hamburg, Lübeck, Berlin und München. Es dient der Planung, Umsetzung und Dokumentation der Migration von einem IPv4/NAT-Netzwerk auf ein modernes IPv6-only Netzwerk in Cisco Packet Tracer.

---

## 🚀 Zielsetzung

- Aufbau eines vollständig IPv6-basierten Unternehmensnetzwerks ohne NAT
- Nutzung von Provider Independent Adressen (PI-Space: `2001:db8::/32`)
- Interne Routingverbindungen mit Unique Local Addresses (`fd00::/8`)
- VLAN-Trennung und Subnetting an jedem Standort
- Zentrale Dokumentation und Konfigurationssammlung

---

## 📦 Projektstruktur

├── /dokumentation → Technische Doku, Netzpläne, Adressübersicht
├── /konfiguration → Router- und Switch-Configs (.txt)
├── /packet-tracer → .pkt-Datei(en) für den Netzwerk-Demonstrator
├── README.md → Diese Projektübersicht
└── /tools → Adressplanung, Skripte, ggf. DHCPv6/Tests

---

## 🛠 Genutzte Tools

- Cisco Packet Tracer
- Trello (Aufgaben-Management)
- GitHub (Versionierung)
- Webex (Kommunikation)
- Google Docs (Wissensbasis)

---

## 🧠 Begriffe

| Begriff     | Erklärung |
|-------------|-----------|
| **PI-Space** | Provider-unabhängiger IPv6-Adressblock (2001:db8::/32) |
| **ULA**      | Unique Local Address (`fd00::/8`), intern geroutet |
| **IPv6**     | 128-Bit Adressformat ohne NAT, ideal für moderne Netzwerke |

---

## 🔧 Konfigurationsziele

- ✅ IPv6-Only – kein Dual Stack
- ✅ VLANs & Subnetting pro Standort
- ✅ Statische IPv6-Routen zwischen Standorten
- ✅ SSH-Zugänge auf Routern und Switches
- ✅ IPv6 Default Routes auf L3-Switches
- ✅ Beschreibung aller Schnittstellen (description)
- ✅ Passwortschutz & Login-Banner

---

## 🗺️ Standorte & VLANs

| Standort  | VLANs / Funktion                   |
|-----------|-------------------------------------|
| Hamburg   | VLAN 10 (Office), VLAN 20 (Server) |
| Lübeck    | VLAN 30 (Office), VLAN 40 (Server) |
| Berlin    | VLAN 50 (Server)                   |
| München   | VLAN 60 (Server)                   |

---

## 📝 Teamvereinbarungen

- 🔁 Änderungen nur nach Tests in der .pkt-Datei
- ✅ Commits mit Kommentar & Versionsnummer
- 💬 Wöchentliches Meeting: Mittwoch, 13:00 Uhr (Webex-Link im Trello)
- 📄 Dokumentation als HTML-Seite im internen Webserver

---

## 👥 Team

| Name            | Rolle                   |
|-----------------|-------------------------|
| Kenza Nabaghi   | Netzwerkplanung         |
| Mohammed Slassi | Konfiguration + Tests   |
|Dhiya Benkhemila | Doku + Adressmanagement |
|Yunus Albayark   |                         |

---

## 📂 Dateidownloads

- 📎 [Packet Tracer Simulation](./packet-tracer/streamline-v6.pkt)
- 📄 [IP-Adressmanagement (CSV)](./tools/adressen.csv)
- 🌐 [HTML-Doku (lokal auf Webserver)](./dokumentation/index.html)

---

## 📣 Hinweis

Dieses Projekt dient rein zu Simulations- und Lernzwecken im Rahmen der Abschlussaufgabe im Lernfeld 11 (Netzwerkdienste in Unternehmen).

