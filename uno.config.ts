import {
  defineConfig,
  presetAttributify,
  presetTagify,
  presetIcons,
  presetUno,
} from "unocss";

export default defineConfig({
  presets: [
    presetAttributify(),
    presetTagify(),
    presetIcons({
      scale: 2.0,
      autoInstall: true,
    }),
    presetUno(),
  ],
});
