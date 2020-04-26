import DocsSource from './DocsSource';

const branchWhiteList = new Set(['korean', 'english']);
export default new DocsSource({
  id: 'main',
  name: '메인 라이브러리',
  global: 'Discord',
  repo: 'discordjs-kr/discord.js',
  defaultTag: 'korean',
  branchFilter: branch => branchWhiteList.has(branch),
  tagFilter: () => false,
});
