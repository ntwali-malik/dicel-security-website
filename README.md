## Dicel Security — Company Website

Modern marketing website for Dicel Security, built with React. It showcases services like CCTV, access control, alarm systems, and consulting, with responsive layouts and animation effects.

### Tech Stack
- **React 19** with **Create React App**
- **React Router v6** for client-side routing
- **Styled Components**, **Bootstrap** CSS utilities
- **Framer Motion**, **WOW.js/animate.css** for animations
- **React Toastify**, **React Responsive** (selected UI enhancements)

### Project Structure
```
public/                Static assets (images, css, js)
  assets/img/          Company images and icons
  assets/css/          Bootstrap and global styles
src/
  Company/             Feature pages and sections
    Home.jsx           Landing page
    About.jsx          Company overview
    Service.jsx        Services overview
    AccessControl.jsx  Access control details
    Contact.jsx        Contact form & info
    Gallery.jsx        Project/gallery grid
    services/          Service detail pages
      CctvCameras.jsx
      AlarmSystems.jsx
      ConsultingServices.jsx
      MetalDetector.jsx
      SecurityGuard.jsx
  App.js               Routes and layout shell
  index.js             App bootstrap
```

### Getting Started
1. Install Node.js LTS.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   Visit `http://localhost:3000`.

### Available Scripts
- `npm start`: Start dev server with hot reload
- `npm run build`: Production build to `build/`
- `npm test`: Run tests in watch mode
- `npm run eject`: Eject CRA config (irreversible)

### Routing
Client-side routes are defined in `src/App.js` and page components under `src/Company/`. Add new pages by creating a component and wiring a `<Route>`.

### Styling & Assets
- Global styles in `public/assets/css/style.css` and `public/assets/css/bootstrap.min.css`.
- Component-level styles can use `styled-components` where appropriate.
- Images live in `public/assets/img/` and are referenced by relative paths.

### Deployment
1. Build the app:
   ```bash
   npm run build
   ```
2. Deploy the `build/` folder to your host:
   - Static hosts: Netlify, Vercel, GitHub Pages
   - cPanel/Apache/Nginx: upload contents of `build/` and ensure SPA fallback to `index.html` for client routes

### Contributing
1. Create a feature branch
2. Commit with clear messages
3. Open a pull request describing changes and screenshots if UI-related

### License
Proprietary — © Dicel Security. All rights reserved.

### Contact
For inquiries or support, contact the Dicel Security team.
