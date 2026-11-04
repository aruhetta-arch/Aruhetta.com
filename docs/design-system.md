Aruhetta — Design System

Document Version: 1.0
Project: Aruhetta
Status: Planned

1. Design Philosophy

Aruhetta uses a Modern Minimalist visual style with elegant details.

Design principles:

- Clean and organized layouts.
- Consistent visual hierarchy.
- Comfortable reading experience.
- Subtle animations and transitions.
- Responsive across mobile, tablet, and desktop.
- Accessible and easy to navigate.

2. Color System

Primary Palette

Color| Hex| Usage
Soft Blue| #A9CFF5| Soft backgrounds and accents
Sky Blue| #55A9ED| Primary accent
Deep Blue| #174A83| Strong accents and emphasis

Light Theme

- Main background: White.
- Secondary background: Light gray.
- Text: Dark gray or near-black.
- Accent: Sky Blue.
- Borders: Subtle gray.

Dark Theme

- Main background: Near-black.
- Secondary background: Dark gray.
- Text: White or light gray.
- Accent: Sky Blue.
- Borders: Subtle dark gray.

Color Guidelines

- Blue is the primary accent.
- Monochrome colors provide visual balance.
- Gradients are used sparingly.
- Maintain readable contrast.

3. Typography

Primary Font

Plus Jakarta Sans.

Fallback

System sans-serif fonts.

Typography Weights

Element| Weight
Main headings| Bold
Section headings| Bold
Subtitles| Medium
Body text| Regular
Navigation| Medium
Metadata| Regular

Typography should remain readable and consistent across screen sizes.

4. Iconography

Icon library: Lucide Icons.

Guidelines:

- Outline icon style.
- Consistent icon sizing.
- Theme-aware icon colors.
- Accessible labels for icon-only buttons.
- Avoid unnecessary decorative icons.

5. Layout System

General Layout

- Mobile-first development.
- Centered content containers.
- Consistent section spacing.
- Responsive grid and flex layouts.
- Full-width hero section.
- Main content sections use a centered maximum width.

Responsive Breakpoints

Initial reference values:

Device| Width
Mobile| Up to 767px
Tablet| 768px–1023px
Desktop| 1024px and above

Components should adapt naturally between breakpoints.

6. Header

- Height: 64px.
- Static positioning.
- Hamburger menu on the left.
- Centered logo.
- Profile icon on the right.
- Solid theme-aware background.
- Outline icons.
- No bottom divider.

7. Sidebar

- Overlay from the left.
- Desktop width: 280px.
- Responsive mobile width.
- Background overlay dims the page.
- Main content does not shift.
- Smooth opening and closing transitions.
- Approximate transition duration: 300ms.

Navigation items:

- Home
- About
- Arumunity
- Tools
- Dark/Light Mode

8. Components

Buttons

- Primary: Rounded.
- Secondary: Sharper corners.
- Icon buttons: Circular.
- Navigation buttons: Adaptive.

Cards

- Rounded corners.
- Subtle borders.
- Consistent internal spacing.
- Clear information hierarchy.

Forms

- Clear labels.
- Visible focus states.
- Validation feedback.
- Consistent field spacing.

Modals and Toasts

- Clear visual hierarchy.
- Accessible controls.
- Smooth transitions.
- Appropriate feedback states.

9. Home Page Visual Guidelines

Hero Banner

- Medium height, approximately 320px on desktop.
- Rounded corners.
- Mixed photography.
- Automatic slider.
- Five-second slide interval.
- Slide transition.
- Arrow and indicator controls.
- Bottom gradient overlay.
- Dynamic text and actions.

Quick Access

- Minimalist rounded cards.
- Outline icons.
- Horizontal scrolling.
- Swipe and arrow navigation.

Latest Updates

- Horizontal card layout.
- Subtle surface background.
- Minimalist card presentation.

Community Preview

- Detailed discussion cards.
- Title, category, username, snippet, reply count, and date.
- Horizontal scrolling.

Featured Content

- One large featured card.
- Smaller supporting cards.
- Mixed articles, media, and community content.

10. Motion and Interaction

- Standard transition duration: approximately 300ms.
- Subtle hover color changes.
- Smooth sidebar transitions.
- Minimal animation.
- No excessive glow effects.
- Respect reduced-motion preferences.

11. Theme System

Supported themes:

- Light.
- Dark.

Behavior:

- First visit follows device preference.
- Users can manually change themes.
- Remember the last selected theme.
- Apply theme consistently across pages.
- Use smooth global transitions.

12. Accessibility

- Readable text contrast.
- Keyboard navigation.
- Visible focus indicators.
- Screen-reader labels.
- Image alternative text.
- Accessible interactive controls.
- Reduced-motion support.

13. Design Tokens

Design tokens should be centralized in CSS variables.

Examples:

:root {
  --color-soft-blue: #A9CFF5;
  --color-sky-blue: #55A9ED;
  --color-deep-blue: #174A83;

  --font-primary: "Plus Jakarta Sans",
    sans-serif;

  --header-height: 64px;
  --sidebar-width: 280px;

  --transition-standard: 300ms;
}

Theme-specific tokens should be defined separately for light and dark modes.

14. Design System Status

This document defines the planned visual standards for Aruhetta.

Exact spacing scales, component dimensions, and additional color tokens may be refined during implementation.
