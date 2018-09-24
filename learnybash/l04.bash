newparam=${@:2:2}
newparam=("I" "am" ${newparam[*]} "and" ${@:4:1})
echo ${newparam[*]}

