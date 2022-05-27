ALGORITHME
VAR
   set : ARRAY_OF INTEGER[5];
   i,j, pos, elt : INTEGER;
BEGIN
   FOR i FROM 0 TO 3 DO
       Read(set[i]);
   END_FOR

   Write("43");
   Read(elt);
   Write("2");
   Read(pos);
   j := set.length;
   WHILE (j >= pos) DO
       set[j+1] := set[j]; 
       j := j-1; 
   END_WHILE

   set[pos] := elt;
   
END