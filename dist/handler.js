'use strict';

var choseOne = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(engineers, draft, count) {
    var choosenList, x, engNumber;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            choosenList = [];

            for (x = 0; x < count; x++) {
              engNumber = Math.floor(Math.random() * engineers.length);

              choosenList[x] = engineers.swap(engNumber, engineers.length - 1).pop();
              draft.push(choosenList[x]);
            }

            return _context.abrupt('return', choosenList);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function choseOne(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var choseFromDraft = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(weeklySupport, count, midWeek) {
    var choosenList, duplicat, x, _x7, _x8;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            choosenList = [];


            if (midWeek === 3) {
              duplicat = [];

              for (x = 0; x < count; x++) {
                duplicat.push(weeklySupport.pop());
              }

              for (_x7 = 0; _x7 < count; _x7++) {
                choosenList[_x7] = weeklySupport.pop();
              }

              Array.prototype.push.apply(weeklySupport, duplicat);
            } else {
              for (_x8 = 0; _x8 < count; _x8++) {
                choosenList[_x8] = weeklySupport.pop();
              }
            }

            return _context2.abrupt('return', choosenList);

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function choseFromDraft(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

var selectEngineer = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(engineers, count, draft, weeklySupport, midWeek) {
    var selectedEngineers, temp, x;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            selectedEngineers = void 0;

            if (!(midWeek > 2 && draft.length > count)) {
              _context3.next = 9;
              break;
            }

            if (weeklySupport.length == 0) {
              Array.prototype.push.apply(weeklySupport, draft);
            }

            _context3.next = 5;
            return choseFromDraft(weeklySupport, count, midWeek);

          case 5:
            selectedEngineers = _context3.sent;
            return _context3.abrupt('return', selectedEngineers);

          case 9:
            if (!(engineers.length < count)) {
              _context3.next = 21;
              break;
            }

            temp = [];


            for (x = 0; x < count; x++) {
              temp.push(draft.pop());
            }

            Array.prototype.push.apply(engineers, draft);

            _context3.next = 15;
            return choseOne(engineers, draft, count);

          case 15:
            selectedEngineers = _context3.sent;


            Array.prototype.push.apply(engineers, temp);
            draft.length = 0;
            return _context3.abrupt('return', selectedEngineers);

          case 21:
            _context3.next = 23;
            return choseOne(engineers, draft, count);

          case 23:
            selectedEngineers = _context3.sent;
            return _context3.abrupt('return', selectedEngineers);

          case 25:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function selectEngineer(_x9, _x10, _x11, _x12, _x13) {
    return _ref3.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

Array.prototype.swap = function (x, y) {
  var b = this[x];
  this[x] = this[y];
  this[y] = b;
  return this;
};

module.exports.get = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(event, context, callback) {
    var engineers, count, shiftDays, finalResult, today, weeklySupport, draft, midWeek, i, _midWeek, date, selectedGroup;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            engineers = [{ name: 'e1' }, { name: 'e2' }, { name: 'e3' }, { name: 'e4' }, { name: 'e5' }, { name: 'e6' }, { name: 'e7' }, { name: 'e8' }, { name: 'e9' }, { name: 'e10' }], count = 2, shiftDays = 15, finalResult = [], today = new Date(), weeklySupport = [], draft = [];
            midWeek = 0;
            i = 0, _midWeek = 0;

          case 3:
            if (!(i < shiftDays)) {
              _context4.next = 13;
              break;
            }

            date = { year: today.getFullYear(), month: today.getMonth(), day: today.getDate() + i };
            _context4.next = 7;
            return selectEngineer(engineers, count, draft, weeklySupport, _midWeek);

          case 7:
            selectedGroup = _context4.sent;


            finalResult.push({ 'Date': new Date(date.year, date.month, date.day), 'eng': selectedGroup });
            _midWeek = _midWeek === 6 ? 0 : _midWeek;

          case 10:
            i++, _midWeek++;
            _context4.next = 3;
            break;

          case 13:

            callback(null, {
              statusCode: 200,
              body: JSON.stringify(finalResult)
            });

          case 14:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function (_x14, _x15, _x16) {
    return _ref4.apply(this, arguments);
  };
}();