# SAHYOG Tax & Finance Advisory - Digital Business Card Design Guidelines

## Design Approach
**LinkedIn-Inspired Professional Business Card** - A modern, single-page digital business card mimicking LinkedIn's profile layout with professional corporate aesthetics, optimized for sharing and mobile accessibility.

## Color Palette
- **Primary**: Sky Blue (#87CEEB and gradients)
- **Accent**: Dark Blue (for text and secondary elements)
- **CTA Highlight**: Subtle Red for call-to-action buttons
- **Backgrounds**: White with subtle shadows
- **Text**: Dark blue/charcoal for body, white for contrast on colored backgrounds

## Layout Structure

### Header/Banner Section
- **Banner**: Sky blue gradient background (full-width, 200-250px height)
- **Profile Picture**: Circular (150-200px diameter) with white border (6-8px), positioned to overlap banner by 50%
- **Company Logo**: "SAHYOG" with tagline "TAX & FINANCE ADVISORY LIMITED" prominently displayed
- **Tagline**: "The Simplest way to Register and manage your Business in India"
- **Contact Bar**: Phone (+91-8888004466) and Email (info@sahyog.in) with clickable icons, positioned below profile

### Services Section - Two-Category System

**Category 1: Business Registration Services** (8 services)
- Private Limited Company Registration
- OPC Registration
- LLP Registration
- Public Limited Company Registration
- Partnership Firm Registration
- Proprietorship Firm Registration
- Section 8 Company (NGO) Registration
- Farmer Producer Company Registration

**Category 2: Business Support Services** (16 services)
- PAN, TAN, GST Registration
- Udyam (MSME) Registration
- Shop Act/Gumasta Registration
- Startup India Registration
- IEC Registration
- Digital Signature Certificate
- PTRC, ESI, LEI Registration
- Sec 8 Audit & Compliances
- 12A, 80G, NITI Ayog, CSR Registration

**Service Card Design**:
- Grid layout: 3 columns desktop, 2 tablet, 1 mobile
- White background with subtle shadow (0 2px 8px rgba(0,0,0,0.1))
- Relevant icon per service (top of card, 48px, sky blue color)
- Hover state: Elevate card (transform translateY(-4px)), add sky blue border (2px)
- Use accordion/tabbed interface for category organization

### Interactive Features Section
**Share & Action Buttons**:
- "Share Card" - generates unique shareable link
- Social sharing: WhatsApp, LinkedIn, Email icons (circular, 40px)
- "Download vCard" - saves contact to device
- "Book Consultation" / "Enquire Now" CTAs (red/sky blue, prominent placement)
- QR Code display (150x150px, right sidebar or dedicated section)

### Footer Section
- **Quick Links**: Contact Us, Blogs, Careers (horizontal navigation)
- **Social Media Icons**: LinkedIn, WhatsApp, Email (40px, sky blue on hover)
- **Professional Tagline**: "Turn your business idea into reality with us. Begin your journey as a business owner with us – From business planning to Business Management"
- **Description**: Complete solution text for Individual, social & business entities

## Typography
- **Font Family**: Inter, Roboto, or Poppins (via Google Fonts)
- **Hierarchy**:
  - H1 (Company Name): 32-36px, bold
  - H2 (Tagline): 20-24px, medium
  - H3 (Section Titles): 24-28px, semibold
  - Service Cards: 16-18px, medium
  - Body Text: 14-16px, regular
  - Contact Info: 16px, medium

## Spacing System
Use Tailwind units: 2, 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 to py-24
- Card padding: p-6
- Card gaps: gap-6 (grid)
- Button padding: px-8 py-3

## Component Specifications

### Profile Picture
- Circular shape with white border
- Positioned: -50px top margin to overlap banner
- Box shadow: 0 4px 12px rgba(0,0,0,0.15)

### Service Cards
- Border radius: 12px
- Transition: all 0.3s ease
- Icon container: 64px circle, light sky blue background
- Title: Dark blue, 18px, semibold
- Spacing: Icon top, title below (mt-4), description (mt-2)

### CTA Buttons
- Primary (Red): Solid background, white text, rounded-lg
- Secondary (Sky Blue): Solid background, white text, rounded-lg
- Hover: Slight darkening (10%), transform scale(1.02)
- No blur backgrounds needed (not on images)

### Share Buttons
- Circular (40px)
- Icon-only design
- Sky blue background
- White icons
- Hover: Dark blue background

## Animations & Interactions
- Page load: Fade-in sections sequentially (0.1s stagger)
- Cards: Smooth hover elevation (0.3s ease)
- Buttons: Scale and color transitions (0.2s)
- Scroll: Smooth scrolling behavior
- Category expand/collapse: Smooth height transition (0.4s)

## Responsive Behavior
- **Desktop (1024px+)**: Full layout, 3-column service grid
- **Tablet (768-1023px)**: 2-column service grid, maintained spacing
- **Mobile (<768px)**: Single column, stacked elements, reduced padding (py-8 to py-12)

## Technical Features
- Single-page application structure
- Dark mode toggle (optional enhancement)
- WhatsApp integration with pre-filled message
- Meta tags for social media sharing
- QR code generation linking to unique URL
- Print-friendly CSS media queries

## Images
No large hero images required - the banner gradient and profile picture provide visual hierarchy. Focus on service icons (use icon library like Heroicons or Font Awesome for business/document/registration themed icons).