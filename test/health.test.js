const test = require('node:test');
const assert = require('node:assert');
const { health } = require('../index');
test('feat_2 health returns ok', () => { assert.deepStrictEqual(health(), { status: 'ok' }); });
