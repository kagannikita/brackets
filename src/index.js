module.exports = function check(str, bracketsConfig) {

    let arr=[];

    [...str].map((first,i,str)=>{
        bracketsConfig.map((second,j,bracketsConfig)=>{
            if(str[i]===bracketsConfig[j][1]&&arr[arr.length-1]===bracketsConfig[j][0]){
                arr.pop();
            }
            else if(str[i]===bracketsConfig[j][0]){
                arr.push(str[i]);
            }
        });
    });
    return str.length % 2 === 0 && arr.length===0;
}
