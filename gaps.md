# Gaps: facts to confirm before anything ships
**Date:** November 23, 2026
**Rule:** nothing listed here may be published as fact until Cisco confirms it. Items marked TODO in the HTML drafts map to this list.

## Blocking (must resolve before the pages go live)

1. **Photos.** RESOLVED Nov 23: Cisco shared two Drive folders with the updated enhanced photos (17 per unit). Folder 1 = Coastal Blue #301 (navy walls, queen bed); Folder 2 = Driftwood #302 (warm caramel tones, king bed, balcony shot named "Apt 302"). Originals downloaded to `photos-originals/folder1` and `folder2`. 11 photos compressed to JPEG, all 158-184 KB at q82-85, in `photos/`: Coastal Blue living-room, balcony (living-room shot showing the balcony sliders; no standalone balcony photo was in the set), bedroom, kitchen, bathroom; Driftwood living-room, balcony (real balcony shot), bedroom, workspace, bathroom, kitchen (extra, not in the page grid). The `photos/` folder holds only the compressed files that ship to the repo.
2. **Vrbo URLs.**
   - Coastal Blue Vrbo property 139375451 is still a DRAFT. Its button is a disabled "Coming Soon" placeholder. Do not link it until the listing is published and its public URL is confirmed.
   - Driftwood has no Vrbo listing yet. Its button is also a disabled placeholder. Do not add a Vrbo button until a listing is created, published, and its public URL is confirmed.
