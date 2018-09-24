 f=${@:1:1}
 s=${@:2:1}
 t=${@:3:1}
result=$((f*(s+t)))
echo project-$result/{src,dest,test}/{index.js,util.js}
