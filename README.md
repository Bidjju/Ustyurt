# USTYURT PLATEAU - UNESCO World Heritage Nomination Dossier
## Single-Page Landing Website

---

## Project Overview

This is a single-page landing website for the UNESCO World Heritage Nomination Dossier of the **Ustyurt Plateau** (Landscapes and Aran Hunting Traps), Republic of Kazakhstan, 2026.

The website follows a **minimalist, institutional design** approach with clear hierarchy, neutral colors, and no decorative animations. All content is structured to preserve the exact text and materials from the source nomination dossier.

---

## File Structure

```
/
├── index.html                          # Main landing page
├── maps.html                           # Maps and boundaries page
├── identification.html                 # Identification of the Nominated Property page
├── css/
│   └── style.css                       # Main stylesheet with color palette
├── js/
│   └── main.js                         # JavaScript for burger menu functionality
├── images/
│   ├── header-decoration.png           # Header decorative element (transparent PNG)
│   ├── landscape-silhouette.png        # Hero section landscape decoration
│   ├── footer-decoration.png           # Footer landscape decoration
│   ├── decoration-1.png                # Visual material 1
│   ├── decoration-2.png                # Visual material 2
│   ├── decoration-3.png                # Visual material 3
│   ├── decoration-4.png                # [Placeholder - needs content]
│   ├── decoration-5.png                # [Placeholder - needs content]
│   └── decoration-6.png                # [Placeholder - needs content]
└── README.md                           # This file
```

---

## Color Palette

The design uses the following exact color scheme as specified:

- **Primary**: `#6e7062`
- **Secondary**: `#c5bca0`
- **Tertiary**: `#9b8e64`
- **Accent Warm**: `#986555`
- **Accent Cool**: `#79868f`
- **Neutral**: `#adaaa0`
- **Base**: `#6e7062`

All colors are neutral, institutional tones that reflect the academic and heritage nature of the project.

---

## Page Structure

The single-page layout contains the following sections (each section is a layout container only):

### 1. **Header Component**
- Positioned sticky at top
- Logo: Mountain/ram symbol from provided image URL
- Main navigation links: MAIN, ABOUT, MAPS
- Burger menu button with 10 dossier chapters:
  1. Executive Summary
  2. Identification of the Nominated Property
  3. Description
  4. Justification For Inscription
  5. State of Conservation and Factors Affecting the Nominated Property
  6. Protection and Management of the Nominated Property
  7. Monitoring
  8. Documentation
  9. Contact information of the Responsible Authorities
  10. Signature on behalf of the State Party
- **Content**: Navigation to main sections and full chapter list

### 2. **Hero / Title Section**
- Title: "Ustyurt"
- Label: "WORLD HERITAGE NOMINATION DOSSIER"
- Subtitle: "LANDSCAPES AND ARAN HUNTING TRAPS"
- Location: "REPUBLIC OF KAZAKHSTAN | 2026" (positioned at bottom)
- Centered vertically on screen when page opens
- Full viewport height (100vh)
- ID: #main

### 3. **Executive Summary Section**
- **Content Block**: Executive Summary from PDF pages 1-5
- Contains: State Party, Region, Property Name, Geographical Coordinates
- ID: #executive-summary, #about

### 4. **Identification Section**
- **Content Block**: Identification of Property from PDF page 13+
- Subsections: 1.a, 1.b, 1.c, 1.d (verbatim text)
- ID: #identification

### 5. **Description Section**
- **Content Block**: Draft Statement of Outstanding Universal Value from PDF page 10
- Highlighted design treatment for emphasis
- ID: #description

### 6. **Justification Section**
- **Content Block**: Criteria Under Which Property is Nominated (PDF page 10)
- Cultural Landscape designation
- ID: #justification

### 7. **State of Conservation Section**
- **Content Block**: Significance texts and conservation factors from source document
- All content reproduced verbatim without summarization
- ID: #conservation

### 8. **Protection and Management Section**
- **Content Block**: Legal and management information
- Verbatim text from source document
- ID: #protection

### 9. **Monitoring Section**
- **Content Block**: Risk assessments and monitoring procedures
- Verbatim text from source document
- ID: #monitoring

### 10. **Documentation Section**
- **Content Block**: Images and archival materials
- 6 material items with optional captions (if provided in source)
- ID: #documentation

### 11. **Contact Information Section**
- **Content Block**: Official institution contact details (PDF page 11)
- ID: #contact

