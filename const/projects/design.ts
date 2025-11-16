import { ELevelProject, EStatusProject } from "~/types/enum/project/project";
import type { TProject } from "~/types/type/project";

export const design: TProject = {
  id: 'posdnnbcv',
  name: 'Meet Artist',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id lectus vitae neque gravida porttitor. Suspendisse non eros nec lorem convallis pretium. Mauris vulputate, ante nec iaculis tempus, nibh justo dapibus nisl, eget faucibus tortor arcu sed metus. Integer eget augue vitae leo porttitor faucibus. Donec sodales dui in semper pellentesque. Aliquam non quam at enim cursus vehicula.',
  status: EStatusProject.PERSONAL,
  level: ELevelProject.HIGHT,
  duration: '1 Months',
  tech: [
    { url: 'https://vuejs.org/', icon: 'vue-icon.svg' },
    { url: 'https://nuxt.com/', icon: 'nuxt-icon.svg' }
  ],
  picture: {
    src_s: "",
    src_m: "/images/medium/figma-mobile.png",
    src_l: "",
    alt: 'Capture d’écran du projet design mobile'
  },
  links: {
    code: '',
    website: '',
  }
}
