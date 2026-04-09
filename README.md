

# 🎮 DS Anywhere: Homebrew Edition

A web-based Nintendo DS emulator that launches your homebrew NDS game instantly in the browser. Built on a fork of [DS Anywhere](https://github.com/brxxn/ds-anywhere), which uses [Emscripten](https://emscripten.org/) to compile the [melonDS](https://github.com/melonds-emu/melonds) emulator core to WebAssembly. The frontend is built with TypeScript, Preact, and Vite.

Players visit your site and the game starts automatically; no ROM uploads, no setup, no friction.

## ✨ Features

- **Instant Play**: The homebrew ROM is bundled as a static asset and loads automatically on page visit.
- **Browser-Sandboxed**: All emulation runs inside a WebAssembly sandbox in the browser, so there are no security risks to the host machine.
- **No Installation Required**: Works on any modern browser with WebAssembly support. Nothing to download.
- **Mobile Friendly**: On-screen touch controls for mobile devices.
- **Gamepad Support**: Plug in a controller and play with physical buttons.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Emulator Core | melonDS (C++), compiled to WASM via Emscripten |
| Bridge SDK | TypeScript bindings connecting WASM to the frontend |
| Frontend | Preact + TypeScript + Vite |
| Deployment | GitHub Pages via CI/CD |

## 📁 Project Structure

```
ds-anywhere-homebrew/
├── melonds/                  # melonDS fork (compiled to WASM)
├── bridge/                   # TypeScript <-> WASM bridge SDK
├── frontend/
│   ├── public/
│   │   └── EvoWars_demo.nds          # my homebrew ROM
│   ├── src/
│   │   ├── App.tsx           # Simplified auto-launch UI
│   │   └── emulator.ts       # Fetches and loads the ROM on startup
│   └── index.html
├── buildtools.py             # Build toolchain helper script
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- [Python 3](https://www.python.org/)
- [Emscripten SDK](https://emscripten.org/docs/getting_started/downloads.html)
- [Node.js](https://nodejs.org/) (v18+)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yoomin53/dsAnywhereEvoWars
   cd ds-anywhere-homebrew
   ```

2. Place your homebrew `.nds` ROM in the static assets directory, in my case it is "EvoWars_demo.nds":
   ```bash
   cp /path/to/your/game.nds frontend/public/EvoWars_demo.nds
   ```

3. Build the WASM emulator core:
   ```bash
   python3 buildtools.py build
   ```

4. Install frontend dependencies and start the dev server:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

5. Open `http://localhost:5173` in your browser. The game should start automatically.

### Production Build

```bash
cd frontend
npm run build
```

The output in `frontend/dist/` is a fully static site ready to be deployed to GitHub Pages, Netlify, Vercel, or any static hosting provider.

## ⚙️ Configuration

You can customize the experience by editing `frontend/src/config.ts`:

| Option | Description | Default |
|---|---|---|
| `ROM_PATH` | Path to the `.nds` file relative to `public/` | `EvoWars_demo.nds` |
| `AUTO_START` | Start emulation immediately on page load | `true` |
| `SHOW_CONTROLS` | Show on-screen touch controls on mobile | `true` |
| `DEFAULT_SCALE` | Initial display scale multiplier | `2` |

## 🎮 Controls

### Keyboard

| Key | DS Button |
|---|---|
| Arrow Keys | D-Pad |
| X | A |
| Z | B |
| A | Y |
| S | X |
| Enter | Start |
| Shift | Select |
| Q | L |
| W | R |

### Gamepad

Any standard gamepad is supported with default mappings. Custom bindings are planned for a future release.

## 📋 To-Do

- [ ] Custom controller binding UI
- [ ] Save file export and import
- [ ] Cheat code support
- [ ] Theme selector
- [ ] Performance tuning for lower-end devices

## 📄 License

This project is built on [DS Anywhere](https://github.com/brxxn/ds-anywhere) and [melonDS](https://github.com/melonds-emu/melonds). Please refer to their respective repositories for licensing details.

This site is intended **only** for use with homebrew or otherwise freely distributable NDS software. Do not use it to distribute copyrighted ROMs.

## 🙏 Acknowledgments

- [melonDS](https://github.com/melonds-emu/melonds) for the excellent DS emulator core
- [DS Anywhere](https://github.com/brxxn/ds-anywhere) for the original browser-based emulation project
- [Emscripten](https://emscripten.org/) for making C++ to WebAssembly compilation possible