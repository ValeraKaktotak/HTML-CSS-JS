
var json = '[1,2,22,667,12,33,888,5]';
var data = JSON.parse(json);
console.log(data);

var json2 = '{"key1":"value1","key2":"value2"}';
var data2 = JSON.parse(json2);
data2.key3 = 'value3';
console.log(data2);
var data3 = JSON.stringify(data2);
console.log(data3);

var json3 = '{"user":{"user1":{"key1":"value1", "key2":"value2"}, "user2":{"key1":"value1", "key2":"value2"}}}';
var data4 = JSON.parse(json3);
console.log(data4.user.user1);