# Festival of Disguises

A 2D narrative puzzle game set on the island of Kraed Maas. Navigate social webs by wearing costumes to uncover secrets — across a repeating day-night loop.

## Gameplay

You play as **Alex**, a detective who arrives on Kraed Maas during its annual Festival of Disguises. The island runs on a three-phase day cycle — **Morning → Afternoon → Night** — after which the day resets and a new run begins. Each run, the weather is randomly set to **Sun** or **Rain**.

Move through the world using **WASD or Arrow Keys** (or the on-screen D-pad). Walk into an NPC to start a conversation; walk into an exit marker to travel between locations.

### Costumes & Identity

Equip costumes from your inventory to change how NPCs perceive and respond to you. Wearing the **Constable Uniform**, for example, unlocks dialogue options unavailable to a plain traveler. Your active outfit is displayed on your character sprite and in the HUD.

### Locations

| Location | Description |
|---|---|
| **Town Square** | The heart of Kraed Maas, where golden-hour light lingers on cobblestones and festival banners fly. |
| **The Crusty Crumb** | A cozy bakery filled with the scent of cinnamon and yeast. |
| **Kraed Docks** | The misty waterfront where old wood creaks and secrets wash ashore. |

### Characters

| NPC | Species | Role |
|---|---|---|
| **Mayor Barnaby** | Lion | The dapper, porcelain-obsessed ruler of Kraed Maas. |
| **Officer Grruff** | Wolf | A clown-costumed officer who secretly dreams of writing poetry. |
| **Miss Pips** | Rabbit | The witch-hatted baker of The Crusty Crumb with a talent for hexes. |
| **Salty Sam** | Walrus | A pirate-coated dockhand hiding more than seaweed. |

### Notebook

Every run, you can uncover each NPC's **Secret**, **Dark Secret**, **Rumor**, and **False Rumor**. Discovered entries are saved to your **Notebook** (persisted in `localStorage` across runs) so your knowledge accumulates over multiple loops.

### Items

Collect items while exploring:
- **Constable Uniform** — unlocks authority dialogue options
- **Baker Apron** — opens the baker's inner circle
- **Ghost Sheet** — let people think you're a ghost
- **Strange Mask** — a folk-art mask with shifting features
- **Old Key** — a heavy brass key, its purpose unclear
- **Soggy Letter** — watercolor-stained parchment with a secret inside

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** (dev server & bundler)
- **Tailwind CSS v4**
- **Motion** (`motion/react`) for animations
- **Lucide React** for icons
- **Google Gemini AI** (`@google/genai`) for AI-powered features

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```
   npm install
   ```
2. Copy the example env file and add your Gemini API key:
   ```
   cp .env.example .env.local
   ```
   Then set `GEMINI_API_KEY` in `.env.local` to your [Gemini API key](https://aistudio.google.com/app/apikey).
3. Start the dev server:
   ```
   npm run dev
   ```
   The app will be available at `http://localhost:3000`.

## Other Scripts

| Command | Description |
|---|---|
| `npm run build` | Production build (output in `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Type-check with TypeScript (`tsc --noEmit`) |
