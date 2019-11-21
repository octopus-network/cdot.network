module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'declaration-block-trailing-semicolon': 'never',
    'no-empty-source': [true, {
      severity: 'warning'
    }],
    'block-no-empty': null
  }
}
