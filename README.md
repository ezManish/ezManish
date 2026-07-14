<div align="center">
  <table border="0" cellpadding="8" cellspacing="0" width="100%" style="border-collapse: collapse; font-family: monospace; border: 1px solid #3c3c3c; box-sizing: border-box;">
    <!-- Header Bar -->
    <tr bgcolor="#1e1e1e">
      <td colspan="4" style="color: #ffffff; padding: 12px; font-weight: bold; border-bottom: 2px solid #ff6c37; font-size: 14px;">
        ORANGE REST CLIENT v1.1 — ACTIVE SESSION
      </td>
    </tr>
    <!-- Address Bar -->
    <tr bgcolor="#2d2d2d">
      <td width="12%" align="center" style="padding: 12px;">
        <b style="color: #4CAF50; font-size: 13px;">GET</b>
      </td>
      <td width="58%" style="color: #a6e22e; padding: 12px; font-size: 13px;">
        <code>https://api.ezmanish.dev/v1/profile</code>
      </td>
      <td width="10%" align="center" bgcolor="#ff6c37" style="padding: 12px;">
        <span style="color: white; font-weight: bold; display: block; font-size: 12px;">SEND</span>
      </td>
      <td width="20%" align="center" style="color: #4CAF50; padding: 12px; font-size: 12px; font-weight: bold;">
        <code>Status: 200 OK</code>
      </td>
    </tr>
    <!-- Navigation Tabs -->
    <tr bgcolor="#252526">
      <td colspan="4" style="padding: 10px; border-bottom: 1px solid #3c3c3c; font-size: 12px;">
        &nbsp;&nbsp;<a href="README.md" style="color: #ff6c37; font-weight: bold; border-bottom: 2px solid #ff6c37; padding-bottom: 4px; text-decoration: none;">1: GET /profile</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="docs/projects.md" style="color: #888888; text-decoration: none;">2: GET /projects</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="docs/skills.md" style="color: #888888; text-decoration: none;">3: GET /skills</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="docs/play-game.md" style="color: #888888; text-decoration: none;">4: GET /play-game</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="docs/contact.md" style="color: #888888; text-decoration: none;">5: POST /contact</a>
      </td>
    </tr>
  </table>
</div>


<br/>

**Response Body (application/json):**

```json
{
  "status": "success",
  "data": {
    "developer": "Manish Kumar",
    "codename": "ezManish",
    "role": "Backend Systems Engineer",
    "location": "India",
    "core_doctrine": "Simplicity is the soul of efficiency.",
    "current_focus": "Mastering distributed backend architecture",
    "active_threads": [
      "Aegis (AI Women's Safety System)",
      "CuratiX Vault (Enterprise Hackathon Boilerplate)"
    ]
  }
}
```

### Server Infrastructure Telemetry
* **Runtime Environment:** `Java SE / JVM`
* **Framework:** `Spring Boot (REST APIs, Security, Data JPA)`
* **Primary Database:** `MySQL`
* **Active Deployments:** `Render`
* **System Load:** `STABLE (High Intentionality)`
