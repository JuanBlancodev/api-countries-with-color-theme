import { PATHNAME_ROOT, PATHNAME_SEARCH } from "../config/cfg"

const listPaths = [
  { root: 'root', path: PATHNAME_ROOT },
  { root: 'search', path: PATHNAME_SEARCH }
]

export default ({ pathname }, root) => {
  const targetPath = listPaths.find(item => item.root === root)?.path;
  return pathname.substring(1) === targetPath;
}