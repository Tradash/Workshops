#!/usr/bin/env bash

$1 || echo "First parameter is false."
$2 && pwd
$3 || echo "Third parameter is false."
$3 && ls 
