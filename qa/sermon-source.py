import importlib.util, pathlib, unittest
root=pathlib.Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('updater',root/'scripts/update-sermons.py')
m=importlib.util.module_from_spec(spec); spec.loader.exec_module(m)
class SourceTests(unittest.TestCase):
 def test_preferred_playable_source(self):
  rows=[dict(id='preview',title='講道',published='2026-11-01'),dict(id='playable',title='講道',published='2026-11-01')]
  self.assertEqual([x['id'] for x in m.deduplicate(rows,{'preview':{}})],['playable'])
 def test_conservative_identity(self):
  rows=[dict(id='a',title='同一篇 信息',published='2026-11-01'),dict(id='b',title='同一篇信息！',published='2026-11-01'),dict(id='c',title='另一篇',published='2026-11-01'),dict(id='d',title='同一篇信息',published='2026-10-25')]
  self.assertEqual([x['id'] for x in m.deduplicate(rows,{})],['a','c','d'])
 def test_professor_metadata(self):
  self.assertEqual(m.parts('以詩篇學習禱告｜詩篇第五篇｜周學信教授｜M+大雅教會主日直播｜2026/11/1')[1],'周學信教授')
if __name__=='__main__':unittest.main()
