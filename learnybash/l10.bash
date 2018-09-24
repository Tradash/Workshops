#!/usr/bin/env bash

function main() {
	echo $FUNCNAME
	myfunc $1 $2 1
}
function myfunc() {

if [[ $1 -ge $2 ]]; then
	return
fi
x=0
if [[ $(($1 % 2)) == 0 ]]; then
		for (( i = 0; i < $3; i++ )); do
			echo -n ' '
		done
		echo $1
		x=1
fi

myfunc $(( $1 + 1 )) $2 $(( $x + $3 ))
}

main $1 $2
