K8.JS — INTERACTION ENGINE README
=================================

K8.js is the official JavaScript runtime for the K8 CSS Framework.
It provides interactive behavior for UI components while remaining lightweight and dependency‑free (except optional jQuery parts).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CORE PURPOSE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
K8.js adds dynamic functionality to the visual components provided by k8.css.

This includes:

✔ Sidebar control
✔ Modal engine
✔ AJAX form handler
✔ Dropdowns
✔ Tabs
✔ Accordion
✔ Toast notifications
✔ Drawer system
✔ Tooltip system
✔ Date formatter (PHP style)
✔ Currency formatters
✔ Loader handling
✔ Drag & move modals
✔ Searchable tables
✔ Dynamic windows
✔ Image previews

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
INSTALLATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Include after k8.css:

<script src="k8.js"></script>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SIDEBAR SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HTML:
<div id="mySidebar"></div>
<div id="myOverlay"></div>

JS:
k8_open()   → Toggle sidebar  
k8_close()  → Close sidebar

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
MODAL SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Auto‑generated modal container.

Open modal via:
<button data-k8-modal="#modal">

Close modal via:
<button data-k8-close>

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FORM HANDLER (AJAX)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

form_handel(
  formId,
  "php_trigger_name",
  callbackFunction,
  "url",
  "success message",
  "error message"
);

Returns "200" from server = success.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DATE FORMATTER (PHP STYLE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

date("d-m-Y H:i:s", epoch, timezoneOffsetMinutes)

Example:
date("d/m/Y", 1700000000)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CURRENCY FORMATTERS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

format.in.format(1000)  → ₹1,000  
format.us.format(1000)  → $1,000  
format.eu.format(1000)  → €1.000  

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TABS SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Container: .k8-tabs

Tab button:
<button data-k8-tab="#panel1">

Panel:
<div data-k8-panel id="panel1">

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACCORDION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Header:
<div class="k8-acc-header">

JS auto toggles .active on parent.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOASTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

k8Toast("Message", "theme", 3000);

Types: theme, green, red, etc.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DRAWER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

k8Drawer("#drawerId");

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOOLTIPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Any element:
<div data-k8-tip="Tooltip text">

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEARCH SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

searchTable(inputElement)  
searchTableDivs(inputElement)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DRAG MODAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

makeDragable(".head");

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LOADER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

.k8-loader fades out automatically on load.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LICENSE ENFORCEMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Footer SHA‑256 is checked. If modified, framework displays license notice.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FRAMEWORK STATUS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

K8 CSS = UI Framework  
K8 JS  = Interaction Engine  

Together they form a complete front‑end framework.

Production Ready.




# K8ight Open Source License (KOSL) v1.0  
## An Extension of the GNU General Public License v3.0  

### Copyright (C) 2025 K8ight Web Services  
### https://k8ight.com  

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version, with additional terms as stated below.  

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.  

You should have received a copy of the GNU General Public License along with this program. If not, see <https://www.gnu.org/licenses/>.  

### Additional Terms (Extending GPL-3.0)  

1. Attribution Requirement  
   All distributions and modifications of this software must include clear and visible attribution to K8ight Web Services.  

2. No Warranty or Liability  
   The software is provided "as is" without any warranty of any kind. K8ight Web Services is not liable for any direct, indirect, incidental, or consequential damages arising from its use.  

3. Trademark and Branding  
   This license does not grant permission to use the K8ight Web Services name, logo, or trademarks without prior written consent.  

4. Compliance with K8ight Policies  
   Use of this software must comply with the policies outlined at <https://k8ight.com/?policy>. Any violation of these policies may result in termination of the license.  

5. Modification and Distribution  
   Modifications are permitted under the same license, provided that:  
   - Modifications are clearly documented.  
   - The source code of modifications is made publicly available.  
   - Any modified versions must not misrepresent their origin.  

6. Patent Use  
   This license includes a grant of rights to use any patents held by K8ight Web Services that are necessary to operate the software.  

For full license terms, refer to the GNU General Public License v3.0 at <https://www.gnu.org/licenses/gpl-3.0.html> and the additional terms at <https://k8ight.com/?policy>.  
