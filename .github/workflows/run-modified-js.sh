#!/bin/bash

echo "run-sh: Inside run-modified-js.sh"

#read json file and store in variable
a=$(cat /home/runner/files_modified.json)
echo "run-sh: Content of files_modified.json: $a" 

#parse json to get file path and name
#cut " from string
b=$(echo "$a" | cut -d '"' -f 2)
#cut [ from string
b=$(echo "$b" | cut -d '[' -f 2)
#cut ] from string
b=$(echo "$b" | cut -d ']' -f 2)

echo "run-sh: After parsing, file to execute: $b"

#check if this is a .py file
if [[ $b == *".js"* ]]; then
    echo "run-sh: This is a .js file, executing"
    python3 $b
else
    echo "run-sh: File modified is not a js file! Will not execute"
fi
