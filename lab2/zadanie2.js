var expect = chai.expect;
"use strict";
function sum(x,y) {
    "use strict";
    return x+y;
}
describe('The sum() function', function() {
 it('Returns 4 for 2+2', function() {
   expect(sum(2,2)).to.equal(4);
 });
 it('Returns 0 for -2+2', function() {
   expect(sum(-2,2)).to.equal(0);
 });
});