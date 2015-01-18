v={
  rgx:[//set of RegExp that they'll help me to evaluate and decode vertices
    /(\S)[rR¡]([^\s\/\*\+-])/,
    /(\S)\|,(.?)$/,
    /(\S)\|,(\s)/,
    /(\s),([\|!])/,
    /(\S\S),(.?)/,
    /([^\s0]),(.?)/,
    /(.?):(.?)/,
    /(\s)\|(\w)/,
    /(\w)\|(\s)/,
    /([^,])(\|)$/,
    /(\S)\|([^\s;])/,
    /(.?);(.?)/],
  abx:[//these are going to be used while evaluating and decodefying
    ' rR ',
    '|0',
    '|0',
    '0',
    ' 0,',
    ' 0,',
    '0 0,',
    '|,',
    ',|',
    ',',
    ',| |,',
    ' 0,0 '],
  psx:['|','!'],
  mpf:'',
  pC:function(n){return v.pf(n.toFixed(5))},
  pF:function(n){return v.pf(n)*(v.mpf?Math.pow(10,v.mpf):1)},
  pf:function(n){return parseFloat(n)},
  op:function(x,y,z){
    z=v.pF(z)||!1
    x=v.a[x.toLowerCase().charCodeAt(0)-97][x.charCodeAt(0)-97>=0?
      v.i
      :1-v.i]
    //if operation matches then return it
    return (y=y||!1)?
              y=='/'?
                x/z
                :y=='*'?
                  x*z
                  :y=='+'?
                    x+z
                    :x-z
              :x},
  v:function(a,m){var i,A
    v.mpf=m||2
    for(i in v.abx)while(ab=v.rgx[i].exec(a))a=a.replace(ab[0],ab[1]+(v.pf(i)==0?' '+/\S([rR¡])[^\s\/\*\+-]/.exec(a)[1]+' ':v.abx[i])+ab[2])
    v.a=a.split(' ')//finishing vector
    for(i in v.a){
      v.a[i]=v.a[i].split(',')//separating vector's values
      A=v.a[i],l=[,0]
      for(I in A){
        A=v.a[i][I]
        al=v.a[i-1]
        v.i=v.pf(I)
        l[I]=v.a[i].length<2?
          isNaN(A)?
            /[rR]/.test(A)?
              l[1]=al[
                A=='r'?
                  v.i
                  :1-v.i]
            :(l[1]=al[0],
              al[1])
          :A==''?
            0
            :v.pF(A)
          :/[a-zA-Z]/.test(A)?
            (smb=/[\/\*\+-]/.exec(A))?
              v.pC(
                v.op(A,
                  smb,
                  A.slice(
                    2,
                    A.length)))
              :v.op(A)
            :isNaN(A)?
              al[A==v.psx[I]?0:1]
              :A==''?
                0
                :v.pF(A)}
      v.a[i]=[l[0],l[1]]}
    v.mpf=''
    v.v2()
  return v.a},
  v2:function(s,i){
    for(i in v.a){
      s&&(v.a[i]=v.a[i].split(','),
      v.a[i][0]=v.a[i][0]*100,
      v.a[i][1]=v.a[i][1]*100)
      v.a[i]=new T.Vector2(v.a[i][0],v.a[i][1])}
    return v.a}}
/*
Luis Fernando Avila Suarez last editing date: 14.8.6 19:49
  Syntax used into vectrix library
  | last (if u are into 0 position then previous 0) otherwise if u are into 1 then previous 1
  ! other side of last (into 0 then 1, into 1 then 0)
  ¡ reverse of (last0,last1) if 4,5 then 5,4
  : 0 0 avoid repeating 0 (non space between previous and next)
  , 0 usually goes together with previous (non space)
  ; 0,0 pair of 0 (nons space between previous and next)
  r means repeat/iterate (there is sensitive space case)
  a-z in alphabetic order letting a be 0 then one can say that b is 1 and c is 2 and so forth/on
  A-Z same as above but shifts in position if a is 0 then A is 1, if b is 0 then B is 1
  consider usage of following examples
  input                   output                      explanation
  '5 |3'                  5,0 5,3                       '| 5|4' first | is last/previous of what? 
  '5 !3'                  5,0 0,3                       '5 !3'    in fact 5 goes with 0 then ! is of opposite side of last/previous
  '5:3'                   5,0 0,3                       shortcut of exmpl frm above
  ',5,|,3'                0,5 0,5 0,3                   chain of Starting 0s
  ';5,|,3'                0,0 5,0 0,0 0,3
  '5;3'                   5,0 0,0 3,0
  '5r3'                   5,0 5,5 3,0
  '97¡56r32'              97,0 0,97 56,0 56,56 32,0
  '31,4 a|b+6'            31,0 0,4 31,4 31,10           a|b+6 = a| |b+6 = 31,4 31,10   (a=31 and b=4 because b is in positon 1)
  '3,41 a|A+9'            3,0 0,41 3,41 3,50            a|A+6 = a| |A+9 = 3,41 3,50    (a=31 and A=50 because A is in positon 1 and it's in Capital/Upper case then it shifts/points to other side/position)
*/
