function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  let uniqa = [arr_num[0]];
  let result = [];
  
  for(let i=1; i < arr_num.length; i++)
  {
    if(arr_num[i-1] !== arr_num[i])
    {
      uniqa.push(arr_num[i]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

document.write(Second_Greatest_Lowest([1,2,3,4,5]));
