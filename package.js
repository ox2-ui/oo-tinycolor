Package.describe({
  name: 'ox2:tinycolor',
  summary: 'TinyColor library',
  version: '1.1.2_1',
  git: ' /* Fill me in! */ '
});

var S = 'server';
var C = 'client';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('lib/tinycolor.js', C);
  api.addFiles('lib/export.js', C);
  api.export('tinycolor');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ox2:tinycolor');
  api.addFiles('tests/oo-tinycolor-tests.js');
});
