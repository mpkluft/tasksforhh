(function () {
  'use strict';

  describe('pow', function() {

    describe('возводит x в степень n', function() {

      function makeTest(x) {
        var expected = x * x * x;
        it('при возведении ' + x + ' в степень 3 результат: ' + expected, function() {
          assert.equal(pow(x, 3), expected);
        });
      }

      for (var x = 1; x <= 5; x++) {
        makeTest(x);
      }
    });
    describe('возводит x в степень n', function() {

          it('при возведении в отрицательную степень результат NaN', function() {
            assert(!isNaN(pow(2, -1)), 'pow(2, -1) не NaN');
          });

          it('при возведении в дробную степень результат NaN', function() {
            assert(!isNaN(pow(2, 1.5)), 'pow(2, 1.5) не NaN');
          });

    });



  // ... дальнейшие тесты it и подблоки describe ...
});

})();

/*
assert(value) – проверяет что value является true в логическом контексте.
assert.equal(value1, value2) – проверяет равенство value1 == value2.
assert.strictEqual(value1, value2) – проверяет строгое равенство value1 === value2.
assert.notEqual, assert.notStrictEqual – проверки, обратные двум предыдущим.
assert.isTrue(value) – проверяет, что value === true
assert.isFalse(value) – проверяет, что value === false
*/
