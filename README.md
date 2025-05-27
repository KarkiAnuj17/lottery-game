# Lucky Slots

**Lucky Slots** is a visually engaging, slot-machine-inspired lottery game built with React and styled using Tailwind CSS. The game is simple: try your luck at spinning the slots, and see if you win by landing on a lucky symbol! It features animated transitions, play/pause controls, and a dynamic game result display.

## Features

- **Slot Machine Animation:** Slots spin rapidly when you play, simulating a real slot machine effect.
- **Symbols:** Randomly land on one of several symbols—some win, some lose!
- **Win/Lose Display:** Instantly see if you’ve won or lost, highlighted by color and message.
- **Play/Pause/New Game:** Start, pause, and replay the game easily from the same button.
- **Animated UI:** Smooth color transitions, pulsing, and bouncing effects highlight the gameplay.
- **Modern Components:** Uses Lucide React icons and customizable UI components.

## Gameplay

1. **Start the Game:** Click the "Start" button to begin spinning.
2. **Spinning:** The slot spins rapidly through various symbols.
3. **Pause/New Game:** Press "Pause" to stop spinning and reveal your result. "New Game" restarts the slot.
4. **Win or Lose:** If you land on a lucky symbol (🍒, 🍋, 🍌), you win! If you land on 💥, you lose.
5. **Visual Feedback:** Your result is shown in a highlighted card with the symbol and a win/lose message.

## Code Overview

- **State Management:** Uses `useState` and `useEffect` for game flow, symbol selection, and animation.
- **Game Logic:** Randomly cycles through an array of slot symbols. When paused, checks if current symbol is a winning one.
- **Result Display:** Shows game result (win or lose) with appropriate styling and icon.
- **UI Components:** Utilizes `Button` and `Card` components for layout, plus Lucide React icons for visual appeal.

## Setup & Usage

1. **Install Dependencies:**
   - `react`
   - `lucide-react`
   - `tailwindcss`
   - Your own `Button` and `Card` UI components (or update to use your preferred library).

2. **Component Usage:**
   Import and use the `Lottery` component in your React app:

   ```jsx
   import Lottery from './Lottery';

   function App() {
     return <Lottery />;
   }
   ```

3. **Tailwind CSS:**
   Make sure Tailwind CSS is set up in your project for the styles to be applied correctly.

4. **Custom Components:**
   - The code expects custom `<Button />` and `<Card />` components (from `@/components/ui/button` and `@/components/ui/card`). Replace them with your own or adapt as needed.

## Customization

- **Slot Symbols:** Change the `lotteryOptions` array to use your own symbols or emojis.
- **Win/Lose Logic:** Update the logic in `setIsWinner()` and `getResultMessage()` to change what counts as a win.
- **UI Styling:** Adjust Tailwind CSS classes for a different look or to match your branding.

## Example UI

![Screenshot 2025-05-26 205121](https://github.com/user-attachments/assets/5d41c4d7-d020-43d5-87c2-1132824c9cfe)
![Screenshot 2025-05-26 205032](https://github.com/user-attachments/assets/8e7ce135-80dc-4b68-9c09-0a131cc7357b)
![Screenshot 2025-05-26 205016](https://github.com/user-attachments/assets/96a4d70c-0db5-45f7-aa12-fc4b683b7193)
![Screenshot 2025-05-26 205219](https://github.com/user-attachments/assets/3b865caa-a310-47c5-bfc2-51e90a402488)

---

**Try your luck and spin to win!**






