# Kachamorich Menu Items - Picture Setup Guide

## 📁 Folder Structure Created

Your website now has a dedicated folder for menu item pictures:

```
kachamorich-1/
├── images/
│   ├── menu-items/          👈 NEW FOLDER for all menu item pictures
│   │   └── README.md        (Instructions file)
│   ├── sorshe-ilish.jpg
│   ├── Malabar chicken curry 16.JPG
│   ├── Chingri-Macher-Malai-Curry-Photo-02.webp
│   ├── thali1.jpg
│   ├── about.jpg
│   └── contact.jpg
├── js/
│   └── menu-loader.js       👈 NEW - Auto-loads menu item pictures
├── css/
│   ├── global.css
│   ├── hero.css
│   ├── menu.css
│   ├── catering.css
│   ├── about.css
│   └── contact.css
└── index.html
```

## 🖼️ How It Works

1. **Automatic Image Loading**: The website automatically looks for images in the `images/menu-items/` folder
2. **Smart Naming**: Just name your files according to the convention and they'll appear automatically
3. **Fallback Emoji**: Until you add images, emoji placeholders show up

## 📝 Naming Convention

Follow this exact naming convention for your images:

### Main Dishes
```
shorshe-ilish.jpg
chicken-rezala.jpg
chingri-malai-curry.jpg
kacchi-biryani.jpg
chicken-tehari.jpg
beef-kala-bhuna.jpg
chicken-roast.jpg
beef-rezala.jpg
chicken-curry.jpg
vegetable-khichuri.jpg
```

### Appetizers
```
fuchka.jpg
chicken-lollipop.jpg
shingara.jpg
kabab-skewers.jpg
pakora-platter.jpg
egg-roll.jpg
```

### Breads & Sides
```
roti-naan.jpg
paratha.jpg
boiled-egg.jpg
fried-egg.jpg
green-salad.jpg
raita.jpg
achar.jpg
```

### Desserts
```
firni.jpg
roshmalai.jpg
gulab-jamun.jpg
```

### Drinks
```
borhani.jpg
mango-lassi.jpg
masala-chai.jpg
soft-drinks.jpg
```

## 📸 Image Requirements

- **Supported Formats**: JPG, JPEG, PNG, WebP, GIF
- **Minimum Size**: 280×220 pixels
- **Recommended Size**: 600×400 pixels or larger
- **Aspect Ratio**: Any (will be cropped to fit)
- **File Size**: Keep under 1MB for faster loading

## ✅ Step-by-Step Instructions

### To Add a Picture:

1. **Prepare Your Image**
   - Take a photo of the dish or prepare an image
   - Resize to recommended size (600×400 or larger)
   - Format as JPG or PNG

2. **Name the File Correctly**
   - Use lowercase letters
   - Use hyphens (-) instead of spaces
   - Don't include special characters
   - Example: `chicken-lollipop.jpg` (NOT `Chicken Lollipop.jpg`)

3. **Place in Folder**
   - Save the file to: `images/menu-items/`
   - Full path example: `f:\kachamorich-1\images\menu-items\fuchka.jpg`

4. **Refresh Your Website**
   - Refresh the browser page
   - The image will automatically appear!

## 🎯 Example Workflow

**Want to add a picture of Fuchka w/ Chotpoti?**

1. Take a photo of the dish: `photo.jpg`
2. Resize it to 600×400 pixels
3. Rename to: `fuchka.jpg`
4. Save to: `images/menu-items/fuchka.jpg`
5. Refresh website → Done! ✨

## 🔧 Technical Details

### How the Auto-Loader Works:

- **File**: `js/menu-loader.js`
- **Trigger**: Runs automatically when page loads
- **Method**: Checks for image files using menu item titles
- **Fallback**: Shows emoji placeholder if image not found
- **Animation**: Images inherit hover effects from CSS

### Supported Image Extensions (in order of preference):
1. `.jpg`
2. `.jpeg`
3. `.png`
4. `.webp`

If your file is named `fuchka.jpg`, the script will find it automatically.

## 💡 Pro Tips

1. **Batch Process**: Prepare and name all images before uploading
2. **Consistent Style**: Use similar lighting and angles for all photos
3. **Quality**: Use high-quality images for better appearance
4. **Update Anytime**: Add or replace images anytime, just refresh the page
5. **Backup Original**: Keep original files in case you need to re-edit

## ❓ Troubleshooting

### Images Not Showing?

✓ Check the filename matches the convention exactly (case-sensitive for some servers)
✓ Verify the file is in the correct folder: `images/menu-items/`
✓ Try a different image format (JPG if PNG doesn't work)
✓ Clear browser cache and refresh (Ctrl+F5)
✓ Check browser console for errors (F12)

### Still Having Issues?

- Make sure there are no spaces in the filename
- Try renaming with lowercase letters only
- Ensure file extension matches the actual format
- Check file permissions (should be readable)

## 📧 Need Help?

You can also manually add images to the HTML if needed. The current menu items use emoji placeholders that can be replaced with `<img>` tags.

---

**Created**: November 13, 2025
**Website**: Kachamorich - Bengali Restaurant NYC
