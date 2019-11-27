//获取到三个选择列表
var shengSelect =document.querySelector(".sheng");
var shiSelect =document.querySelector(".shi");
var quSelect =document.querySelector(".qu");

var shenglist=['广西壮族自治区','广东','湖北'];
var shilist=[['南宁','桂林','柳州'],['广州','深圳','东莞'],['武汉','荆门','襄阳']];
var qulist=[
    [['南1区','南2区','南3区'],['桂1区','桂2区','桂3区'],['柳1区','柳2区','柳3区']],
    [['广1区','广2区','广3区'],['深1区','深2区','深3区'],['东1区','东2区']],
    [['武1区','武2区','武3区'],['荆1区','荆2区','荆3区'],['襄1区','襄2区','襄3区']]
];
//选择省的下标
var shengIndex =0;
//加载省
for(var i=0;i<shenglist.length;i++){
    var shengOption = new Option(shenglist[i]);
    shengSelect.options.add(shengOption);
}
//选择省后加载市
shengSelect.onchange =function(eve){
    shengIndex =eve.target.selectedIndex-1;
    if(shengIndex == -1){
        shiSelect.options.length= 0;
        quSelect.options.length=0;
    }else{
        shiSelect.options.length= 0;
        quSelect.options.length=0;
        for(var j=0;j<shilist.length;j++){
            var shiOption =new Option(shilist[shengIndex][j]);
            shiSelect.options.add(shiOption);
        }
        //加载市的同时，加载第一个市的全部区
        for(var k=0;k<qulist[shengIndex][0].length;k++){
            var quOption =new Option(qulist[shengIndex][0][k]);
            quSelect.options.add(quOption);
        }
    }
}
　　　　　//选择市后加载区
// shiSelect.onchange=function(eve){
//     var shiIndex =eve.target.selectedIndex;
//     quSelect.options.length =0;
//     for(var n =0;n<qulist[shengIndex][shiIndex].length;n++){
//         var quOption =new Option(qulist[shengIndex][shiIndex][n]);
//         quSelect.options.add(quOption);
//     }
// }