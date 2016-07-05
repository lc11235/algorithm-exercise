//求整数的反向数字，例如321->123,-123 -> -321
//反转整数的时候，如果末尾是0，在反转的时候应该将其去掉，例如10反转为1
//另外要考虑到整数位32位整型，如果反转超出范围则溢出返回0
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const max = 0x7fffffff;
    const min = -0x80000000;
    var sum = 0;
    while(x != 0){
        var temp = x%10;
        sum = sum * 10 +temp;

        if(sum > max || sum <min){
            sum = sum >0? max : min;
            return 0;
        }
        if(x>0){
            x= Math.floor(x/10);
        } else if(x<0){
            x= Math.ceil(x/10);
        }
        
    }
    return sum;
};