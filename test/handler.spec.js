import sinon from 'sinon';

require.extensions['.pem'] = function (module, filename) {
  module.exports = '';
};

sinon.stub.returnsAwsPromise = function (obj) {
  return sinon.stub.returns.call(this, {
    promise: () => obj
  });
};

sinon.behavior.returnsAwsPromise = function (obj) {
  return sinon.behavior.returns.call(this, {
    promise: () => obj
  });
};