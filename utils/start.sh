#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
FILE=$1

color_off="\033[0m"
blue="\033[0;34m"
bold=$(tput bold)
normal=$(tput sgr0)

# Clear terminal
clear

# Function to comment out 'export {}' at the bottom of the TypeScript file
comment_export_line() {
    local temp_file="$1"
    sed 's/^export {};$/\/\/ export {}/' "$FILE" > "$temp_file"
}

if [[ $FILE == *.ts ]]; then
    # TypeScript
    echo "${blue}${bold}info:${normal}${color_off} TypeScript"
    # Show compiler version
    tsc -v
    echo

    # Create a temporary file
    TEMP_FILE=$(mktemp /tmp/temp_ts.XXXXXX.ts)

    # Comment out 'export {}' line in the temporary file
    comment_export_line "$TEMP_FILE"

    COMPILED_FILE=${TEMP_FILE%.ts}.js
    tsc "$TEMP_FILE" --outFile "$COMPILED_FILE"
    if [[ $? -ne 0 ]]; then
        echo "${blue}${bold}error:${normal}${color_off} TypeScript compilation failed"
        rm "$TEMP_FILE"
        exit 1
    fi

    if [[ -f "$COMPILED_FILE" ]]; then
        clear
        node "$COMPILED_FILE"
        rm "$COMPILED_FILE"
    fi

    # Remove temporary file
    rm "$TEMP_FILE"
else
    echo "${blue}${bold}error:${normal}${color_off} Not a TypeScript file"
fi

# This script assumes that tsc (TypeScript compiler) 
# and node (Node.js) are installed 
# and are available in the system PATH