3. **Nightly rates.** RESOLVED Nov 23: no pricing on the site, per Cisco. No price appears anywhere; priceRange removed from all JSON-LD.
4. **Bathroom counts.** RESOLVED Nov 23: 1 bathroom each for #301 and #302 (Coastal Blue verified 1 bath on Airbnb; the five units are four 1BR + one 2BR). Unit 404 is a 2BR/2BA (Cisco, Nov 23) — record for its future page.
5. **Driftwood amenities.** RESOLVED Nov 23: Cisco confirmed all amenities are in the space. Full kitchen, washer/dryer, Smart TVs, high-speed Wi-Fi, and beach gear added to the Driftwood page and its JSON-LD.
6. **Reviews as testimonials.** Cisco, Nov 23: add reviews as testimonials. The quotes on both pages (Chyaurah, Ryan, Mi'Kaela) are presented as guest testimonials. Count verified: 7 reviews at 5.0 on the Airbnb host profile as of Nov 23, 2026 (Coastal Blue listing displays 3: Mayra, Chyaurah, Jose Miguel). Drafts now say seven.

## Accuracy flags (do NOT put these on the site until verified)

7. **Parking.** The Airbnb listings claim an "assigned parking space" / "free parking space with EV charging." Building management's rule is first come, first served, one hang tag per unit, nightly towing patrol. These drafts use the building rule only. Do not repeat the assigned-space claim.
8. **Rooftop lounge / BBQ.** The Airbnb listings claim rooftop lounge and BBQ access. Rooftop/BBQ confirmation from management was still awaited as of Nov 7, and the rooftop pool is not open. These drafts say the pool is not open and make no rooftop claim.
9. **Fitness center at "sister building, Wesley Fillmore."** The Driftwood Airbnb listing mentions gym access at Wesley Fillmore (about a 4-minute drive). This was not in the verified audit facts and fob programming for Fillmore was still awaited. These drafts do not claim gym access.
10. **Elevator.** Out of service since Nov 18 with no return date. These drafts say "stairs to the 3rd floor until further notice" (Coastal Blue, Driftwood) and "stairs to the 4th floor" for Miami Modern, which is on the top floor. Someone must update all four pages the day it returns.
11. **Pet fee.** $30/day for 1 dog up to 35 lbs is per the Airbnb listings. The $1,000 smoking/partying fine mentioned in the Driftwood Airbnb listing text was deliberately left off the website; decide whether it belongs on the site or only in the booking flow.

## Decisions for Cisco

12. **Address display.** RESOLVED Nov 23: neighborhood only for now, per Cisco. Exact address removed from both property pages and all JSON-LD; pages now say "Downtown Hollywood, near Young Circle."
13. **Direct booking.** Hospitable Direct widget (Premium 7% hands-off vs Basic 1% + Stripe) is not included in these drafts. Decide Premium vs Basic vs OTA-only before adding a "Book Direct" button.
14. **Geo coordinates.** The JSON-LD uses approximate coordinates for 2037 Jackson St (26.0114, -80.1495). Confirm or replace with the exact pin before publishing.
15. **Google Business Profile, Search Console, Analytics.** None confirmed. The SEO pack assumes they will be set up; the sitemap needs submitting to Search Console after deploy.
16. **Favicon.** No favicon file exists on the site. Export the Leon logo as favicon.ico (plus a 180×180 apple-touch-icon) and reference it on every page.
17. **Social profiles.** No business Instagram/Facebook confirmed. The JSON-LD `sameAs` array is empty on purpose; add profile URLs if they exist.
18. **"From" pricing and taxes.** If a price is shown later, confirm whether it is the Airbnb nightly rate, whether cleaning fees and taxes are extra, and whether Vrbo pricing matches (Vrbo commission changed Oct 29, 2026).

## Miami Modern #401 (new page, Nov 23, 2026)

Page built from the 21-photo "apt 401" Drive folder (owned by adnancharamand@gmail.com). Originals in `photos-originals/apt401/`; 6 compressed to JPEG, all 172-184 KB, in `photos/` (miami-modern-401-living-room, balcony [living-room shot showing the balcony sliders; no standalone balcony photo in the set], bedroom, kitchen, bathroom, coffee-bar [extra, not in the page grid]). Page uses only facts verified from the photos, the Airbnb unlisting email, and LHG-wide rules. The following are NOT on the page and need Cisco's answers before they go on:

19. **Bed configuration.** Airbnb says "2 beds, 1 bedroom" but not the sizes or layout. Bedroom bed size unknown; whether the living-room sofa is a sofa bed is unknown. No "Sleeps N" number is stated anywhere for 401 (page says "2 beds" only; JSON-LD has no occupancy or bed details).
20. **Bathroom count.** Page says 1 bathroom based on the photo set (one bathroom shown: double vanity, shower, toilet). Confirm against the listing.
21. **Pet policy.** Not stated for 401 (no dog tag on the Stays card, no pet line in House Rules). Confirm fee and size limit; Coastal Blue and Driftwood are 1 dog up to 35 lbs at $30/day.
22. **Quiet hours.** Not stated for 401. Coastal Blue and Driftwood are 11 PM-7 AM.
23. **Airbnb link.** The Miami Modern Airbnb listing is currently UNLISTED (Airbnb email Nov 23, 2026) and no rooms URL is on file. Both booking buttons on the page are disabled "Coming Soon" placeholders. Do not link until the listing is relisted and its public URL is confirmed. Also still open: did Cisco unlist it himself?
24. **Vrbo listing.** None exists for 401 yet. Do not add a Vrbo button until a listing is created, published, and its public URL is confirmed.
25. **Reviews.** No Miami Modern reviews are on file, so the page has no Reviews section. Add testimonials once the listing has them. The Stays hub trust block (7 five-star reviews) covers Coastal Blue and Driftwood only.
26. **Beach gear and workspace.** Not claimed for 401. No desk is visible in the photos, so no workspace is listed; beach gear (chairs, cooler, towels, sunscreen) is not confirmed for this unit.
27. **Stays hub wording.** The hub's Good to Know house-rules line was reworded to "Pet policy and quiet hours are listed on each unit's page" so the Coastal Blue/Driftwood dog and quiet-hours claims do not extend to 401. The hub elevator line now names the 4th floor for Miami Modern. The hub trust count was corrected 6 to 7 (verified: 7 reviews at 5.0 on the host profile).

## Resolved during drafting (for the record)

- **Driftwood Airbnb URL found:** https://www.airbnb.com/rooms/1798640427233892545 (verified via public search result, Nov 23, 2026; room ID confirmed in the result URL). Its listing text also verified: king bed + sofa bed, sleeps 4, workspace, self check-in, weekly/monthly discounts, mid-stay cleanings, 4 PM in / 10 AM out, 1 dog up to 35 lbs at $30/day, quiet hours 11 PM–7 AM.
- **Coastal Blue Airbnb URL confirmed live:** https://www.airbnb.com/rooms/1807359543212911552.
- **Site structure matched from the live homepage source:** Tailwind Play CDN + inline config, Fraunces/DM Sans fonts, navy #0A2342 / navy-deep #051530 / cream #F5F2E8 / stone #E8E4D8, same header/footer/nav, `script.js` + `styles.css` referenced. "Stays" added to nav and footer in the drafts only.
- **GitHub repo:** per the parent agent's records, the repo is Francisco8922/LeonHG-Site. These drafts were NOT committed anywhere; they live only in `~/workspace/leonhg-website-drafts/` for Cisco's review.
