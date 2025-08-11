// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// pxUtilities PostCSS generator
function pxUtilities({ max = 200 } = {}) {
  let css = '';
  for (let i = 1; i <= max; i++) {
    css += `.p-${i}px{padding:${i}px}\n`;
    css += `.m-${i}px{margin:${i}px}\n`;
    css += `.pt-${i}px{padding-top:${i}px}\n`;
    css += `.pb-${i}px{padding-bottom:${i}px}\n`;
    css += `.pl-${i}px{padding-left:${i}px}\n`;
    css += `.pr-${i}px{padding-right:${i}px}\n`;
    css += `.px-${i}px{padding-left:${i}px;padding-right:${i}px}\n`;
    css += `.py-${i}px{padding-top:${i}px;padding-bottom:${i}px}\n`;
  }

  return {
    postcssPlugin: 'px-utilities',
    Once(root, { parse }) {
 
      const generated = parse(css, { from: 'virtual:px-utilities.css' });
      root.append(generated);
    }
  };
}
pxUtilities.postcss = true;

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    postcss: {
      plugins: [pxUtilities({ max: 200 })]
    }
  }
});
