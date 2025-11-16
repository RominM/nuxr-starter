import { ELevelProject, EStatusProject } from "~/types/enum/project/project";
import type { TProject } from "~/types/type/project";

export const rommefy: TProject = {
  id: 'qdsfsdff',
  name: 'Romeefy',
  description: 'I created a Spotify clone that replicates the music streaming experience with a modern and responsive interface. The project allows users to browse playlists, albums, and artists, search for tracks, manage their library, and control playback with an integrated player. The goal was to combine a polished design with interactive features to deliver a user experience similar to the original platform.',
  status: EStatusProject.PERSONAL,
  level: ELevelProject.HIGHT,
  duration: '2 months',
  tech: [
    { url: 'https://vuejs.org/', icon: 'vue-icon.svg' },
    { url: 'https://nuxt.com/', icon: 'nuxt-icon.svg' }
  ],
  picture: {
    src_s: "",
    src_m: "/images/medium/romeefy-mobile.png",
    src_l: "/images/large/romeefy-mobile.png",
    alt: 'Capture d’écran du projet romeefy'
  }
}
