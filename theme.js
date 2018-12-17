import { future } from "mdx-deck/themes"
import vsDark from "prism-react-renderer/themes/vsDark"

export const theme = {
  ...future,
  colors: {
    ...future.colors,
    text: vsDark.plain.color,
    background: vsDark.plain.backgroundColor,
  },
  codeSurfer: {
    ...vsDark,
    showNumbers: false
  }
}
