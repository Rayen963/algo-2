ALGORITHME
VAR 
   set1,set2, : ARRAY_OF_INTEGER;
    sum,i,j, : INTIGER;

BEGIN 
sum=0;
for(let i =0; i < set1.length -1; i++ ){
   for(let j=0; j < set2.length -1; j++){
      if(set1[i] == set2[j]){
         break
      }
   }
   if(j=set2.length){
      sum=sum +set[i];
   }
}


for(let j =0; j < set2.length; j++ ){
   for(let i=0; i < set1.length -1; i++){
      if(set2[j] == set1[i]){
         break
         
      }
     
   }
   if(i=set1.length)
   sum = sum + set2[j];
}
ENDFOR
END
