# 🎨 Background Color Changer

A dynamic and interactive background color changer that transforms your screen with beautiful colors at the click of a button. Perfect for testing color schemes, creating ambient environments, or simply enjoying vibrant visual experiences.

## ✨ Features

- **One-Click Color Change**: Instantly change background colors with a single click
- **Random Color Generation**: Generates beautiful random colors using various algorithms
- **Smooth Transitions**: CSS3-powered smooth color transitions
- **Color Code Display**: Shows current color in HEX, RGB, and HSL formats
- **Color History**: Keep track of previously generated colors
- **Responsive Design**: Works seamlessly across all devices
- **Keyboard Shortcuts**: Quick color changes using keyboard
- **Color Palette Modes**: Choose from different color generation modes
- **Copy to Clipboard**: Easily copy color codes for design projects
- **Auto-Mode**: Automatically cycle through colors at set intervals

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and accessibility features
- **CSS3**: Advanced transitions, gradients, and responsive design
- **JavaScript ES6**: Color generation algorithms and DOM manipulation
- **Web APIs**: Clipboard API for copying color codes
- **CSS Custom Properties**: Dynamic color management
- **Local Storage**: Save user preferences and color history

## 🎮 How to Use

### Basic Usage
1. **Click "Change Color"**: Generate a new random background color
2. **View Color Info**: See the color codes in different formats
3. **Copy Colors**: Click on any color code to copy to clipboard
4. **Browse History**: View previously generated colors

### Advanced Features
- **Auto Mode**: Enable automatic color cycling
- **Specific Palettes**: Choose warm, cool, or pastel color modes
- **Manual Input**: Enter specific color codes
- **Favorites**: Save your favorite color combinations

### Keyboard Shortcuts
- **Spacebar**: Generate new random color
- **Enter**: Toggle auto-mode on/off
- **C**: Copy current color code
- **H**: Toggle color history panel
- **R**: Reset to default white background
- **1-5**: Quick access to color palette modes

## 📋 Installation & Usage

### Option 1: Direct Download
1. Clone the repository:
   ```bash
   git clone https://github.com/ParagChaudhari26/Background-Color-Changer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Background-Color-Changer
   ```

3. Open `index.html` in your web browser

### Option 2: Live Server
1. Install a live server extension
2. Right-click on `index.html` and select "Open with Live Server"

## 📁 Project Structure

```
Background-Color-Changer/
│
├── index.html              # Main HTML file
├── styles/
│   ├── style.css          # Main styles
│   ├── transitions.css    # Color transition effects
│   └── responsive.css     # Mobile responsiveness
├── scripts/
│   ├── color-generator.js # Color generation algorithms
│   ├── color-utils.js     # Color format conversions
│   ├── ui-controller.js   # User interface logic
│   └── storage.js         # Local storage management
├── assets/
│   ├── icons/             # UI icons
│   └── sounds/            # Sound effects (optional)
└── README.md              # Project documentation
```

## 🎨 Color Generation Algorithms

### Random RGB Generation
```javascript
function generateRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
```

### HSL-Based Generation
```javascript
function generateHSLColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 50) + 50; // 50-100%
    const lightness = Math.floor(Math.random() * 40) + 30;  // 30-70%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
```
## 🎯 Use Cases

### Design & Development
- **Color Scheme Testing**: Test website color combinations
- **Design Inspiration**: Generate ideas for color palettes
- **Brand Color Exploration**: Find complementary brand colors
- **UI/UX Prototyping**: Quickly test interface colors

### Educational
- **Color Theory Learning**: Understand color relationships
- **Art Education**: Explore color mixing and harmony
- **Psychology Studies**: Test color impact on mood
- **Web Development Training**: Learn CSS color properties

### Entertainment & Wellness
- **Mood Enhancement**: Use colors to improve mood
- **Relaxation**: Soft color transitions for calming effect
- **Party Mode**: Vibrant colors for energetic atmosphere
- **Meditation Aid**: Gentle color changes for focus

## 👨‍💻 Author

**Parag Chaudhari**
- GitHub: [@ParagChaudhari26](https://github.com/ParagChaudhari26)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/parag-chaudhari-024991289/) 
- Email: [paragchaudhari2602@gmail.com](paragchaudhari2602@gmail.com) 

---

### 🌈 Fun Color Facts

- The human eye can distinguish approximately 10 million colors
- Red is the first color babies can see after black and white
- Blue is the most popular favorite color worldwide
- Colors can affect heart rate and blood pressure
- The word "color" comes from the Latin word "colorem"

### ⭐ Show your support

Give a ⭐ if this project added some color to your day!
