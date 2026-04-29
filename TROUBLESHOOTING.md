# Troubleshooting Guide - Carousel & Mobile Issues

## Quick Diagnosis

1. **Visit the diagnostic page**: https://tu-deployment.vercel.app/diagnostic.html
   - This page will show you which libraries are loaded
   - It has a working test carousel to verify functionality
   - Test the navbar collapse
   - Check which events are firing (click vs touch)

2. **Open browser console** (F12 or Cmd+Option+I on Mac):
   - Look for any red error messages
   - Check if jQuery and Bootstrap are loaded
   - Look for any warnings about missing elements

3. **Test on mobile** (or use mobile emulation in DevTools):
   - Right-click → Inspect → Toggle device toolbar (Ctrl+Shift+M)
   - Test with iPhone/Android viewport sizes
   - Try both portrait and landscape

## Common Issues & Solutions

### Issue 1: Hamburger Menu Not Opening

**Possible causes:**
- Bootstrap JavaScript not loaded
- jQuery not loaded  
- `data-toggle` or `data-target` attributes missing
- CSS hiding the menu

**Solutions:**
1. Check browser console for errors
2. Verify Bootstrap is loaded in diagnostic page
3. Check that navbar has:
   - `data-toggle="collapse"`
   - `data-target="#navbarSupportedContent"`
   - Both must exist and match

### Issue 2: Carousel Buttons Not Working

**Possible causes:**
- carousel.js not being executed
- JavaScript error preventing execution
- CSS making buttons invisible/unclickable
- Event handlers not attached correctly

**Solutions:**
1. Open browser console, look for errors
2. Check diagnostic page carousel works
3. Try clicking buttons on index.html
4. Try tapping buttons on mobile
5. Check if buttons are visible (inspect element)
6. Check if buttons are clickable (`pointer-events` CSS property)

### Issue 3: Carousel Images Not Changing

**If buttons work but images don't change:**
1. Check if `.carousel-item` elements have the `active` class being toggled
2. Open browser DevTools and click a button
3. Check the Elements tab - does the `active` class move?
4. If not, there's a JavaScript error

**If it looks like nothing happens:**
1. Images might be changing but CSS might not be showing it
2. Check CSS for `display: none` on carousel items
3. Check for opacity: 0 hiding items

## Testing Steps

### Step 1: Verify Deployment
```
Visit your Vercel URL and confirm pages load
```

### Step 2: Test Basic HTML
```
Open the page in browser
Right-click → Inspect
Look at the Elements tab
Find: <div id="carouselIndex" class="carousel slide">
Check if it has child elements and buttons
```

### Step 3: Test Bootstrap
```
Open /diagnostic.html
Bootstrap test should show "OK"
Try clicking hamburger menu
```

### Step 4: Test Carousel on Diagnostic
```
Go to Test 2: Simple Carousel on /diagnostic.html
Click prev/next buttons
Check if slides change
```

### Step 5: Test on Main Pages
```
Visit /index.html
Check carousel buttons with DevTools console open
Look for any error messages
Try clicking each button type: prev, next, indicators
```

## Browser Console Debugging

Add this to your browser console to test carousel:

```javascript
// Check if elements exist
console.log("Carousels: " + document.querySelectorAll(".carousel").length);
console.log("Carousel items: " + document.querySelectorAll(".carousel-item").length);
console.log("Prev buttons: " + document.querySelectorAll(".carousel-control-prev").length);
console.log("Next buttons: " + document.querySelectorAll(".carousel-control-next").length);

// Check if carousel.js ran
console.log("Window.initializeCarousels: " + (typeof window.initializeCarousels !== 'undefined'));

// Manually test carousel change
var items = document.querySelectorAll(".carousel-item");
if (items.length > 0) {
  items[0].classList.remove("active");
  items[1].classList.add("active");
  console.log("Manually toggled active class - check if slide changed visually");
}
```

## File Locations

- Main carousel code: `assets/js/carousel.js`
- Carousel CSS: `assets/css/improvements.css` (search for "carousel")
- Header component: `components/header.html`
- Index page carousel: `index.html` (search for "carouselIndex")
- Product page carousel: `tankTop.html` (search for "carouselProduct")

## Common CSS Issues

**Check these CSS properties if carousel buttons aren't working:**
- `pointer-events: none` - makes elements unclickable
- `display: none` - hides elements
- `visibility: hidden` - hides elements
- `opacity: 0` - invisible but may still be clickable
- `z-index` conflicts - element may be behind something else

## Mobile-Specific Issues

**Testing on mobile:**
1. Use Chrome DevTools mobile emulation (Ctrl+Shift+M)
2. Resize to different mobile widths: 320px, 375px, 414px
3. Test both portrait and landscape
4. Check if buttons are large enough to tap
5. Verify spacing is adequate

## If Nothing Works

1. **Clear cache**:
   - Ctrl+Shift+Delete (Windows) or Cmd+Shift+Delete (Mac)
   - Or force refresh: Ctrl+Shift+R or Cmd+Shift+R

2. **Test in different browser**:
   - Try Chrome, Firefox, Safari
   - Try incognito/private window

3. **Check Vercel deployment**:
   - Make sure latest code is deployed
   - Check Vercel build logs for errors
   - Redeploy if needed: `git push origin main`

4. **Enable debug logging**:
   - Open `/debug-carousel.js`
   - This adds console logging
   - Include it in HTML to see what's happening

## Reporting Issues

When reporting issues, please include:
1. Browser and version
2. Device type (iPhone, Android, desktop)
3. Screenshot or description of what happens
4. Browser console errors (full text)
5. Which carousel doesn't work (index slider or product gallery)
6. What you expected to happen vs what actually happens
