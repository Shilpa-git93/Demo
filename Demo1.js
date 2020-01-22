var str="shilpa";
var arr=new Array(str.length)
for(var i=0,j=str.length-1;j>=0;i++,j--)
{
    arr[i]=str.charAt(j);
}
console.log(arr)
for(var i=0;i<arr.length;i++)
{
var str1=arr[i].toString().replace(',',"");
    console.log(str1)
}
if(str.localeCompare(str1))
{
    console.log("palindrome")
}
//var str1=String.valueOf(arr)
