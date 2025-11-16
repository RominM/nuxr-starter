import { ELevelProject, EStatusProject } from "~/types/enum/project/project";
import type { TProject } from "~/types/type/project";

export const space: TProject = {
  id: 'hrdsvsg',
  name: 'Space Tourisme',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae massa sed purus convallis pulvinar. Integer vel lectus eget turpis vehicula ultrices. Duis sit amet urna vel justo pulvinar feugiat. Suspendisse potenti. Aliquam erat volutpat. Sed non eros nec lorem tincidunt feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis leo sed nibh luctus accumsan id id odio.',
  status: EStatusProject.EXERCIES,
  level: ELevelProject.LOW,
  duration: '2 weeks',
  tech: [
    { url: 'https://vuejs.org/', icon: 'vue-icon.svg' },
    { url: 'https://nuxt.com/', icon: 'nuxt-icon.svg' }
  ],
  picture: {
    src_s: "",
    src_m: "/images/medium/space-mobile.png",
    src_l: "",
    alt: 'Capture d’écran du projet space mobile'
  },
  links: {
    code: '',
    website: '',
  }
}
