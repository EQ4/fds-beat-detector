'use strict';

Package.describe({
  summary: 'Beat detectionr',
  version: '0.0.0',
  name: 'fds:beat-detector',
  git: 'https://github.com/foxdog-studios/fds-beat-detector.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');

  api.use([
    'coffeescript',
    'reactive-var'
  ]);

  api.addFiles('lib/beat_detector.coffee', 'client');
  api.addFiles('lib/client/audio_sample.coffee', 'client');
  api.addFiles('lib/client/pcm_audio_data_generator.coffee', 'client');
  api.addFiles('lib/client/beat_detector.coffee', 'client');
  api.addFiles('lib/client/beat_manager.coffee', 'client');
});

