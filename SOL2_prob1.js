ALGORITHME
Var 
   htab : HASH_TABLE <INTIGER,INTIGER>;
   set1,set2, : ARRAY_OF_INTEGER;
   i, sum, : INTIGER;
BEGIN   
sum=0;

FOR i FROM 0 TO str1.length -1 STEP 1  DO
IF (htab.lookup(str1[i]) = TRUE) THEN
    sum := htab.get(str1[i]);
    htab.insert(str1[i],sum+1);
ELSE
    htab.insert(str1[i],1);
END_IF
END_FOR

FOR i FROM 0 TO str2.length -1 STEP 1  DO
IF (htab.lookup(str2[i]) = TRUE) THEN
    sum := htab.get(str2[i]);
    htab.insert(str[i],sum+1);
ELSE
    htab.insert(str2[i],1);
END_IF
END_FOR

FOR i FROM 0 TO str.length -1 STEP 1  DO
IF (htab.get(str[i]) = 1) THEN
    sum := str[i];
    BREAK;
END_IF
END_FOR

Write(sum);
END

