var utils = require('../lib/utility.js');
var expect = require('chai').expect;


describe('utility:时间转换', function() {
  it('毫秒转换为datetime', function() {   
    expect(utils.toDateTime(1531378843006)).to.be.equal('2018-07-12 15:00:43');
  });

  it('毫秒转换为date', function() {
    expect(utils.toDate(1531378843006)).to.be.equal('2018-07-12');
  });



})