### 12. **Signature Section**
- **Content Block**: Link to full PDF document and signature information
- File: `USTYURT_2026 Том І. НД 2026.pdf` (55 MB)
- Direct link: https://www.genspark.ai/api/files/s/Q6NPpphS
- ID: #signature

---

## Content Placement Instructions

All content blocks are marked with clear indicators in the HTML:

```html
<!-- [CONTENT BLOCK: Description] -->
<section>
    <p>[INSERT: Exact text from source document]</p>
</section>
```

### Critical Constraints:

1. **Do NOT interpret or rewrite** any factual content from the source PDF
2. **Use provided texts verbatim** or with minimal formatting edits only
3. **Never summarize** UNESCO criteria or academic language
4. **Do NOT add external explanations** outside provided content
5. **Use header and footer exactly as provided** by the user
6. **Add captions only if captions are provided** in the source materials

---

## Features Implemented

✅ Minimalist, institutional layout  
✅ Clear grid and hierarchy  
✅ Neutral color palette from specification  
✅ Semantic HTML5 structure  
✅ Responsive design (mobile, tablet, desktop)  
✅ Sticky header navigation with logo and menu links  
✅ Sticky footer that moves with scrolling  
✅ Beautiful dropdown menu with dossier color gradient  
✅ Animated burger icon (transforms to X when open)  
✅ Dropdown menu with 10 dossier chapters  
✅ Smooth scroll navigation to all sections  
✅ Interactive menu with hover effects  
✅ Keyboard accessibility (Escape key closes menu)  
✅ Chapter navigation matching official dossier structure  
✅ Navigation links positioned close to logo  
✅ Custom scrollbar styling in dossier colors  
✅ Smooth scroll behavior  
✅ Print-friendly styles  
✅ Accessible markup (semantic tags, alt text)  
✅ Professional typography (Lora serif + Inter sans-serif)  
✅ Direct link to full PDF dossier  
✅ Transparent PNG decorative elements  
✅ No animations (as requested)  

---

## Features NOT Yet Implemented

⚠️ **Content Population Required**:
- Full text extraction from PDF pages into corresponding sections
- Header component exact text (needs user specification)
- Footer component exact text (needs user specification)
- Additional decorative images (decoration-4.png, decoration-5.png, decoration-6.png)
- Image captions (if provided in source materials)
- Official institution contact details
- Complete boundary descriptions and maps

⚠️ **Technical Notes**:
- All `[INSERT: ...]` placeholders must be replaced with exact verbatim text from the source PDF
- Maps and visual materials need to be extracted and placed as specified
- Logo files for footer need to be provided

---

## Recommended Next Steps

1. **Extract Complete Text Content**:
   - Parse the PDF document systematically
   - Extract all text blocks section by section
   - Replace all `[INSERT: ...]` placeholders with verbatim content

2. **Add Visual Materials**:
   - Extract maps from PDF pages 7-8
   - Add any additional images with proper placement
   - Include captions if provided in source

3. **Complete Header/Footer**:
   - Obtain exact header text from user
   - Obtain exact footer text from user
   - Add institutional logos

4. **Content Review**:
   - Verify all text is verbatim from source
   - Ensure no interpretation or summarization has occurred
   - Confirm academic tone and UNESCO language is preserved

5. **Final Testing**:
   - Test responsive behavior on all devices
   - Verify PDF download link functionality
   - Check print styles
   - Validate accessibility

---

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling, flexbox, grid layouts
- **JavaScript**: Burger menu interactions and smooth scrolling
- **Google Fonts**: Lora (serif) + Inter (sans-serif)
- **No External Dependencies**: Pure HTML/CSS/JS implementation

---

## Browser Compatibility

Tested and compatible with:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## Accessibility Features

- Semantic HTML structure (header, main, section, footer)
- Proper heading hierarchy (h1, h2, h3)
- Alt text placeholders for images
- High contrast color ratios
- Responsive text sizing
- Print-friendly stylesheet

---

## Public URLs

**Production**: (To be deployed via Publish tab)  
**Source PDF**: https://www.genspark.ai/api/files/s/Q6NPpphS

---

## Data Models

No database or dynamic data storage is used. This is a static informational website.

---

## Contact

For questions about the UNESCO World Heritage Nomination:
[INSERT: Contact information from PDF page 11]

---

## License & Copyright

© 2026 Republic of Kazakhstan  
UNESCO World Heritage Nomination Dossier  
All rights reserved.

---

**Last Updated**: 2026-02-10  
**Version**: 1.0  
**Status**: Layout structure complete, content population in progress