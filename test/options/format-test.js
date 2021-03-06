var assert = require('assert');

var vows = require('vows');

var formatFrom = require('../../lib/options/format').formatFrom;

vows.describe(formatFrom)
  .addBatch({
    'undefined': {
      'topic': function () {
        return formatFrom(undefined);
      },
      'is false': function (formatOptions) {
        assert.deepEqual(formatOptions, false);
      }
    },
    'false': {
      'topic': function () {
        return formatFrom(false);
      },
      'is false': function (formatOptions) {
        assert.deepEqual(formatOptions, false);
      }
    },
    'true': {
      'topic': function () {
        return formatFrom(true);
      },
      'is default': function (formatOptions) {
        assert.deepEqual(formatOptions, {
          breaks: {
            afterAtRule: false,
            afterBlockBegins: false,
            afterBlockEnds: false,
            afterComment: false,
            afterProperty: false,
            afterRuleBegins: false,
            afterRuleEnds: false,
            beforeBlockEnds: false,
            betweenSelectors: false
          },
          indentBy: 0,
          indentWith: ' ',
          spaces: {
            aroundSelectorRelation: false,
            beforeBlockBegins: false,
            beforeValue: false
          },
          wrapAt: false
        });
      }
    },
    'hash': {
      'topic': function () {
        return formatFrom({ breaks: { afterProperty: true }, indentBy: 1 });
      },
      'is merged with default': function (formatOptions) {
        assert.deepEqual(formatOptions, {
          breaks: {
            afterAtRule: false,
            afterBlockBegins: false,
            afterBlockEnds: false,
            afterComment: false,
            afterProperty: true,
            afterRuleBegins: false,
            afterRuleEnds: false,
            beforeBlockEnds: false,
            betweenSelectors: false
          },
          indentBy: 1,
          indentWith: ' ',
          spaces: {
            aroundSelectorRelation: false,
            beforeBlockBegins: false,
            beforeValue: false
          },
          wrapAt: false
        });
      }
    },
    'hash with indentBy as string': {
      'topic': function () {
        return formatFrom({ indentBy: '2' });
      },
      'is merged with default': function (formatOptions) {
        assert.deepEqual(formatOptions, {
          breaks: {
            afterAtRule: false,
            afterBlockBegins: false,
            afterBlockEnds: false,
            afterComment: false,
            afterProperty: false,
            afterRuleBegins: false,
            afterRuleEnds: false,
            beforeBlockEnds: false,
            betweenSelectors: false
          },
          indentBy: 2,
          indentWith: ' ',
          spaces: {
            aroundSelectorRelation: false,
            beforeBlockBegins: false,
            beforeValue: false
          },
          wrapAt: false
        });
      }
    },
    'hash with explicit indentWith': {
      'topic': function () {
        return formatFrom({ indentWith: '\t' });
      },
      'is merged with default': function (formatOptions) {
        assert.deepEqual(formatOptions, {
          breaks: {
            afterAtRule: false,
            afterBlockBegins: false,
            afterBlockEnds: false,
            afterComment: false,
            afterProperty: false,
            afterRuleBegins: false,
            afterRuleEnds: false,
            beforeBlockEnds: false,
            betweenSelectors: false
          },
          indentBy: 0,
          indentWith: '\t',
          spaces: {
            aroundSelectorRelation: false,
            beforeBlockBegins: false,
            beforeValue: false
          },
          wrapAt: false
        });
      }
    },
    'hash with implicit indentWith': {
      'topic': function () {
        return formatFrom({ indentWith: 'tab' });
      },
      'is merged with default': function (formatOptions) {
        assert.deepEqual(formatOptions, {
          breaks: {
            afterAtRule: false,
            afterBlockBegins: false,
            afterBlockEnds: false,
            afterComment: false,
            afterProperty: false,
            afterRuleBegins: false,
            afterRuleEnds: false,
            beforeBlockEnds: false,
            betweenSelectors: false
          },
          indentBy: 0,
          indentWith: '\t',
          spaces: {
            aroundSelectorRelation: false,
            beforeBlockBegins: false,
            beforeValue: false
          },
          wrapAt: false
        });
      }
    },
    'string': {
      'topic': function () {
        return formatFrom('breaks:afterProperty=on;indentBy:3;wrapAt:25');
      },
      'is merged with default': function (formatOptions) {
        assert.deepEqual(formatOptions, {
          breaks: {
            afterAtRule: false,
            afterBlockBegins: false,
            afterBlockEnds: false,
            afterComment: false,
            afterProperty: true,
            afterRuleBegins: false,
            afterRuleEnds: false,
            beforeBlockEnds: false,
            betweenSelectors: false
          },
          indentBy: 3,
          indentWith: ' ',
          spaces: {
            aroundSelectorRelation: false,
            beforeBlockBegins: false,
            beforeValue: false
          },
          wrapAt: 25
        });
      }
    },
    'string with indentWith': {
      'topic': function () {
        return formatFrom('indentWith:tab');
      },
      'is merged with default': function (formatOptions) {
        assert.deepEqual(formatOptions, {
          breaks: {
            afterAtRule: false,
            afterBlockBegins: false,
            afterBlockEnds: false,
            afterComment: false,
            afterProperty: false,
            afterRuleBegins: false,
            afterRuleEnds: false,
            beforeBlockEnds: false,
            betweenSelectors: false
          },
          indentBy: 0,
          indentWith: '\t',
          spaces: {
            aroundSelectorRelation: false,
            beforeBlockBegins: false,
            beforeValue: false
          },
          wrapAt: false
        });
      }
    },
    'beautify keyword': {
      'topic': function () {
        return formatFrom('beautify');
      },
      'resolves correctly': function (formatOptions) {
        assert.deepEqual(formatOptions, {
          breaks: {
            afterAtRule: true,
            afterBlockBegins: true,
            afterBlockEnds: true,
            afterComment: true,
            afterProperty: true,
            afterRuleBegins: true,
            afterRuleEnds: true,
            beforeBlockEnds: true,
            betweenSelectors: true
          },
          indentBy: 2,
          indentWith: ' ',
          spaces: {
            aroundSelectorRelation: true,
            beforeBlockBegins: true,
            beforeValue: true
          },
          wrapAt: false
        });
      }
    },
    'keep-breaks keyword': {
      'topic': function () {
        return formatFrom('keep-breaks');
      },
      'resolves correctly': function (formatOptions) {
        assert.deepEqual(formatOptions, {
          breaks: {
            afterAtRule: true,
            afterBlockBegins: true,
            afterBlockEnds: true,
            afterComment: true,
            afterProperty: false,
            afterRuleBegins: false,
            afterRuleEnds: true,
            beforeBlockEnds: true,
            betweenSelectors: false
          },
          indentBy: 0,
          indentWith: ' ',
          spaces: {
            aroundSelectorRelation: false,
            beforeBlockBegins: false,
            beforeValue: false
          },
          wrapAt: false
        });
      }
    }
  })
  .export(module);
