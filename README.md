# SheLivesWithUs

Static movie / TV frontend with:
- global TV remote overlay
- global search dock
- local profile flow
- theater page
- My List and Continue Watching via localStorage

## Notes
- Third-party embeds may not support full remote control. The remote sends best-effort commands.
- Profile and theater sync use browser localStorage / BroadcastChannel in the same browser environment.
- `profile/` and `theater/` folder routes are included alongside `profile.html` and `theater.html`.
