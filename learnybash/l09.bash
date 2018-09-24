#!/usr/bin/env bash

x=$1
while [[ x -lt $2 ]]; do
	if [[ $((x % 2)) == 0 ]]; then echo $x; fi
	x=$(( $x + 1))
done